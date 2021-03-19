import React from "react";
import {FaPlusCircle} from 'react-icons/fa';
import {IoCloseOutline} from "react-icons/io5";

function Unit(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleAddClick(){
      props.onAddSelected(props.unitcode,props.title);

  }
  return (
    <div>
      <IoCloseOutline className="close-button" onClick={handleClick} size={30}/>
      <h3>{props.unitcode}</h3>
      <h5>Unit Title:{props.title}</h5>
      {props.compare && <p>Overview:{props.unitoverview}</p>}
      {props.compare&&<FaPlusCircle size={70} color={"#AECF8C"} className="floating-button" onClick={handleAddClick}/>}
    </div>
  );
}

export default Unit;