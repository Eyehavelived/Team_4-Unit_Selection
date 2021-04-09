import React from "react"


//This method is used to display units in the Units column after we filter our choice
export default function CreateArea(props) {
  /*
    const unit={
      unitCode: props.unitCode,
      unitName:props.unitName,
      facultyName:props.facultyName,
      unitType:props.unitType,
      synopsis:props.synopsis,
      workloadReq:props.workloadReq,
      year:props.year,
      semester:props.semester
    };
    */

    
    //When we click the checkbox,it will submit our request and display more information in our comparing window
    const submitUnit = unit => event => {
      props.onAdd(unit);
      event.preventDefault();
    }
  
    return (
      <ul className="list-unstyled my-1">
        {props.unitList.map((unit)=>
        <div className="mb-2">
          <li>
            <input onClick={submitUnit(unit)} type="checkbox"
              id={unit.unitCode} className="mt-1"/>
            <label for={unit.unitCode} className="ms-2 my-0">{unit.unitCode}
            </label>
          </li>
          <h7>{unit.unitName}</h7>
          </div>
        )}
      </ul>

    );
  }