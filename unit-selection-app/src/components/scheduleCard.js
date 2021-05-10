import React from "react";
import {IoMdClose} from "react-icons/io";
import {Droppable,Draggable} from 'react-beautiful-dnd';
import {Col} from "react-bootstrap";
import {UnitListCard} from "../components/common/unitListCard";

export default function ScheduleCard(props){

    function handleClick () {
        props.onDelete(props.tp.listId);
    }

    return (
        <Col md={3} className="card mx-1">
            <button className="clear-btn-override close-btn-override mt-n2 ms-auto" onClick={handleClick}><IoMdClose/></button>
            <div className="mt-2">
                <h6>Year {props.tp.year}  / Sem {props.tp.sem}</h6>
                <hr/>
                <Droppable droppableId={props.tp.listId}>
                    {(provided)=>(
                        <div className="height-50 overflow-auto" {...provided.droppableProps} ref={provided.innerRef}>
                        {props.tp.units.map((unit,index)=>(
                            <Draggable key={unit.unitCode} draggableId={unit.unitCode} index={index}>
                                {(provided)=>(
                                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                    <UnitListCard code={unit.unitCode} name={unit.unitName}/>
                                </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable> 
            </div>
        </Col>
)}