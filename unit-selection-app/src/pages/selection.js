import React, { useState } from "react";
import {NavigationSelection} from "../components/common/navigation";
import {Row, Col} from "react-bootstrap";
import ToggleDiv from "../components/toggle";
import CreateArea from "../components/createArea";
import UnitCard from "../components/unitCard";
import {UnitListCardRemove} from "../components/common/unitListCard";
// import {GET_ALL_UNITS_QUERY} from '../queries/units/index';
import { useQuery } from "@apollo/client";


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

  const sampleYear = [
    {id:"uuid9",
    name:"year1"},
    {id:"uuid10",
    name:"year2"},
    {id:"uuid11",
    name:"year3"},
    {id:"uuid12",
    name:"honour"},
    {id:"uuid13",
    name:"master1"},
    {id:"uuid14",
    name:"master2"}
  ]

  const sampleSemester = [
    {id:"uuid15",
    name:"Semester1"},
    {id:"uuid16",
    name:"Semester2"},
    {id:"uuid17",
    name:"SummerA"},
    {id:"uuid18",
    name:"SummerB"},
    {id:"uuid19",
    name:"Winter"}
  ]

  // console.log("AAAAAAAA")
  // const {sampleUnits, error} = useQuery(GET_ALL_UNITS_QUERY)
  // console.log("EEEEEE")
  // if (error) {
  //   console.log(error)
  // }

  // console.log(sampleUnits)
  
  console.log("EEEEEE")
  const sampleUnits=
    [
      {
        unitCode: 'FIT3162',
        unitName: 'Computer Science Project 2',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'This unit provides practical experience in researching, designing, developing and testing a non-trivial computer science project. Projects are generally software-based, although sometimes they may involve hardware development',
        workloadReq: 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester',
        year:"year3",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT3161',
        unitName: 'Computer Science Project 1',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'This unit provides practical experience in researching, designing, developing and testing a substantial computer science project.',
        workloadReq: 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester',
        year:"year3",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT3155',
        unitName: 'Advanced Data Structures and Algorithms',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'lorem ipsum dolores umbridge',
        workloadReq: 'your soul because the first assignment will decide your grades',
        year:"year3",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT3045',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"year3",
        semester:"Semester1"

      },
      {
        unitCode: 'FIT2032',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"year2",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT3333',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"year3",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT9999',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"year3",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT8888',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"year3",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT7777',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"year3",
        semester:"Semester1"
      }
  ]

 
  const [searchRequest,setSearchRequest]=useState("");
  const [filterResults,setFilterResults]=useState([]);
  const [filterUnits,setFilterUnits]=useState(
    {
      faculty:[],
      year:[],
      semester:[]
    }
  );
  const [units, setUnits] = useState([]);
  const [selectedUnits, setSelectedUnits] = useState([]);

  function handleSearchRequest(event) {
    event.preventDefault();
    var result=null;
    for (var i=0;i<sampleUnits.length;i++){
      if(sampleUnits[i].unitCode===searchRequest){
         result=sampleUnits[i];
         break;
      }
    }
    if(result!=null){
      setFilterResults((prevUnits) => {
        for (var i = 0; i < prevUnits.length; i++) {
          if (prevUnits[i].unitCode === result.unitCode) {
            return prevUnits;
          }
        }
        return [...prevUnits, result];
      });
    }

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

  function handleSortFilter(event){
    const result=[];
    setFilterResults([]);
    for (var i=0;i<sampleUnits.length;i++){
      if(filterUnits.faculty.includes(sampleUnits[i].facultyName)&&filterUnits.year.includes(sampleUnits[i].year)&&filterUnits.semester.includes(sampleUnits[i].semester)){
        result.push(sampleUnits[i]);
      }
    }
    setFilterResults(prevResults=>[...prevResults,...result]);
    event.preventDefault();
  }

  const [sidebar,setSidebar] = useState(true);

  function showSideBar(){
    setSidebar(prevStatus=>!prevStatus);
    console.log(sidebar);

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

          <Col md={sidebar?7:10}>
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
                        // workloadReq={unit.workloadReq}
                        // year={unit.year}
                        semester={unit.teachingPeriod}
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
