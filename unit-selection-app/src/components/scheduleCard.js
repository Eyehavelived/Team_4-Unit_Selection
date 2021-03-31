import React, {useState} from 'react';
import {IoMdClose} from "react-icons/io";
import {Droppable,Draggable} from 'react-beautiful-dnd';

export default function ScheduleCard(props){

    function handleClick () {
        props.onDelete(props.tp.listId);
    }

    return (
        <div className="col-3 card card-block mx-1">
            <button id="close-btn-override" className="mt-n2 ms-auto" onClick={handleClick}><IoMdClose/></button>
                <div className="mt-2">
                    <h6>Year {props.tp.year}  / Sem {props.tp.sem}</h6>
                    <hr/>
                    <Droppable droppableId={props.tp.listId}>
                        {(provided)=>(
                                <div {...provided.droppableProps} ref={provided.innerRef}>
                                {props.tp.units.map((unit,index)=>(
                                    <Draggable key={unit.unitCode} draggableId={unit.unitCode} index={index}>
                                        {(provided)=>(
                                        <div className="card me-3 mb-1" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                            <div className="pt-2 px-2">
                                                <h6>{unit.unitCode}</h6>
                                                <p>{unit.unitName}</p>
                                            </div>
                                        </div>
                                        )}
                                    </Draggable>
                                ))}
                                {provided.placeholder}
                                </div>
                        )}
                    </Droppable>
                      
                </div>
        </div>
    )
}