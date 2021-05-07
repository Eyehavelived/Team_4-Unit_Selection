import React from "react"
import { BsEye } from "react-icons/bs";


//This method is used to display units in the Units column after we filter our choice
export default function CreateArea(props) {    
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
            {/* <input onClick={submitUnit(unit)} type="checkbox"
              id={unit.unitCode} className="mt-1"/> */}
            <button className="small-size mt-1" onClick={submitUnit(unit)} id={unit.unitCode}><BsEye size={20}/></button>
            <label for={unit.unitCode} className="ms-2 my-0">{unit.unitCode}
            </label>
          </li>
          <div className="ms-4">
          <h7>{unit.unitName}</h7>
          </div>
          </div>
        )}
      </ul>

    );
  }