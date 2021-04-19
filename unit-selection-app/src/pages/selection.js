import React, { useState, useEffect } from "react";
import {NavigationSelection} from "../components/common/navigation";
import {Row, Col} from "react-bootstrap";
import ToggleDiv from "../components/toggle";
import CreateArea from "../components/createArea";
import UnitCard from "../components/unitCard";
import {UnitListCardRemove} from "../components/common/unitListCard";
// import {GET_ALL_UNITS_QUERY} from '../queries/units/index';
import { useLazyQuery, gql, useQuery } from "@apollo/client";

function renameKey(o, oldKey, newKey) {
  delete Object.assign(o, {[newKey]: o[oldKey] })[oldKey];
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
    id:"1",
    name:"Year 1"
  }, {
    id:"2",
    name:"Year 2"
  }, {
    id:"3",
    name:"Year 3"
  }, {
    id:"Hons",
    name:"Honours"
  }, {
    id:"Masters (Part 1)",
    name:"Masters (Part 1)"
  }, {
    id:"Masters (Part 2)",
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

  const {loading, error, data} = useQuery(GET_ALL_FACULTIES);
  if (loading) return [];
  const faculties = data.getFaculties

  // Remaps the 'periodName' key to 'name' to maintain the elegance of the Toggle element 
  return faculties.map(({facultyName, ...rest}) => ({
    name: facultyName,
    ...rest
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

  const {loading, error, data} = useQuery(GET_ALL_TEACHING_PERIODS);
  if (loading) return [];
  const teachingPeriods = data.getTeachingPeriods

  // Remaps the 'periodName' key to 'name' to maintain the elegance of the Toggle element 
  return teachingPeriods.map(({periodName, ...rest}) => ({
    name: periodName,
    ...rest
  }))
}

function AllUnits() {
  const GET_ALL_UNITS_QUERY = gql`
    query getAllUnits {
      getUnits {
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

  const {loading, error, data} = useQuery(GET_ALL_UNITS_QUERY);
  if (loading) return [];
  return data.getUnits
}

function FilterUnits(filters) {

}

export default function Selection() {
  const page = "Selection";

  const [searchRequest,setSearchRequest]=useState("");
  const [searchUnitsQuery, searchQuery] = useLazyQuery(GET_UNIT_BY_UNITCODE_QUERY,{
    variables: {unitCode: `${searchRequest}`}
  });

  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchRequest) return [];
    searchUnitsQuery();
    if (searchQuery.data) {
      setSearchResults(searchQuery.data.getUnit);
    }
  }, [searchRequest, searchQuery.data, searchUnitsQuery]);
  const [filterResults,setFilterResults]=useState([]);
  const [units, setUnits] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState(()=>{
    const localData = localStorage.getItem('selectedUnits');
    return localData ? JSON.parse(localData):[]
  });
  const [filterUnitResults,setFilterUnitResults]=useState([]);
  const [filterUnits,setFilterUnits]=useState({
    faculty:[],
    year:[],
    semester:[]
  });
  const [filtersString, setFiltersString] = useState("");

  const [filterUnitsQuery, filterQuery] = useLazyQuery(GET_UNITS_WITH_FILTERS,{
    variables: {optionsString: `${filtersString}`}
  });

  useEffect(() => {
    setFiltersString((_) => JSON.stringify(filterUnits))
    filterUnitsQuery();
    if (filterQuery.loading) setFilterResults(() => []);
    if (filterQuery.data) {
      setFilterUnitResults((_) => filterQuery.data.getUnitsWithFilters);
    }
  }, [filterUnits, filterQuery.data, filterUnitsQuery]);

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

  function handleSortFilter(event) {
    event.preventDefault();
    setFilterResults([])
    if (filterUnits.faculty.length == filterUnits.year.length == filterUnits.semester.length == 0) {
      setFilterResults((_) => AllUnits())
    } else {
      setFilterResults((_) => filterUnitResults)
    }
    //   setFilterResults(()=> {
    //     const {loading, error, data} = useQuery(GET_ALL_UNITS_QUERY);
    //     if (loading) console.log("loading...")
    //     if (error) {
    //       console.log(error)
    //     }
      
    //     if (data) console.log(data)
    //     return data
    //   })
    // }
    return filterUnitResults;
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

  function handleChange(event) {
    const {value, name, checked, id} = event.target;
    if(checked){
      setFilterUnits(prevValue => {
        if (name==="Semester") {
          return{
            faculty:[...prevValue.faculty],
            year:[...prevValue.year],
            semester:[...prevValue.semester,id]
          }
        } else if (name==="Year") {
          return{
          faculty:[...prevValue.faculty],
          year:[...prevValue.year,id],
          semester:[...prevValue.semester]
          }
        } else if (name==="Faculty") {
          return{
            faculty:[...prevValue.faculty,id],
            year:[...prevValue.year],
            semester:[...prevValue.semester]
          }
        } else {
          console.log("Mysterious clicking noise")
        }
      })
    } else {
      setFilterUnits(prevValue => {
        if (name==="Semester") {
          return{
            faculty:[...prevValue.faculty],
            year:[...prevValue.year],
            semester:prevValue.semester.filter(element=>element!==id)
          }
        } else if (name==="Year") {
          return {
            faculty:[...prevValue.faculty],
            year:prevValue.year.filter(element=>element!==id),
            semester:[...prevValue.semester]
          }
        } else {
          return {
            faculty:prevValue.faculty.filter(element=>element!==id),
            year:[...prevValue.year],
            semester:[...prevValue.semester]
          }
        }

      })

    }
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
            <form onSubmit={handleSortFilter}>
              <div className="height-45 overflow-auto">
                <ToggleDiv name="Faculty" data={Faculties()} onSelect={handleChange}/>
                <ToggleDiv name="Year" data={years} onSelect={handleChange}/>
                <ToggleDiv name="Semester" data={TeachingPeriods()} onSelect={handleChange}/>
              </div>
              <button className="btn btn-secondary mt-3">Show Filtered Result</button>
            </form> 
            <hr/>
            <h6 className="mt-2">Unit Code Search</h6> 
            <form onSubmit={handleSearchRequest}>
              <input type="text"  name="unitCode" value={searchRequest} onChange={e=>setSearchRequest(e.target.value)}></input>
              <button className="btn btn-secondary mt-2" type="submit" value="submit">Search</button>
            </form>
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
