import React, { useState } from "react";
import Caret from "./caret";

//This function is used to display the Faculty,Year and semester
export default function ToggleDiv(props) {
  const [expandContent, setExpandContent] = useState("false");
  const [rotate,setRotate] = useState("arrow_icon rotate");
  function handleClick(event) {
    setExpandContent((wasExpanded) => !wasExpanded);
    setRotate(
      expandContent===false?"arrow_icon rotate":"arrow_icon rotate-back"
    );
    event.preventDefault();//Prevent the refreshing page
  }
  return (
    <div>
      <label className="my-1">
        <button className="clear-btn-override caret d-flex" onClick={handleClick}> 
          <Caret width={10} className={`${rotate}`} />
          <h6 className="ms-2">{props.name}</h6>
        </button>
      </label>
      {expandContent&&(
        <div className="mb-2 px-2">
          {props.data.map((item) => (
            <ul className="list-unstyled my-0 ps-2">
              <li className="d-flex">
                <input onChange={props.onSelect} type="checkbox" id={item.id} 
                  name={props.name} value={item.name} className="mt-1"/>
                <label for={item.id} className="ms-2 my-0">{item.name}</label>
              </li>
            </ul>
          ))}
        </div>
      )}
    </div>
  );
}

