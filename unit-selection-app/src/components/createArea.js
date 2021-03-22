import React,{useState} from "react"
import {Card} from "react-bootstrap";
// unitCode: 'FIT3162',
// unitName: 'Computer Science Project 2',
// facultyName: 'Faculty of Information Technology',
// unitType: 'Undergraduate',
// synopsis: 'This unit provides practical experience in researching, designing, developing and testing a non-trivial computer science project. Projects are generally software-based, although sometimes they may involve hardware development',
// workloadReq: 'Minimum total expected workload to achieve the learning outcomes for this unit is 144 hours per semester',
// year:"2021",
// semester:"Semester1"
function CreateArea(props) {
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
  
  export default CreateArea;