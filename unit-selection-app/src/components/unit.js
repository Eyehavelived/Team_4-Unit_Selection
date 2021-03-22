import React from "react";
import {FaPlusCircle} from 'react-icons/fa';
import {IoCloseOutline} from "react-icons/io5";
import {Card} from "react-bootstrap";

function Unit(props) {
  function handleClick(id) {
    console.log("q");
    props.onDelete(id);
  }
  function handleAddClick(){
      props.onAddSelected(props.unitCode,props.unitName);

  }
  return (
    <Card border="info" style={props.compare?{width:'14rem'}:{}}>
      <Card.Header>{props.unitCode}<IoCloseOutline style={props.compare?{left:'105px'}:{}} className="close-button" onClick={()=>handleClick(props.id)} size={30}/></Card.Header>
      <Card.Body>
      <Card.Text>
      Unit Name:{props.unitName}
      {props.compare && <p>Unit Type:{props.unitType}</p>}
      </Card.Text>
      </Card.Body>
      {props.compare&&<FaPlusCircle size={40} color={"#AECF8C"} className="floating-button" onClick={handleAddClick}/>}
    </Card>
  );
}

export default Unit;