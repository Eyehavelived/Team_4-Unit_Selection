import React, { useState } from "react";
import { NavigationSchedule } from "../components/common/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col} from "react-bootstrap";
import ToggleDiv from "../components/common/toggle";
import CreateArea from "../components/createArea";
import Unit from "../components/unit";



export default function Scheduling() {
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
      <label onChange={handleChange} for="uuid7"><input type="checkbox" key="uuid7" name="Faculty" value="Medicine, Nursing and Health Sciences"/>Medicine, Nursing and Health Sciences</label>
     
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
        year:"2020",
        semester:"Semester2"
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
        year:"2020",
        semester:"Semester2"

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
      }
  ]

  // function submitUnit(event) {}
  function handleSearchRequest() {}
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
  function addUnit(newUnit) {
    setUnits((prevUnits) => {
      for (var i = 0; i < prevUnits.length; i++) {
        if (prevUnits[i].unitcode === newUnit.unitcode) {
          return prevUnits;
        }
      }
      return [...prevUnits, newUnit];
    });
  }
  function deleteUnit(id) {
    setUnits((prevUnits) => {
      return prevUnits.filter((unitItem) => {
        return unitItem.unitcode !== id;
      });
    });
  }
  function addInSelectedUnit(unitcode,title) {
    const newUnit = {
      unitcode: unitcode,
      title: title,
    };
    setSelectedUnits((prevSelectedUnits) => {
      for (var i = 0; i < prevSelectedUnits.length; i++) {
        if (prevSelectedUnits[i].unitcode === newUnit.unitcode) {
          return prevSelectedUnits;
        }
      }
      return [...prevSelectedUnits, newUnit];
    });
  }
  function deleteSelectedUnit(id) {
    setSelectedUnits((prevSelectedUnits) => {
      return prevSelectedUnits.filter((unitItem) => {
        return unitItem.unitcode !== id;
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
    // // console.log(filterResults.length);
    // for(var j =0;j<filterResults.length;j++){
    //   console.log(filterResults[j]);
    // }
    event.preventDefault();
  }
  return (
    <section className="container home">
      <div className="section hero">
        <NavigationSchedule />
      </div>
      <Container>
        <Row>
          <Col xs={3}>
          <form onSubmit={handleSortFilter}>
            <ToggleDiv data={sampleFaculty} name="Faculty" />
            <ToggleDiv data={sampleYear} name="Year" />
            <ToggleDiv data={sampleSemeter} name="Semester" />
            <button className="schedule-button">Sort & Filter</button>
          </form>  
            <h6>Unit Code Search</h6>
            <form onSubmit={handleSearchRequest}>
              <input type="text"></input>
              <button className="schedule-button" type="submit">
                Search
              </button>
            </form>
          </Col>
          <Col xs={3}>
            <u>Units</u>
            {filterResults.map((element)=>{
              return(
            <CreateArea onAdd={addUnit} key={element.unitCode} unitCode={element.unitCode}/>);
            })}
              <div className="fix-selected-unit">
                <u>Selected Units</u>
                <div className="schedule-scroll">
                  {selectedUnits.map((unitItem) => {
                    return (
                      <Unit
                        key={unitItem.unitcode}
                        id={unitItem.unitcode}
                        unitcode={unitItem.unitcode}
                        title={unitItem.title}
                        compare={false}
                        onDelete={deleteSelectedUnit}
                      />
                    );
                  })}
                </div>
              </div>
          </Col>
          <Col xs={3}>
              {units.length > 0 && (
                <Unit
                  key={units[0].unitcode}
                  id={units[0].unitcode}
                  unitcode={units[0].unitcode}
                  title={units[0].title}
                  unitoverview={units[0].unitoverview}
                  compare={true}
                  onDelete={deleteUnit}
                  onAddSelected={addInSelectedUnit}
                />
              )}
          </Col>
          <Col xs={3}>
              {units.length > 1 && (
                <Unit
                  key={units[1].unitcode}
                  id={units[1].unitcode}
                  unitcode={units[1].unitcode}
                  title={units[1].title}
                  unitoverview={units[1].unitoverview}
                  //This normal attribute is used to figure out the unit in selected Unit or in compare window
                  compare={true}
                  onDelete={deleteUnit}
                  onAddSelected={addInSelectedUnit}
                />
              )}
          </Col>
        </Row>
      </Container>
    </section>
  );
}
