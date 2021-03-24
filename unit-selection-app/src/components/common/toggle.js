import React, { useState } from "react";
import Caret from "../caret";


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
      <label>
      <button className="clear-button-default" onClick={handleClick}> 
      <Caret width={10} fill={"#006DAE"} className={`${rotate}`} />
      </button>
      <u>{props.name}</u>
      </label>
      {expandContent&&(
        //This inline-style is used to save the space for displaying semester and year
      <div style={ (props.name==="Year" || props.name==="Semester" ) ? { height:100+'px'} : {}} className="scroll-page">
      <div className="force-overflow">
        {props.data.title}
        </div>
      </div>)}
    </div>
  );
}

