import React from "react";
import {FaPlusCircle} from 'react-icons/fa';
import {IoCloseOutline} from "react-icons/io5";
import {Card} from "react-bootstrap";

function Unit(props) {
  function handleClick(id) {
    props.onDelete(id);
  }
  function handleAddClick(){
      props.onAddSelected(props.unitCode,props.unitName);

  }
  return (
    
    <Card border="info" style={props.compare?{width:'14rem'}:{width:'12rem',height:'12rem'}}>
      <Card.Header as="h4">{props.unitCode}<IoCloseOutline style={props.compare?{left:'80px'}:{}} className="close-button" onClick={()=>handleClick(props.id)} size={30}/></Card.Header>
      <Card.Body>
      <Card.Title as="h5"><b>Unit Name: </b></Card.Title>
      <Card.Text  as="h6">{props.unitName}</Card.Text>
      {props.compare&&<Card.Title as="h5"><b>Unit Type: </b></Card.Title>}
      {props.compare&&<Card.Text as="h6"> {props.unitType}</Card.Text>}
      {props.compare&&<Card.Title as="h5"><b>Semester: </b></Card.Title>}
      {props.compare&&<Card.Text as="h6">{props.semester+'('+props.year+')'}</Card.Text>}
      {props.compare&&<Card.Title as="h5"><b>Synopsis: </b></Card.Title>}
      {props.compare&&<Card.Text as="h6">{props.synopsis}</Card.Text>}
      {props.compare&&<Card.Title as="h5"><b>Workload: </b></Card.Title>}
      {props.compare&&<Card.Text as="h6">{props.workloadReq}</Card.Text>}
      </Card.Body>
      {props.compare&&<FaPlusCircle size={40} color={"#AECF8C"} className="floating-button" onClick={handleAddClick}/>}
    </Card>
    
  );
}

export default Unit;