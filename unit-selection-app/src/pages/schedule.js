import React, { useState } from "react";
import { NavigationSchedule } from "../components/common/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap";
import ToggleDiv from "../components/common/toggle";
import CreateArea from "../components/createArea";
import Unit from "../components/unit";



export default function Scheduling() {
  const sampleFaculty = 
    {
      title:
      <ul  className="no-bullets">
      <li>
      <label for="uuid1"><input type="checkbox" id="uuid1"/>Information Techonology</label>
      </li>
      <li>
      <input type="checkbox" key="uuid2" />
      <label for="uuid2">Business and Economics</label>
      </li>
      <li>
      <input type="checkbox" key="uuid3" />
      <label for="uuid3">Science</label>
      </li>
      <li>
      <input type="checkbox" key="uuid4" />
      <label for="uuid4">Law</label>
      </li>
      <li>
      <label for="uuid5"> <input type="checkbox" key="uuid5" />Pharmacy and Pharmaceutical Sciences</label>
      </li>
      <li>
      <input type="checkbox" key="uuid6" />
      <label for="uuid6"> Education</label>
      </li>
      <li>
      <label for="uuid7"><input type="checkbox" key="uuid7"/>Medicine, Nursing and Health Sciences</label>
     
      </li>
      <li>
      <input type="checkbox" key="uuid8" />
      <label for="uuid8"> Art, Design and Architecture</label>
      </li>
      </ul>
    };
  const sampleYear = 
    {
      title:<ul className="no-bullets">
      <li>
      <input type="checkbox" key="uuid9" />
      <label for="uuid9"> 2017</label>
      </li>
      <li>
      <input type="checkbox" key="uuid10" />
      <label for="uuid10"> 2018</label>
      </li>
      <li>
      <input type="checkbox" key="uuid11" />
      <label for="uuid11"> 2019</label>
      </li>
      <li>
      <input type="checkbox" key="uuid12" />
      <label for="uuid12"> 2020</label>
      </li>
      <li>
      <input type="checkbox" key="uuid13" />
      <label for="uuid13"> 2021</label>
      </li>
      </ul>
    };
  const sampleSemeter = 
    {
      title:
      <ul className="no-bullets">
      <li>
      <input type="checkbox" key="uuid14" />
      <label for="uuid14">Semester 1</label>
      </li>
      <li>
      <input type="checkbox" key="uuid15" />
      <label for="uuid15">Semester 2</label>
      </li>
      <li>
      <input type="checkbox" key="uuid16" />
      <label for="uuid16">Summer A</label>
      </li>
      <li>
      <input type="checkbox" key="uuid17" />
      <label for="uuid17">Summer B</label>
      </li>
      <li>
      <input type="checkbox" key="uuid18" />
      <label for="uuid18">Winter</label>
      </li>
      </ul>  
    };
  // const sampleUnits = [
  //   {
  //     box: (
  //       <input
  //         type="checkbox"
  //         id="FIT3155"
  //         name="Advanced Data structure"
  //         onChange={handleChange}
  //         onClick={submitUnit}
  //       />
  //     ), //We can use the index to distinguish each box
  //     title: "FIT3155",
  //     name: "Advanced Data structure",
  //     address: "/schedule",
  //   },
  //   // {
  //   //   box: (
  //   //     <input
  //   //       type="checkbox"
  //   //       id="FIT3143"
  //   //       name="Parallel programming"
  //   //       onClick={updateStatus}
  //   //     />
  //   //   ), //We can use the index to distinguish each box
  //   //   title: "FIT3143",
  //   //   name: "Parallel programming",
  //   //   address: "/schedule",
  //   // },
  // ];
  // function handleChange(event) {}
  // function submitUnit(event) {}
  function handleSearchRequest() {}

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
  return (
    <section className="container home">
      <div className="section hero">
        <NavigationSchedule />
      </div>
      <Container>
        <Row>
          <Col xs={3}>
          <form>
            <ToggleDiv data={sampleFaculty} name="Faculty" />
            <ToggleDiv data={sampleYear} name="Year" />
            <ToggleDiv data={sampleSemeter} name="Semester" />
          </form>  
            <button className="schedule-button">Sort & Filter</button>
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
            <CreateArea onAdd={addUnit} />
              <div>
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
            <div className="comparing-window">
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
            </div>
          </Col>
          <Col xs={3}>
            <div className="comparing-window">
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
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
