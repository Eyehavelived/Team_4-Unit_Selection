import React, {useState} from 'react';
import {IoMdClose} from "react-icons/io";

export default function ScheduleCard(props){

    function handleClick () {
        props.onDelete(props.id);
    }

    return (
        <div className="col-3 card card-block mx-1">
            <button id="close-btn-override" className="mt-n2 ms-auto" onClick={handleClick}><IoMdClose/></button>
                <div className="mt-2">
                    <h6>Year {props.year}  / Sem {props.sem}</h6>
                    <hr/>
                </div>
        </div>
    )
}