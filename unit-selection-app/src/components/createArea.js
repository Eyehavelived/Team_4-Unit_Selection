import React from "react"
import { BsEye } from "react-icons/bs";


//This method is used to display units in the Units column after we filter our choice
export default function CreateArea(props) {   
   
    //Calling the onAdd function passed in to add unit into comparing window
    const submitUnit = unit => event => {
      props.onAdd(unit);
      event.preventDefault();
    }
    return (
      <ul className="list-unstyled my-1 list-click-hover">
      {/* Generate areas for all units inside Units column  */}
        {props.unitList.map((unit)=>
        <div className="mb-2">
        {/* If the eye button is clicked, the submitUnit function will be called */}
          <li onClick={submitUnit(unit)} >
            <BsEye size={15}/>
            <label for={unit.unitCode} className="ms-2 my-0">{unit.unitCode}</label>
            <div className="ms-4">
            <p>{unit.unitName}</p>
            </div>
          </li>
          
          </div>
        )}
      </ul>

    );
  }

