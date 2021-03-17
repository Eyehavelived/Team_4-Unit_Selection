import React, { useState } from "react";
import { Link } from "react-router-dom";
import Caret from "../caret";



export default function ToggleDiv(props) {
  const [expandContent, setExpandContent] = useState("false");
  const [rotate,setRotate] = useState("arrow_icon rotate");
  function handleClick() {
    setExpandContent((wasExpanded) => !wasExpanded);
    setRotate(
      expandContent===false?"arrow_icon rotate":"arrow_icon rotate-back"

    );
  }
  return (
    <div>
      <button className="clear-button-default" onClick={handleClick}> 
      {/* Not sure how to use environment inside environment variable    */}
      <Caret width={10} fill={"#006DAE"} className={`${rotate}`} />
      </button>
      <u>{props.name}</u>
      {expandContent&&(
        //This inline-style is used to save the space for semester and year
      <div style={ (props.name==="Year" || props.name==="Semester" ) ? { height:100+'px'} : {}} className="scroll-page">
      <div className="force-overflow">
        {props.data.map((link, index) => (
          <ul className="no-bullets">
            <Link key={index} to={link.address}>
              {link.box} {link.title}
            </Link>
          </ul>
        ))}
        </div>
      </div>)}
    </div>
  );
}

