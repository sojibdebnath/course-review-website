import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './About.css';
import photo from '../../images/about-img5.jpg';
const About = () => {
    return (
        <div>
            <div>
                <Container>
                    <Row className="py-5">
                        <h2 className="text-center fw-bold mb-5 us-tech">About Us</h2>
                        <Col>
                            <div>
                                <h6 className="learntalk">DISTANCE LEARNING</h6>
                                <h2 className="mt-3 fw-bold text-dark mb-3">Build Your Project Management Skills Online, Anytime</h2>
                                <p className="mb-3">Want to learn and earn PDUs or CEUs on your schedule — anytime, anywhere? Or, pick up a new skill quickly like, project team leadership or agile? Browse our most popular online courses.</p>
                                <Button className="explore">Explore..</Button>
                            </div>
                        </Col>
                        <Col>
                            <div>
                                <img className="img-fluid" src={photo} alt="" />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <div className="enrolled">
                <Container>
                    <Row className="text-center py-5">
                        <Col>
                            <h1 className="number">1,926</h1>
                            <h6 className="text-dark fw-bold">FINISHED SESSIONS</h6>
                        </Col>
                        <Col>
                            <h1 className="number">3,926</h1>
                            <h6 className="text-dark fw-bold">ENROLLED LEARNERS</h6>
                        </Col>
                        <Col>
                            <h1 className="number">326</h1>
                            <h6 className="text-dark fw-bold">ONLINE INSTRUCTORS</h6>
                        </Col>
                        <Col className="number">
                            <h1>100</h1>
                            <h6 className="text-dark fw-bold">SATISFACTION RATE</h6>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default About;