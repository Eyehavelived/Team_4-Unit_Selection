import React, { useState } from "react";
import { NavigationSchedule } from "../components/common/navigation";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Container, Col } from "react-bootstrap";
import ToggleDiv from "../components/common/toggle";
import CreateArea from "../components/createArea";
import Unit from "../components/unit";



export default function Scheduling() {
  const sampleFaculty = [
    {
      box: <input type="checkbox" key="uuid1" />, //We can use the index to distinguish each box
      title: "Arts",
    },
    {
      box: <input type="checkbox" key="uuid2" />,
      title: "Information Techonology",
    
    },
    {
      box: <input type="checkbox" key="uuid1" />, //We can use the index to distinguish each box
      title: "Business and Economics",

    },
    {
      box: <input type="checkbox" key="uuid2" />,
      title: "Science",
 
    },
    {
      box: <input type="checkbox" key="uuid2" />,
      title: "Law",
   
    },
    {
      box: <input type="checkbox" key="uuid1" />, //We can use the index to distinguish each box
      title: "Pharmacy and Pharmaceutical Sciences",
   
    },
    {
      box: <input type="checkbox" key="uuid2" />,
      title: "Education",
    
    },
    {
      box: <input type="checkbox" key="uuid1" />, //We can use the index to distinguish each box
      title: "Medicine, Nursing and Health Sciences",
     
    },
    {
      box: <input type="checkbox" key="uuid2" />,
      title: "Art, Design and Architecture",
     
    },  
  ];
  const sampleYear = [
    {
      box: <input type="checkbox" key="uuid1" />, //We can use the index to distinguish each box
      title: 2017,
    },
    {
      box: <input type="checkbox" key="uuid2" />, //We can use the index to distinguish each box
      title: 2018,
    },
    {
      box: <input type="checkbox" key="uuid3" />, //We can use the index to distinguish each box
      title: 2019,
    },
    {
      box: <input type="checkbox" key="uuid4" />, //We can use the index to distinguish each box
      title: 2020,
    },
    {
      box: <input type="checkbox" key="uuid5" />,
      title: 2021,
    },
   
  ];
  const sampleSemeter = [
    {
      box: <input type="checkbox" key="uuid5" />, //We can use the index to distinguish each box
      title: "Semester 1",
      address: "/semester1", //Unsure how to jump after choosing the semeter
    },
    {
      box: <input type="checkbox" key="uuid6" />,
      title: "Semester 2",
      address: "/semester2",
    },
    {
      box: <input type="checkbox" key="uuid7" />,
      title: "Summer A",
      address: "/summerA",
    },
    {
      box: <input type="checkbox" key="uuid8" />,
      title: "Summer B",
      address: "/summerB",
    },
    {
      box: <input type="checkbox" key="uuid5" />,
      title: "Winter",
      address: "/winter",
    },
  ];
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
            <ToggleDiv data={sampleFaculty} name="Faculty" />
            <ToggleDiv data={sampleYear} name="Year" />
            <ToggleDiv data={sampleSemeter} name="Semester" />
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
