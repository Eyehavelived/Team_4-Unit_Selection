import {Card} from "react-bootstrap";

export default function UnitCard(props){

    return (
        <Card className="mx-1" style={{width:"70rem"}}>
            <div className="mt-2">
                <h5 className="text-center">{props.unitCode}</h5>
                <h6 className="text-center">{props.unitName}</h6>
                {/* <hr/>
                <div className="height-40 px-3 my-2">
                    <h6>Unit Type:</h6>
                    <p>{props.unitType}</p>
                    <h6>Semester:</h6>
                    <p>{props.semester+'('+props.year+')'}</p>
                    <h6>Synopsis:</h6>
                    <p>{props.synopsis}</p>
                    <h6>Workload:</h6>
                    <p>{props.workloadReq}</p>
                </div> */}
            </div>
        </Card>
    )}