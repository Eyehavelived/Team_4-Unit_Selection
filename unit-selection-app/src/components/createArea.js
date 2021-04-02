import React from "react"
import {Card} from "react-bootstrap";
//This method is used to display units in the Units column after we filter our choice
export default function CreateArea(props) {
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
    
    //When we click the checkbox,it will submit our request and display more information in our comparing window
    function submitUnit(event) {
      props.onAdd(unit);
      event.preventDefault();
    }
  
    return (
      <Card 
            className={"checkboxes"}
            border="secondary"
            style={{height:'1.6rem',width:'10rem'}}> 
            <label><input onClick={submitUnit} type="checkbox" 
            />{props.unitCode}</label>
      </Card>     
    );
  }