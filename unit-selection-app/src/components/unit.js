import React from "react";
import {IoIosAdd} from "react-icons/io";
import {IoMdClose} from "react-icons/io";
import {Card} from "react-bootstrap";

function Unit(props) {
  //This function is sued to
  function handleClick(id) {
    props.onDelete(id);
  }
  function handleAddClick(){
      props.onAddSelected(props.unitCode,props.unitName);

  }

  /*
  <Card.Body>
      {props.compare&&<Card.Title as="h5"><b>Unit Type: </b></Card.Title>}
      {props.compare&&<Card.Text as="h6"> {props.unitType}</Card.Text>}
      {props.compare&&<Card.Title as="h5"><b>Semester: </b></Card.Title>}
      {props.compare&&<Card.Text as="h6">{props.semester+'('+props.year+')'}</Card.Text>}
      {props.compare&&<Card.Title as="h5"><b>Synopsis: </b></Card.Title>}
      {props.compare&&<Card.Text as="h6">{props.synopsis}</Card.Text>}
      {props.compare&&<Card.Title as="h5"><b>Workload: </b></Card.Title>}
      {props.compare&&<Card.Text as="h6">{props.workloadReq}</Card.Text>}
      </Card.Body>
  */

  //card header style
  //style={props.compare?(props.sideBarStatus?{width:"14rem"}:{width:'25rem'}):{width:'12rem',height:'12rem'}}
  return (
    //change col8 to sth else
    <Card className="col-8 mx-1">
      <button className="clear-btn-override close-btn-override mt-n2 ms-auto" onClick={()=>handleClick(props.id)}><IoMdClose size={20}/></button>
      <div className="py-1 px-3">
          <h5>{props.unitCode}</h5>
          <h5>{props.unitName}</h5>
          <hr/>
          <div>
            {props.compare&&<h6>Unit Type:</h6>}
            {props.compare&&<p>{props.unitType}</p>}
            {props.compare&&<h6>Semester:</h6>}
            {props.compare&&<p>{props.semester+'('+props.year+')'}</p>}
            {props.compare&&<h6>Synopsis:</h6>}
            {props.compare&&<p>{props.synopsis}</p>}
            {props.compare&&<h6>Workload:</h6>}
            {props.compare&&<p>{props.workloadReq}</p>}
          </div>
      </div>
      
      {props.compare&& <button className="btn circle-btn-sm fab btn-primary ms-auto mb-2 me-2" onClick={handleAddClick}><IoIosAdd size={23}/></button>}
      
    </Card>
    
  );
}

export default Unit;