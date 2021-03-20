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
    const [unit, setUnit] = useState({
      unitCode: "",
      unitName:"",
      facultyName:"",
      unitType:"",
      synopsis:"",
      workloadReq:"",
      year:"",
      semester:""
    });
  
    function handleChange(event) {
      const { name, value } = event.target;
  
      setUnit(prevUnit => {
        return {
          ...prevUnit,
          [name]: value
        };
      });
    }
  
    function submitUnit(event) {
      props.onAdd(unit);
      // setUnit({
      //   unitCode: "",

      // });
      event.preventDefault();
    }
  
    return (
      <Card 
            style={{width:'10rem'}}> 
           <label>
            <input onClick={submitUnit} type="checkbox" 
            name="unitCode"
            onChange={handleChange}
            value={unit.unitCode}/>
            {props.unitCode}</label>
      </Card>     
    );
  }
  
  export default CreateArea;