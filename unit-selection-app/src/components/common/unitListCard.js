import {IoMdClose} from "react-icons/io";
import {Col} from "react-bootstrap";

export default function UnitListCard(props){

    function handleClick () {
        //props.onDelete();
    }

    return (
        <div className="card me-3 mb-1" >
            <div className="pt-2 px-2">
            <h6>{props.code}</h6>
            <p className="mb-2">{props.name}</p>
            </div>
        </div>
    )
}