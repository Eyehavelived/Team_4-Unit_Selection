import React, {useState} from 'react';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import {Row, Col} from "react-bootstrap";
import {NavigationSchedule} from "../components/common/navigation";
import ScheduleForm from '../components/scheduleForm';
import ScheduleCard from '../components/scheduleCard'
import UnitListCard from "../components/common/unitListCard";
import {IoIosAdd} from "react-icons/io";

//from react-beautiful-dnd git example
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
    return result;
};
const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);
  
    destClone.splice(droppableDestination.index, 0, removed);
  
    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;
  
    return result;
};

export default function Selection(){
    const SELECTEDUNITS = "selectedUnits"

    //temporary data
    const selectedUnits = [
        {
          unitCode: 'FIT3162',
          unitName: 'Computer Science Project 2'
        },
        {
          unitCode: 'FIT3161',
          unitName: 'Computer Science Project 1'
        },
        {
          unitCode: 'FIT3155',
          unitName: 'Advanced Data Structures and Algorithms'
        },
        {
          unitCode: 'FIT3045',
          unitName: 'Industry-based learning'
        },
        {
          unitCode: 'FIT2032',
          unitName: 'Industry-based learning'
        }
      ]
    
    const su = {
        listId:"selectedUnits",
        year: "none",
        sem:"none",
        units:selectedUnits
    }

    const [unitList, updateUnitList] = useState([su])

    function addTeachingPeriod(teachingPeriod){

        updateUnitList(prevTeachingPeriods => {
            for (var i=0; i < prevTeachingPeriods.length; i++){
                if(prevTeachingPeriods[i].year === teachingPeriod.year && 
                    prevTeachingPeriods[i].sem === teachingPeriod.sem){
                        return prevTeachingPeriods;
                }
            }
            return [...prevTeachingPeriods, teachingPeriod]
        });
    }

    function deleteTeachingPeriod(id){
        
        //index of deleted tp
        const sInd = unitList.findIndex((list)=>list.listId===id);
        //index of selected unit list
        const dInd = unitList.findIndex((list)=>list.listId===SELECTEDUNITS);
        
        updateUnitList(prevTeachingPeriods => {
            prevTeachingPeriods[dInd].units = [...prevTeachingPeriods[dInd].units,
                                                ...prevTeachingPeriods[sInd].units];
            return prevTeachingPeriods.filter((tp)=>{
                return (tp.listId) !== id
            });
        });
        
    }

    
    function handleOnDragEnd(result){
        const { source, destination } = result;

        if (!destination) {
            return;
        }
        const sid = source.droppableId;
        const did = destination.droppableId;

        const sInd = unitList.findIndex((list)=>list.listId===sid);
        const dInd = unitList.findIndex((list)=>list.listId===did);
        
        if(sInd === dInd){
            const units = reorder(unitList[sInd].units, source.index, destination.index);
            const newUnitList = [...unitList];
            newUnitList[sInd].units = units;
            updateUnitList(newUnitList);
        }else{
            const result = move(unitList[sInd].units, unitList[dInd].units, source, destination);
            const newUnitList = [...unitList];
            newUnitList[sInd].units = result[sid];
            newUnitList[dInd].units = result[did];

            updateUnitList(newUnitList);
        }
        
    }
    

    return (
        <div className="overflow-hidden">
            <NavigationSchedule/>

            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Row>
                <Col md={2} id="container-selection-units" className="ms-4 py-3">
                    <div className="row pb-3 mx-auto">
                        <h5>Selected Units</h5>
                    </div>
                    <Droppable droppableId={SELECTEDUNITS}>
                            {(provided)=>(
                                <div id="container-units" className="overflow-auto" {...provided.droppableProps} ref={provided.innerRef}>
                                { unitList.filter((list)=>{return list.listId === SELECTEDUNITS}).map((su)=>{
                                    return(
                                        su.units.map((unit,index)=>(
                                            <Draggable key={unit.unitCode} draggableId={unit.unitCode} index={index}>
                                                {(provided)=>(
                                                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                   <UnitListCard code={unit.unitCode} name={unit.unitName}/>
                                                </div>
                                                )}
                                            </Draggable>
                                )))})}
                                {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                </Col>

                <Col md={9} id="container-schedule" className="ms-4 py-2 px-1 row flex-row flex-nowrap overflow-auto position-relative">
                    
                    {unitList.filter((tp)=>{return tp.listId!==SELECTEDUNITS}).map((tp,index) => (
                        <ScheduleCard key={tp.year+tp.sem} index={index} 
                        tp={tp} onDelete={deleteTeachingPeriod}/>
                    ))}
                    
                    <div id="floating-btn" className="position-absolute bottom-0 mb-2 d-inline-flex">
                        <button className="btn circle-btn fab btn-primary mb-2" data-toggle="collapse"><IoIosAdd size={30}/></button>
                        <div id="hidden-form" className="mt-1 ms-4">
                            <ScheduleForm onAdd={addTeachingPeriod}/>
                        </div>
                    </div>
                </Col>
            </Row>
            </DragDropContext>
        </div> 
    )
}