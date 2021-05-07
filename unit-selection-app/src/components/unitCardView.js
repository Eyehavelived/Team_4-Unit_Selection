import {Card} from "react-bootstrap";

export default function UnitCard(props){

    return (
        <Card className="mx-1 mb-1" style={{ width: '17rem' }}>
            <div className="mt-1">
                <h5 className="text-center">{props.unitCode}</h5>
                <h6 className="text-center">{props.unitName}</h6>
            </div>
        </Card>
    )}