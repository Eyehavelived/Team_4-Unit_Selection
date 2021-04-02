import React, { useState } from "react";
import {NavigationSelection} from "../components/common/navigation";
import {Row, Col} from "react-bootstrap";
import ToggleDiv from "../components/toggle";
import CreateArea from "../components/createArea";
import Unit from "../components/unit";



export default function Selection() {
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
        unitName: 'ADvanced Data Structures and Algorithms',
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
  function addUnit(newUnit) {
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
    <div>
      <NavigationSelection onSide={showSideBar}/>

      <Row>
        {sidebar &&
          <Col md={2} className="ms-4">
            <form onSubmit={handleSortFilter}>
              <div id="container-filter" className="overflow-auto">
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

          <Col md={2} className="ms-4">
            
              <u><b>Units</b></u>
              <div className="unit-display">
              {filterResults.length>0&&
              <div className="scroll-page mt-2">
                <div className="force-overflow">
                  {filterResults.map((element,index)=>{
                    return(
                    <CreateArea onAdd={addUnit} 
                      key={index} 
                      id={element.unitCode} 
                      unitCode={element.unitCode}
                      unitName={element.unitName}
                      facultyName={element.facultyName}
                      unitType={element.unitType}
                      synopsis={element.synopsis}
                      workloadReq={element.workloadReq}
                      year={element.year}
                      semester={element.semester}
                      />);
                    })}
                </div>
              </div>
              }
              </div>
          
            <div className=" mt-1">
              <u><b>Selected Units</b></u>
              <div className="schedule-scroll">
                  {selectedUnits.map((unitItem,index) => {
                    return (
                      <Unit
                        key={index}
                        id={unitItem.unitCode}
                        unitCode={unitItem.unitCode}
                        unitName={unitItem.unitName}
                        compare={false}
                        onDelete={deleteSelectedUnit}
                      />
                    );
                  })}
            </div>
            </div>
          </Col>
          <Col>
            <div className={sidebar?"grey-grid row flex-nowrap flex-row overflow-auto":"grey-grid2 row flex-nowrap flex-row overflow-auto no-gutters"} style={units.length===0?{backgroundColor:"#d3d3d3"}:{}}>
                {
                  units.length > 0 && (
                  units.map(element=>
                  <Col>
                    <Unit
                    key={element.unitCode}
                    id={element.unitCode}
                    unitCode={element.unitCode}
                    unitName={element.unitName}
                    unitType={element.unitType}
                    synopsis={element.synopsis}
                    workloadReq={element.workloadReq}
                    year={element.year}
                    semester={element.semester}
                    //This normal attribute is used to figure out the unit in selected Unit or in compare window
                    compare={true}
                    onDelete={deleteUnit}
                    onAddSelected={addInSelectedUnit}
                    sideBarStatus={sidebar}
                  />
                  </Col>
                  ))}
            </div>
          </Col>
          
        </Row>

    </div>
  );
}
