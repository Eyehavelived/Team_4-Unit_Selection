import {IoMdClose, IoIosAdd} from "react-icons/io";
import {Card} from "react-bootstrap";

export default function UnitCard(props){

    function handleClick() {
        props.onDelete(props.id);
    }

    function handleAddClick(){
        props.onAddSelected(props.unitCode,props.unitName);
  
    }

    return (
        <Card className="card-width mx-1 position-relative" style={{width:"60rem"}}>
            {!props.view && <button className="clear-btn-override mt-n2" onClick={handleClick}><IoMdClose/></button>}
            <div className="mt-2">
                <h5 className="text-center">{props.unitCode}</h5>
                <h6 className="text-center">{props.unitName}</h6>
                <hr/>
                <div className="height-40">
                    <h6>Unit Type:</h6>
                    <p>{props.unitType}</p>
                    <h6>Semester:</h6>
                    <p>{props.semester+'('+props.year+')'}</p>
                    <h6>Synopsis:</h6>
                    <p>{props.synopsis}</p>
                    <h6>Workload:</h6>
                    <p>{props.workloadReq}</p>
                </div>
            </div>
            {/* Here use the condition variable */}
            {!props.view && 
            <div className="position-absolute bottom-0 end-0 mb-2 me-2">
                <button className="btn circle-btn-sm fab btn-primary" onClick={handleAddClick}><IoIosAdd size={23}/></button>
            </div>}
            
        </Card>
    )}