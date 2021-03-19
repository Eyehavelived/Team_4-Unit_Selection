import React from "react";
import {FaPlusCircle} from 'react-icons/fa';
import {IoCloseOutline} from "react-icons/io5";
import {Card} from "react-bootstrap";

function Unit(props) {
  function handleClick() {
    props.onDelete(props.id);
  }
  function handleAddClick(){
      props.onAddSelected(props.unitcode,props.title);

  }
  return (
    <Card border="info" style={props.compare?{width:'17rem'}:{}}>
      <Card.Header>{props.unitcode}<IoCloseOutline style={props.compare?{left:'150px'}:{}} className="close-button" onClick={handleClick} size={30}/></Card.Header>
      <Card.Body>
      <Card.Text>
      Unit Title:{props.title}
      {props.compare && <p>Overview:{props.unitoverview}</p>}
      </Card.Text>
      </Card.Body>
      {props.compare&&<FaPlusCircle size={40} color={"#AECF8C"} className="floating-button" onClick={handleAddClick}/>}
    </Card>
  );
}

export default Unit;