import React, {useState} from 'react';
import { FaExclamationCircle } from "react-icons/fa";

const Error = (props) => {

    const [onHover, setOnHover] = useState(false);

    function handleMouseHover () {
        setOnHover(!onHover);
    }

    return (
        <div className="error position-relative" onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
            <FaExclamationCircle size={15} className="mx-2"/>
            {(onHover)? 
                <div className="position-absolute top-100 start-100 ">
                    <div className="errormsg p-2">
                        {(props.error.wrongTP!=null)?
                        <div>
                            <p>{props.error.wrongTP[0]}</p>
                            <ul>
                            {props.error.wrongTP[1].map((unit)=>
                                <li>{unit}</li>
                            )}
                            </ul>
                        </div>
                        : null}
                        {(props.error.wrongBrkLoad!=null)?
                        <div>
                            <p>{props.error.wrongBrkLoad[0]}</p>
                            <p>{props.error.wrongBrkLoad[1]}</p>
                        </div>
                        : null}
                    </div>
                </div>
                :null}
        </div>
    )
}

export default Error
