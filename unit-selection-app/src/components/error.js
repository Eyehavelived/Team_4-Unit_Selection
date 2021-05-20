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
                        {props.error}
                    </div>
                </div>
                :null}
        </div>
    )
}

export default Error
