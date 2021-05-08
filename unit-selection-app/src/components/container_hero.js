import React from 'react'
import {Link as LinkR} from 'react-router-dom';
import {Row, Col} from "react-bootstrap";

const Container_hero = () => {
    return (
        <section id="home">
            <div className="navbar-replace"></div>
            <div className="container my-4">
                <Row>
                    <Col md={3}></Col>
                    <Col className="my-5 text-center">
                        <div className="mb-5">
                            <h1>Make <span>Unit Selection</span> Easy</h1>
                            <h5 className="py-3">Schedule your time at Monash University and make selecting units stress-free.</h5>
                        </div>
                            
                        <LinkR to="/selection">
                        <button className="btn btn-primary btn-lg py-2 my-3" type="button">Making New Schedule</button>
                        </LinkR>
                            
                    </Col>
                    <Col md={3}></Col>
                </Row>
            </div>
        </section>
    )
}

export default Container_hero;
