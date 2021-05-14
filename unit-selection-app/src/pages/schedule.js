import React, {useState, useEffect} from 'react';
import {Link as LinkR} from 'react-router-dom';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import {Row, Col} from "react-bootstrap";
import {NavigationApp} from "../components/common/navigation";
import ScheduleForm from '../components/scheduleForm';
import ScheduleCard from '../components/scheduleCard'
import {UnitListCard} from "../components/common/unitListCard";

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

const semesterTypes = ["1","Winter","2","Summer A","Summer B"];

export default function Selection(){
    const page = "Schedule"

    const SELECTEDUNITS = "selectedUnits"

    //const [active, setActive] = useState(true);

    const [selectedUnits] = useState(()=>{
        const localData = localStorage.getItem('selectedUnits');
        return localData ? JSON.parse(localData) : [];
    });

    const [unitList, updateUnitList] = useState(()=>{
        const localData = localStorage.getItem('scheduledUnits');
        if (localData){
            let scheduleList = JSON.parse(localData);
            //Remove Units
            let scheduleUnits = []
            for (const tp of scheduleList){
                scheduleUnits = scheduleUnits.concat(tp.units);
                };
            let toBeRemoved = scheduleUnits.filter((unit)=>{
                return selectedUnits.map(unit=>unit.unitCode).indexOf(unit.unitCode)<0
                });
            scheduleList = scheduleList.map(tp => {
                let removedUnits = tp.units.filter(unit=>toBeRemoved.map(unit=>unit.unitCode).indexOf(unit.unitCode)<0);
                return {listId:tp.listId,year:tp.year,sem:tp.sem,units:removedUnits}
                });
            //Add Units
            let toBeAdded = selectedUnits.filter((unit)=>{
                return scheduleUnits.map(unit=>unit.unitCode).indexOf(unit.unitCode)<0
                });
            scheduleList[0].units = scheduleList[0].units.concat(toBeAdded);
            return scheduleList
        }else{
            return [{listId:"selectedUnits",
                    year: 0,
                    sem: 0,
                    units:selectedUnits}];
        }
        
    })

    useEffect(()=> {
        localStorage.setItem('scheduledUnits',JSON.stringify(unitList))
    },[unitList]);

    //returns true if smaller, returns false if larger
    function compareTeachingPeriod(currentTeachingPeriod, prevTeachingPeriod){
        let retVal = false;

        if (currentTeachingPeriod.year === prevTeachingPeriod.year) {
            if (semesterTypes.indexOf(currentTeachingPeriod.sem) < semesterTypes.indexOf(prevTeachingPeriod.sem)){
                retVal = true;
            }
        }
        else if (currentTeachingPeriod.year < prevTeachingPeriod.year){
            retVal = true;
        }
        console.log(retVal);
        return retVal;
    }

    function addTeachingPeriod(teachingPeriod){

        updateUnitList(prevTeachingPeriods => {
            for (var i=0; i < prevTeachingPeriods.length; i++){
                if(prevTeachingPeriods[i].year === teachingPeriod.year && 
                    prevTeachingPeriods[i].sem === teachingPeriod.sem){
                        return prevTeachingPeriods;
                }
            }

            let newTeachingPeriod = [...prevTeachingPeriods, teachingPeriod];

            //reorder teaching periods using selection sort
            for (var i=newTeachingPeriod.length-1; i > 0; i--) {
                var current = newTeachingPeriod[i];
                var prev = newTeachingPeriod[i-1];
                var sort = compareTeachingPeriod(current,prev);
                if (sort){
                    newTeachingPeriod[i] = prev;
                    newTeachingPeriod[i-1] = current;
                } else {
                    break;
                }
            }

            return newTeachingPeriod;
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
            prevTeachingPeriods[sInd].units = [];
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
        <div className="app-container ">
            <NavigationApp page={page}/>
            <Row className="mb-3">
                <Col md={6}>
                    <ScheduleForm onAdd={addTeachingPeriod}/>
                </Col> 
            </Row>
            <DragDropContext onDragEnd={handleOnDragEnd}>
            <Row>
                <Col md={2} className="d-flex flex-column justify-content-between white-bg py-3 height-70">
                    <Row className="pb-3">
                        <h6>Selected Units</h6>
                    </Row>
                    <Droppable droppableId={SELECTEDUNITS}>
                            {(provided)=>(
                                <div className="overflow-auto height-50" {...provided.droppableProps} ref={provided.innerRef}>
                                { unitList.filter((list)=>{return list.listId === SELECTEDUNITS}).map((su)=>{
                                    return(
                                        su.units.map((unit,index)=>(
                                            <Draggable key={unit.unitCode} draggableId={unit.unitCode} index={index}>
                                                {(provided)=>(
                                                <div {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                   <UnitListCard code={unit.unitCode} name={unit.unitName} sem={unit.unitSem}/>
                                                </div>
                                                )}
                                            </Draggable>
                                )))})}
                                {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                    <Row>
                        <LinkR to="/view">
                        <button className="btn btn-primary">View Map {'>'}</button>
                        </LinkR>
                    </Row>
                    
                </Col>

                <Col md={10} className="grey-bg py-2 px-1 row flex-row flex-nowrap overflow-auto height-70">
                    
                    {unitList.filter((tp)=>{return tp.listId!==SELECTEDUNITS}).map((tp,index) => (
                        <ScheduleCard key={tp.year+tp.sem} index={index} 
                        tp={tp} onDelete={deleteTeachingPeriod}/>
                    ))}
                </Col>
            </Row>
            </DragDropContext>
            
        </div> 
    )
}
