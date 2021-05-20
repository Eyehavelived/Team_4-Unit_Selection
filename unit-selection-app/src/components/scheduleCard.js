import React from "react";
import cx from "classnames";
import {IoMdClose} from "react-icons/io";
import {Droppable,Draggable} from 'react-beautiful-dnd';
import {Col} from "react-bootstrap";
import {UnitListCard} from "../components/common/unitListCard";
import Error from "../components/error.js";



export default function ScheduleCard(props){

    function handleClick () {
        props.onDelete(props.tp.listId);
    }
   

    return (
        <Col md={3} className={cx("card", "mx-1", {
            underload: (props.tp.load=="Underload"),
            overload: (props.tp.load=="Overload"),
            fullload: (props.tp.load=="Underload (Internationals) || Full study load")
          })}
        >
            <button className="clear-btn-override close-btn-override mt-n2 ms-auto" onClick={handleClick}><IoMdClose/></button>
            <div className="mt-2">
                <div className="width-full d-inline-flex justify-content-between align-items-center ">
                    <h6 className="my-0">Year {props.tp.year}  / Sem {props.tp.sem}</h6>
                    {(props.tp.error)? <Error error={props.tp.error}/> : <p></p>}
                </div>
                <hr/>
                <Droppable droppableId={props.tp.listId}>
                    {(provided)=>(
                        <div className="height-50 overflow-auto" {...provided.droppableProps} ref={provided.innerRef}>
                        {props.tp.units.map((unit,index)=>(
                            <Draggable key={unit.unitCode} draggableId={unit.unitCode} index={index}>
                                {(provided)=>(
                                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                    <UnitListCard code={unit.unitCode} name={unit.unitName} sem={unit.unitSem}/>
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