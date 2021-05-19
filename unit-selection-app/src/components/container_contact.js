import React from 'react'
import {Link as LinkR} from 'react-router-dom';
import {Row, Col} from "react-bootstrap";
import { FaBootstrap, FaGithub, FaReact } from "react-icons/fa";
import { Collapse } from 'bootstrap';

const Container_contact = () => {
    return (
        <section id="contact">
            <Row className="py-4 mx-3">
                <Col>
                    <h4 className="mb-4">Contact Us</h4>
                    <p>jong0029@student.monash.edu</p>
                    <p>jtan0088@student.monash.edu</p>
                    <p>yyan0061@student.monash.edu</p>
                </Col>
                    
                <Col id="btn-override" className="d-flex justify-content-end">
                    <LinkR to={{pathname:"https://github.com/Eyehavelived/Team_4-Unit_Selection"}} target="_blank">
                        <button className="btn circle-btn mx-3"><FaGithub size={30}/></button>
                    </LinkR>
                    <LinkR to={{pathname:"https://getbootstrap.com/"}} target="_blank">
                        <button className="btn circle-btn mx-3"><FaBootstrap size={30}/></button>
                    </LinkR>
                    <LinkR to={{pathname:"https://reactjs.org/"}} target="_blank">
                        <button className="btn circle-btn mx-3"><FaReact size={30}/></button>
                    </LinkR>
                </Col>
            </Row>
        </section>
    )
}

export default Container_contact
