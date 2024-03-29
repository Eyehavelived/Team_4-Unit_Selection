import React from "react";
import {IoMdClose} from "react-icons/io";

function UnitListCardRemove(props){

    function handleClick() {
        props.onDelete(props.code);
    }

    return (
        <div className="card ms-1 mb-1 position-relative" >
            <div className="position-absolute top-0 end-0">
                <button className="clear-btn-override close-btn-override mt-n2 ms-auto" onClick={handleClick}><IoMdClose/></button>
            </div>
            <div className="pt-2 px-2">
                <h6>{props.code}</h6>
                <p className="mb-2">{props.name}</p>
            </div>
        </div>
    )
}

function UnitListCard(props){

    return (
        <div className="card me-3 mb-1" >
            <div className="pt-2 px-2">
                <h6>{props.code}</h6>
                <p>{props.name}</p>
                <p className="mb-2">{props.sem ? props.sem.join(", "): ""}</p>
            </div>
        </div>
    )
}

export{UnitListCard, UnitListCardRemove};