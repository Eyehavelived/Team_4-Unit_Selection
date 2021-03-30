import React, { useState } from "react";
import { NavigationSchedule } from "../components/common/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col} from "react-bootstrap";
import ToggleDiv from "../components/common/toggle";
import CreateArea from "../components/createArea";
import Unit from "../components/unit";



export default function Selector() {
  const sampleFaculty = 
    {
      title:
      <ul  className="no-bullets">
      <li>
      <label><input onChange={handleChange} type="checkbox" id="uuid1" name="Faculty" value='Faculty of Information Technology'/>Information Techonology</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid2" name="Faculty" value="Business and Economics"/>
      Business and Economics</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid3" name="Faculty" value="Science" />
      Science</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid4" name="Faculty" value="Law"  />
      Law</label>
      </li>
      <li>
      <label onChange={handleChange} > <input type="checkbox" key="uuid5" name="Faculty" value="Pharmacy and Pharmaceutical Sciences" />Pharmacy and Pharmaceutical Sciences</label>
      </li>
      <li>
      <input onChange={handleChange} type="checkbox" key="uuid6" name="Faculty" value="Education"/>
      <label> Education</label>
      </li>
      <li>
      <label onChange={handleChange}><input type="checkbox" key="uuid7" name="Faculty" value="Medicine, Nursing and Health Sciences"/>Medicine, Nursing and Health Sciences</label>
     
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid8" name="Faculty" value="Art, Design and Architecture"/>
       Art, Design and Architecture</label>
      </li>
      </ul>
    };
  const sampleYear = 
    {
      title:<ul className="no-bullets">
      <li>
      <label> <input onChange={handleChange} type="checkbox" key="uuid9" name="Year" value="2017"/>
      2017</label>
      </li>
      <li>
      <label>  <input onChange={handleChange} type="checkbox" key="uuid10" name="Year" value="2018"/>
      2018</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid11" name="Year" value="2019"/>
      2019</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid12" name="Year" value="2020"/>
      2020</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid13" name="Year" value="2021"/>
       2021</label>
      </li>
      </ul>
    };
  const sampleSemeter = 
    {
      title:
      <ul className="no-bullets">
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid14" name="Semester" value="Semester1"/>
      Semester 1</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid15" name="Semester" value="Semester2"/>
      Semester 2</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid16" name="Semester" value="SummerA"/>
      Summer A</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid17" name="Semester" value="SummerB"/>
      Summer B</label>
      </li>
      <li>
      <label><input onChange={handleChange} type="checkbox" key="uuid18" name="Semester" value="Winter"/>
      Winter</label>
      </li>
      </ul>  
    };
  const sampleUnits=
    [
      {
        unitCode: 'FIT3162',
        unitName: 'Computer Science Project 2',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'This unit provides practical experience in researching, designing, developing and testing a non-trivial computer science project. Projects are generally software-based, although sometimes they may involve hardware development',
        workloadReq: 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester',
        year:"2021",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT3161',
        unitName: 'Computer Science Project 1',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'This unit provides practical experience in researching, designing, developing and testing a substantial computer science project.',
        workloadReq: 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester',
        year:"2021",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT3155',
        unitName: 'ADvanced Data Structures and Algorithms',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'lorem ipsum dolores umbridge',
        workloadReq: 'your soul because the first assignment will decide your grades',
        year:"2021",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT3045',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"2021",
        semester:"Semester1"

      },
      {
        unitCode: 'FIT2032',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"2021",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT6666',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"2021",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT9999',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"2021",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT8888',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"2021",
        semester:"Semester1"
      },
      {
        unitCode: 'FIT7777',
        unitName: 'Industry-based learning',
        facultyName: 'Faculty of Information Technology',
        unitType: 'Undergraduate',
        synopsis: 'Students on placement participate full time in a defined, graduate level role',
        workloadReq: 'Students on placement are deployed full-time for 22 weeks with the industry partners',
        year:"2021",
        semester:"Semester1"
      }
  ]

 
  const [searchRequest,setSearchRequest]=useState("");
  const [filterResults,setFilterResults]=useState([]);
  const [filterUnits,setFilterUnits]=useState(
    {
      faculty:"",
      year:"",
      semester:""
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
    const {value,name} = event.target;
    setFilterUnits(prevValue=>{
      if(name==="Semester"){
        return{
          faculty:prevValue.faculty,
          year:prevValue.year,
          semester:value
        }
      }else if(name==="Year"){
        return{
        faculty:prevValue.faculty,
        year:value,
        semester:prevValue.semester
        }
      }else{
        return{
          faculty:value,
          year:prevValue.year,
          semester:prevValue.semester
          }
      }
    })
  }
  function handleSortFilter(event){
    const {faculty,semester,year}=filterUnits;
    const result=[]
    setFilterResults([]);
    for (var i=0;i<sampleUnits.length;i++){
      if(sampleUnits[i].facultyName===faculty&&sampleUnits[i].year===year&&sampleUnits[i].semester===semester){
        result.push(sampleUnits[i]);
      }
    }
    setFilterResults(prevResults=>[...prevResults,...result]);
    event.preventDefault();
  }

  const [sidebar,setSidebar] = useState(true);
  // const showSideBar = (prevStatus)=>{return (
    
  //   setSidebar(!prevStatus)
  //   console.log(sidebar)
    
  //   )};
  function showSideBar(){
    setSidebar(prevStatus=>!prevStatus);
    console.log(sidebar);

  }

  
  
  return (
    <section className="container home">
      <div className="section hero">
        <NavigationSchedule onSide={showSideBar}/>
      </div>
      <Container>
        <Row>
        {sidebar&&
          <Col xs={3} className={sidebar?'nav-menu active':'nav-menu'}>
          <form onSubmit={handleSortFilter}>
            <ToggleDiv data={sampleFaculty} name="Faculty" onSide={showSideBar}/>
            <ToggleDiv data={sampleYear} name="Year" />
            <ToggleDiv data={sampleSemeter} name="Semester" />
            <button className="schedule-button">Show filtered result</button>
          </form> 
            <h6><b>Unit Code Search</b></h6> 
            <form onSubmit={handleSearchRequest}>
              <input type="text"  name="unitCode" value={searchRequest} onChange={e=>setSearchRequest(e.target.value)}></input>
              <button className="search-button" type="submit" value="submit">
                Search
              </button>
            </form>
          </Col>}

          <Col xs={3}>
            <u><b>Units</b></u>
            {filterResults.length>0&&
            <div className="scroll-page">
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
              <div className="fix-selected-unit">
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
          <div className={sidebar?"grey-grid":"grey-grid1"} style={units.length===0?{backgroundColor:"#d3d3d3"}:{}}>
          {/* <Col lg={sidebar?3:4.5} xs={sidebar?3:4.5} > */}
          <Col xs={sidebar?3:4.5} >
              {units.length >0  && (
                <Unit
                  key={units[0].unitCode}
                  id={units[0].unitCode}
                  unitCode={units[0].unitCode}
                  unitName={units[0].unitName}
                  unitType={units[0].unitType}
                  synopsis={units[0].synopsis}
                  workloadReq={units[0].workloadReq}
                  year={units[0].year}
                  semester={units[0].semester}
                  compare={true}
                  onDelete={deleteUnit}
                  onAddSelected={addInSelectedUnit}
                  sideBarStatus={sidebar}
                />
              )}
          </Col>
          </div>
          <div className={sidebar?"grey-grid":"grey-grid2"} style={units.length===0?{backgroundColor:"#d3d3d3"}:{}}>
          <Col xs={sidebar?3:4.5} >
              {units.length > 1 && (
                <Unit
                  key={units[1].unitCode}
                  id={units[1].unitCode}
                  unitCode={units[1].unitCode}
                  unitName={units[1].unitName}
                  unitType={units[1].unitType}
                  synopsis={units[1].synopsis}
                  workloadReq={units[1].workloadReq}
                  year={units[1].year}
                  semester={units[1].semester}
                  //This normal attribute is used to figure out the unit in selected Unit or in compare window
                  compare={true}
                  onDelete={deleteUnit}
                  onAddSelected={addInSelectedUnit}
                  sideBarStatus={sidebar}
                />
              )}
          </Col>
          </div>
        </Row>
      </Container>
    </section>
  );
}
