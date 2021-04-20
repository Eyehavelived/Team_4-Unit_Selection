import React, {useState} from 'react';
import {Row} from "react-bootstrap";

export default function ScheduleForm(props){

    const [teachingPeriod,setTeachingPeriod] = useState({
        year:"1",
        sem:"1",
        units:[]
    });

    const year = new Date().getFullYear();
    const yearOptions = [year-6,year-5,year-4,year-3,year-2,year-1,year,year+1,year+2,year+3,year+4,year+5,year+6]
    const semOptions = ["1","2","summera","summerb","winter"]

    function handleChange(event){
        const {name,value} = event.target;

        setTeachingPeriod((prevTeachingPeriod) => {
            return {
                ...prevTeachingPeriod,
                [name]: value,
                units:[]
            };
        });
    }

    function submitTeachingPeriod(event){
        teachingPeriod.listId = teachingPeriod.year+teachingPeriod.sem
        props.onAdd(teachingPeriod);
        event.preventDefault();
    }

    return (
        <Row id="container-form">
            <form class="d-inline-flex py-2">
                <label for="year" className="form-label mt-2 me-2">Year</label>
                <select class="form-control me-3" id="year" name="year" value={teachingPeriod.year} onChange={handleChange}>
                    {yearOptions.map((year)=>(
                            <option value={year}>{year}</option>
                    ))}
                </select>

                <label for="sem" className="form-label mt-2 me-2">Sem</label>

                <select class="form-control me-3" id="sem" name="sem" value={teachingPeriod.sem} onChange={handleChange}>
                    {semOptions.map((year)=>(
                            <option value={year}>{year}</option>
                    ))}
                </select>
                    
                <button type="button" className="btn btn-secondary" onClick={submitTeachingPeriod}>Add</button>
            </form>
        </Row>
    )
}