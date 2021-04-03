import {IoMdClose, IoIosAdd} from "react-icons/io";
import {Col} from "react-bootstrap";

export default function UnitCard(props){

    function handleClick () {
        props.onDelete(props.id);
    }

    function handleAddClick(){
        props.onAddSelected(props.unitCode,props.unitName);
  
    }

    return (
        <Col md={3} className="card mx-1">
            <button className="clear-btn-override close-btn-override mt-n2 ms-auto" onClick={handleClick}><IoMdClose/></button>
            <div className="mt-2">
                <h5>{props.unitCode}</h5>
                <h5>{props.unitName}</h5>
                <hr/>
                <div>
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
            {props.compare&& <button className="btn circle-btn-sm fab btn-primary ms-auto mb-2 me-2" onClick={handleAddClick}><IoIosAdd size={23}/></button>}
        </Col>
)}