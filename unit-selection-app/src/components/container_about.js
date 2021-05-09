import React from 'react'
import {Row, Col} from "react-bootstrap";
import profile1 from '../assets/images/bev.png';
import profile2 from '../assets/images/jj.png';
import profile3 from '../assets/images/aaron.png';

const Container_about = () => {
    return (
        <section id="about">
            <div className="container">
                <hr/>
                <Row className="py-5 mx-3">
                    <h1 className="fw-bold secondary-text">ABOUT US</h1>
                </Row>
                <Row>
                    <Col className="text-center px-2">
                        <img src={profile1} className="rounded-circle"/>
                        <h4 className="fw-bold mt-3">Jia Ly Ong</h4>
                        <h6 className="primary-text mb-4">Bachelors of Computer Science</h6>
                        <h6>Responsibilities:</h6>
                        <ul className="list-unstyled">
                            <li> - UI Mockup/Design</li>
                            <li> - Front-end development w/ React.js and Bootstrap</li>
                            <li> - Mostly did the Home and Scheduling Page ヽ(•ω•ゞ)</li>
                        </ul>
                    </Col>
                    <Col className="text-center px-2">
                        <img src={profile2} className="rounded-circle"/>
                        <h4 className="fw-bold mt-3">Jing Jie Tan</h4>
                        <h6 className="primary-text mb-4">---</h6>
                        <h6>Responsibilities:</h6>
                        <ul className="list-unstyled">
                            <li> - Back-end development with Apollo Client and GQL</li>
                            <li> - Documentation / QA</li>
                            <li> - Literally the carry ( ´•ω•)</li>
                        </ul>
                    </Col>
                    <Col className="text-center px-2">
                        <img src={profile3} className="rounded-circle"/>
                        <h4 className="fw-bold mt-3">Yangtian Yan</h4>
                        <h6 className="primary-text mb-4">Bachelors of Computer Science</h6>
                        <h6>Responsibilities:</h6>
                        <ul className="list-unstyled">
                            <li> - UI Mockup/Design Support</li>
                            <li> - Front-end development w/ React.js and Bootstrap</li>
                            <li> - Mostly did Selection and View Page (｀•ω•´)ゞ</li>
                        </ul>
                    </Col>
                </Row>
            </div>
            <div className="spacing-20"></div>
        </section>
    )
}

export default Container_about
