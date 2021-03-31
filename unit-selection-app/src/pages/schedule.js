import React, {useState} from 'react';
import {DragDropContext,Droppable,Draggable} from 'react-beautiful-dnd';
import Navigation from '../components/common/navigation2';
import ScheduleForm from '../components/scheduleForm';
import ScheduleCard from '../components/scheduleCard'
import {IoIosAdd} from "react-icons/io";

//from react-beautiful-dnd git example
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
  
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
        updateUnitList(prevTeachingPeriods => {
            return prevTeachingPeriods.filter((tp)=>{
                console.log(tp);
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

        if(sid === did){
            const list = unitList.filter((list)=>{return list.listId===sid})
            const items = reorder(list[0].units,source.index,destination.index);
            const newState = [...unitList];
            newState.map((list)=>{return (list.listId===sid?list.units=items:null)})
            updateUnitList(newState);
        }
        
    }
    

    return (
        <div className="overflow-hidden">
            <div className="my-4 mx-4">
                    <Navigation/>
            </div>

            <DragDropContext onDragEnd={handleOnDragEnd}>
            <div className="row">
                <div id="container-selection-units" className="col-2 ms-4 py-3">
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
                                                <div className="card me-3 mb-1" {...provided.draggableProps} {...provided.dragHandleProps} ref={provided.innerRef}>
                                                    <div className="pt-2 px-2">
                                                        <h6>{unit.unitCode}</h6>
                                                        <p>{unit.unitName}</p>
                                                    </div>
                                                </div>
                                                )}
                                            </Draggable>
                                )))})}
                                {provided.placeholder}
                                </div>
                            )}
                        </Droppable>
                </div>

                <div id="container-schedule" className="col-9 ms-4 py-2 px-1 row flex-row flex-nowrap overflow-auto position-relative">
                    
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
                </div>
            </div>
            </DragDropContext>
        </div> 
    )
}