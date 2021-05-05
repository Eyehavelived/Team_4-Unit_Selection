import React, { useState, useEffect } from "react";
import {NavigationSelection} from "../components/common/navigation";
import {Row, Col} from "react-bootstrap";
import ToggleDiv from "../components/toggle";
import CreateArea from "../components/createArea";
import UnitCard from "../components/unitCard";
import {UnitListCardRemove} from "../components/common/unitListCard";
import { useLazyQuery, gql, useQuery } from "@apollo/client";
import { useHistory } from "react-router-dom";

function getToggleId(itemId, itemName) {
  const idDict = {
    "Faculty": "1",
    "Year": "2",
    "Semester": "3",
    "Location":"4"
  }
  return idDict[itemName] + "_" + itemId.toString()
}

const GET_UNIT_BY_UNITCODE_QUERY = gql`
    query getUnitFromUnitcode($unitCode: String) { 
        getUnit(unitCode: $unitCode) {
            unitCode
            unitName
            synopsis
            unitCoRequisites
            unitProhibitions
            unitPreRequisites
            teachingPeriods
            locationNames
            facultyName
            degreeType
            isActive
            workloadReq
        }
    }
`

const GET_UNITS_WITH_FILTERS = gql`
  query getUnitsUsingFilters($optionsString: String) { 
    getUnitsWithFilters(optionsString: $optionsString) {
      unitCode
      unitName
      synopsis
      unitCoRequisites
      unitProhibitions
      unitPreRequisites
      teachingPeriods
      locationNames
      facultyName
      degreeType
      isActive
      workloadReq
    }
  }
`

const years = [
  {
    id: "2_1",
    optionId:"1",
    name:"Year 1"
  }, {
    id: "2_2",
    optionId:"2",
    name:"Year 2"
  }, {
    id: "2_3",
    optionId:"3",
    name:"Year 3"
  }, {
    id: "2_4",
    optionId:"Hons",
    name:"Honours"
  }, {
    id: "2_5",
    optionId:"Masters (Part 1)",
    name:"Masters (Part 1)"
  }, {
    id: "2_6",
    optionId:"Masters (Part 2)",
    name:"Masters (Part 2)"
  }
]

function Faculties() {
  const GET_ALL_FACULTIES = gql`
    query getAllFaculties {
      getFaculties {
        id
        facultyName
      }
    }
  `

  const {loading, data, error, called} = useQuery(GET_ALL_FACULTIES);

  if (loading) return [];
  if (error) {
    console.log(error)
    return [];
  }
  if (error) {
    console.log(called)
    return [];
  }
  const faculties = data.getFaculties

  // Remaps the 'periodName' key to 'name' to maintain the elegance of the Toggle element 
  return faculties.map(({facultyName, id}) => ({
    name: facultyName,
    optionId: id,
    id: getToggleId(id, "Faculty")
  }))
}

function TeachingPeriods() {
  const GET_ALL_TEACHING_PERIODS = gql`
    query getAllTeachingPeriods {
      getTeachingPeriods {
        id
        periodName
      }
    }
  `

  const {loading, data, error, called} = useQuery(GET_ALL_TEACHING_PERIODS);
  if (loading) return [];
  if (error) {
    console.log(error)
    return [];
  }
  if (error) {
    console.log(called)
    return [];
  }
  const teachingPeriods = data.getTeachingPeriods

  // Remaps the 'periodName' key to 'name' to maintain the elegance of the Toggle element 
  return teachingPeriods.map(({periodName, id}) => ({
    name: periodName,
    optionId: id,
    id: getToggleId(id, "Semester")
  }))
}

function TeachingLocations() {
  const GET_ALL_LOCATIONS = gql`
    query getAllLocations {
      getLocations {
        id
        locationName
      }
    }
  `
  const {loading, data, error, called} = useQuery(GET_ALL_LOCATIONS);
  if (loading) return [];
  if (error) {
    console.log(error)
    return [];
  }
  if (error) {
    console.log(called)
    return [];
  }
  const locations = data.getLocations

  // Remaps the 'periodName' key to 'name' to maintain the elegance of the Toggle element 
  return locations.map(({locationName, id}) => ({
    name: locationName,
    optionId: id,
    id: getToggleId(id, "Location")
  }))
}

export default function Selection() {
  const history = useHistory();
  const navigateTo = () => history.push('/schedule');

  const page = "Selection"; 

  const [searchRequest,setSearchRequest]=useState("");
  const [getSearchUnits, searchUnitsResults] = useLazyQuery(GET_UNIT_BY_UNITCODE_QUERY,{
    variables: {unitCode: `${searchRequest}`}
  });

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchRequest) return [];
    getSearchUnits();
    if (searchUnitsResults.data) {
      setSearchResults(searchUnitsResults.data.getUnit);
    }
  }, [searchRequest, searchUnitsResults.data, getSearchUnits]);
  const [filterResults,setFilterResults]=useState([]);
  const [units, setUnits] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState(()=>{
    const localData = localStorage.getItem('selectedUnits');
    return localData ? JSON.parse(localData):[]
  });
  const [filterUnitResults,setFilterUnitResults]=useState([]);
  const [filterOptions,setFilterOptions]=useState({
    faculty:[],
    year:[],
    semester:[],
    location:[]
  });

  const [filtersString, setFiltersString] = useState("");

  const [getFilteredUnits, filteredUnitsResult] = useLazyQuery(GET_UNITS_WITH_FILTERS,{
    variables: {optionsString: `${filtersString}`}
  });

  useEffect(() => {
    setFiltersString(() => JSON.stringify(filterOptions))
    getFilteredUnits();
    if (filteredUnitsResult.data) {
      setFilterUnitResults(() => filteredUnitsResult.data.getUnitsWithFilters)
    }
  }, [filterOptions, filteredUnitsResult.data, getFilteredUnits])

  useEffect(()=> {localStorage.setItem('selectedUnits',JSON.stringify(selectedUnits))},[selectedUnits]);
  
  function handleSearchRequest(event) {
    event.preventDefault();
    if (searchResults) {
      setFilterResults((_) => searchResults)
    } else {
      setFilterResults((prevUnits) => prevUnits)
    }
    return searchResults;
  }

  function handleSubmitOptionsFilter(event) {
    event.preventDefault();
    if (filterUnitResults) setFilterResults(() => filterUnitResults)
  } 

  function addUnit(newUnit){
    setUnits((prevUnits) => {
      for (var i = 0; i < prevUnits.length; i++) {
        if (prevUnits[i].unitCode === newUnit.unitCode) {
          return prevUnits;
        }
      }
      return [...prevUnits, newUnit];
    });
  }

  function deleteUnit(id) {
    setUnits((prevUnits) => {
      return prevUnits.filter((unitItem) => {
        return unitItem.unitCode !== id;
      });
    });
  }

  function addInSelectedUnit(unitcode,title) {
    const newUnit = {
      unitCode: unitcode,
      unitName: title,
    };
    setSelectedUnits((prevSelectedUnits) => {
      for (var i = 0; i < prevSelectedUnits.length; i++) {
        if (prevSelectedUnits[i].unitCode === newUnit.unitCode) {
          return prevSelectedUnits;
        }
      }
      return [...prevSelectedUnits, newUnit];
    });
  }

  function deleteSelectedUnit(id) {
    setSelectedUnits((prevSelectedUnits) => {
      return prevSelectedUnits.filter((unitItem) => {
        return unitItem.unitCode !== id;
      });
    });
  }

  function handleToggleOptions(event) {
    const {name, checked} = event.target;
    // for some reason, using the above to get optionid fails and always returns undefined instead.
    // could be because optionid isn't a default toggle attribute and so it's not passed properly under the hood.
    const optionId = event.target.getAttribute('optionid');

    setFilterOptions(({faculty, year, semester,location}) => ({
      faculty: (name === "Faculty") ? (checked) ? [...faculty, optionId]: faculty.filter(element => element !== optionId) : faculty,
      year: (name === "Year") ? (checked) ? [...year, optionId]: year.filter(element => element !== optionId) : year,
      semester: (name === "Semester") ? (checked) ? [...semester, optionId]: semester.filter(element => element !== optionId) : semester,
      location: (name === "Location") ? (checked) ? [...location, optionId]: location.filter(element => element !== optionId) : location
    }))
  }

  const [sidebar,setSidebar] = useState(true);

  function showSideBar(){
    setSidebar(prevStatus=>!prevStatus);
  }
  
  return (
    <div className="overflow-hidden">
      <NavigationSelection onSide={showSideBar} page={page}/>

      <Row>
        {sidebar &&
          <Col md={2} className="white-bg height-80 ms-5 py-2 px-2">
          <h6 className="mt-2">Unit Code Search</h6> 
            <form onSubmit={handleSearchRequest}>
              <input type="text"  name="unitCode" value={searchRequest} onChange={e=>setSearchRequest(e.target.value)}></input>
              <button className="btn btn-secondary btn-sm mb-1" type="submit" value="submit">Search</button>
            </form>
            <hr/>
            <form onSubmit={handleSubmitOptionsFilter}>
              <div className="height-45 overflow-auto">
                <ToggleDiv name="Faculty" data={Faculties()} onSelect={handleToggleOptions}/>
                <ToggleDiv name="Year" data={years} onSelect={handleToggleOptions}/>
                <ToggleDiv name="Semester" data={TeachingPeriods()} onSelect={handleToggleOptions}/>
                <ToggleDiv name="Location" data={TeachingLocations()} onSelect={handleToggleOptions}/>
              </div>
              <button className="btn btn-secondary mt-3">Show Filtered Result</button>
            </form> 
            <button className="btn mt-3 btn-primary" onClick={navigateTo}
            style={selectedUnits.length>0?{background:"#0275d8" }:{background:"grey"}} type="button">Go to Schedule {'>'}</button>
          </Col>
          
        }

          <Col md={2} className="height-80 ms-3">
            <div className="white-bg height-40 py-2 px-2">
              <u><h6>Units</h6></u>
              <div className="height-30 overflow-auto">
                {filterResults.length>0 && <CreateArea unitList={filterResults} onAdd={addUnit}/>}
              </div>
            </div>
              
          
            <div className="white-bg height-40 py-2 px-2 mt-2">
              <u><h6>Selected Units</h6></u>
              <div className="height-30 overflow-auto">
                  {selectedUnits.map((unit) => {
                    return (
                      <UnitListCardRemove code={unit.unitCode} name={unit.unitName}  onDelete={deleteSelectedUnit}/>
                    );
                  })}
              </div>
            </div>
          </Col>

          <Col md={sidebar?7:9}>
            <div className="grey-bg height-80 ms-3 py-2 px-1 row flex-row flex-nowrap overflow-auto">
                {
                  units.length > 0 && (
                  units.map((unit)=>
                  
                      <UnitCard
                        key={unit.unitCode}
                        id={unit.unitCode}
                        unitCode={unit.unitCode}
                        unitName={unit.unitName}
                        unitType={unit.degreeType}
                        location={unit.locationNames}
                        synopsis={unit.synopsis}
                        workloadReq={unit.workloadReq}
                        semester={unit.teachingPeriods}
                        onDelete={deleteUnit}
                        onAddSelected={addInSelectedUnit}
                      />
                  ))}
            </div>
          </Col>
          
        </Row>

    </div>
  );
}
