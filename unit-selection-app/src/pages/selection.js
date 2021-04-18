import React, { useState, useEffect } from "react";
import {NavigationSelection} from "../components/common/navigation";
import {Row, Col} from "react-bootstrap";
import ToggleDiv from "../components/toggle";
import CreateArea from "../components/createArea";
import UnitCard from "../components/unitCard";
import {UnitListCardRemove} from "../components/common/unitListCard";
// import {GET_ALL_UNITS_QUERY} from '../queries/units/index';
import { useLazyQuery, gql } from "@apollo/client";

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

const sampleYear = [
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

// function Filter() {
//   const [filterResults,setFilterResults]=useState([]);
//   const [filterUnits,setFilterUnits]=useState(
//     {
//       faculty:[],
//       year:[],
//       semester:[]
//     }
//   );
//   return [];
// }

export default function Selection() {
  const page = "Selection";

  const sampleFaculty = [
    {
      id:"uuid1",
      name:"Faculty of Information Technology"
    },
    {
      id:"uuid2",
      name:"Faculty of Business & Economics"
    },
    {
      id:"uuid3",
      name:"Faculty of Science"
    },
    {
      id:"uuid4",
      name:"Faculty of Law"
    },
    {
      id:"uuid5",
      name:"Faculty of Pharmacy and Pharmaceutical Sciences"
    },
    {
      id:"uuid6",
      name:"Faculty of Education"
    },
    {
      id:"uuid7",
      name:"Faculty of Medicine, Nursing and Health Sciences"
    },
    {
      id:"uuid8",
      name:"Faculty of Art, Design and Architecture"
    }
  ]



  const sampleSemester = [
    {
      id: 1,
      name:"Semester1"
    }, {
      id: 2,
      name:"Semester2"
    },{
      id: 3,
      name:"SummerA"
    },{
      id: 4,
      name:"SummerB"
    },{
      id: 5,
      name:"Winter"
    }
  ]
  const [searchRequest,setSearchRequest]=useState("");
  const [searchUnits, { data, error, loading }] = useLazyQuery(GET_UNIT_BY_UNITCODE_QUERY,{
    variables: {unitCode: `${searchRequest}`}
  });
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (!searchRequest) return null;
    searchUnits();
    if (data) {
      setSearchResults(data.getUnit);
    }
  }, [searchRequest, data, searchUnits]);
  // const [filterResults,setFilterResults]=useState([]);
  const [units, setUnits] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState(()=>{
    const localData = localStorage.getItem('selectedUnits');
    return localData ? JSON.parse(localData):[]
  });
  const [filterResults,setFilterResults]=useState([]);
  const [filterUnits,setFilterUnits]=useState(    {
    faculty:[],
    year:[],
    semester:[]
  }
);

  useEffect(()=> {localStorage.setItem('selectedUnits',JSON.stringify(selectedUnits))},[selectedUnits]);
  
  function handleSearchRequest(event) {
    event.preventDefault();
    console.log(searchResults)
    if (searchResults) {
      setFilterResults(() => searchResults)
    } else {
      setFilterResults((prevUnits) => prevUnits)
    }
    return searchResults;
  }

  function handleSortFilter(event) {
    // const result = []
    // setFilterResults([])
    // if (filterUnits.faculty.length() == filterUnits.year.length() == filterUnits.semester.length() == 0) {
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
    return [];
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
  function handleChange(event){
    const {value,name,checked} = event.target;
    if(checked){
    setFilterUnits(prevValue=>{
      if(name==="Semester"){
        return{
          faculty:[...prevValue.faculty],
          year:[...prevValue.year],
          semester:[...prevValue.semester,value]
        }
      }else if(name==="Year"){
        return{
        faculty:[...prevValue.faculty],
        year:[...prevValue.year,value],
        semester:[...prevValue.semester]
        }
      }else{
        return{
          faculty:[...prevValue.faculty,value],
          year:[...prevValue.year],
          semester:[...prevValue.semester]
          }
      }
    })}
    else{
      setFilterUnits(prevValue=>{
        if(name==="Semester"){
          return{
            faculty:[...prevValue.faculty],
            year:[...prevValue.year],
            semester:prevValue.semester.filter(element=>
              element!==value
            )
          }
        }else if(name==="Year"){
          return{
          faculty:[...prevValue.faculty],
          year:prevValue.year.filter(element=>element!==value),
          semester:[...prevValue.semester]
          }
        }else{
          return{
            faculty:prevValue.faculty.filter(element=>element!==value),
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
                <ToggleDiv name="Faculty" data={sampleFaculty} onSelect={handleChange}/>
                <ToggleDiv name="Year" data={sampleYear} onSelect={handleChange}/>
                <ToggleDiv name="Semester" data={sampleSemester} onSelect={handleChange}/>
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
