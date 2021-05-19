import React from 'react'
import {Row, Col} from "react-bootstrap";
import selection from '../assets/images/selection.gif';
import schedule from '../assets/images/schedule.gif';
import view from '../assets/images/view.gif';
import Selection from '../pages/schedule';

const Container_howtouse = () => {
    return (
        <section id="howtouse" className="">
            <div className="container">
                <hr/>
                <Row className="py-5 mx-3">
                    <h1 className="fw-bold secondary-text">HOW TO USE</h1>
                </Row>
                <Row className="my-5">
                    <Col md={6} className="align-self-center">
                        <div className="d-inline-flex mb-3">
                            <div className="title-deco me-1"></div>
                            <h2 className="primary-text fw-bold me-3">1</h2>
                            <h2 className="primary-text ">SELECT your units</h2>
                        </div>
                        <ul>
                            <li><h6>Search for units</h6></li>
                            <li><h6>Units will appear in Units box, click to read more about them</h6></li>
                            <li><h6>Interested? Add it with the + button on the card</h6></li>
                            <li><h6>Go to schedule page once you’re done choosing your units!</h6></li>
                        </ul>
                    </Col>
                    <Col md={6} className="text-center align-self-center"><img src={selection} className="img-fluid"/></Col>
                </Row>
                <Row className="my-5">
                    <Col md={6} className="text-center align-self-center"><img src={schedule} className="img-fluid"/></Col>
                    <Col md={6} className="align-self-center">
                        <div className="d-inline-flex mb-3">
                            <div className="title-deco me-1"></div>
                            <h2 className="primary-text fw-bold me-3">2</h2>
                            <h2 className="primary-text ">SCHEDULE your units</h2>
                        </div>
                        <ul>
                            <li><h6>Use the form to add teaching periods</h6></li>
                            <li><h6>Drag {`&`} drop the selected units into the desired teaching period </h6></li>
                            <li><h6>Go to view page once you’re done scheduling your units!</h6></li>
                        </ul>
                    </Col>
                </Row>
                <Row className="my-5">
                    <Col md={6} className="align-self-center">
                        <div className="d-inline-flex mb-3">
                            <div className="title-deco me-1"></div>
                            <h2 className="primary-text fw-bold me-3">3</h2>
                            <h2 className="primary-text ">VIEW your schedule</h2>
                        </div>
                        <ul>
                            <li><h6>Review your final schedule and save the pdf by clicking the download PDF button</h6></li>
                        </ul>
                    </Col>
                    <Col md={6} className="text-center align-self-center"><img src={view} className="img-fluid"/></Col>
                </Row>
            </div>
            <div className="spacing-20"></div>
        </section>
    )
}

export default Container_howtouse
