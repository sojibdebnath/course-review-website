import Button from '@restart/ui/esm/Button';
import React from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import './Contact.css';
const Contact = () => {
    return (
        <div>
            <div className="contact-section">
                <Container>
                    <Row>
                        <h2 className="text-center fw-bold mb-5 us-tech">Contact Us</h2>
                        <Col>
                            <div className="detail-contact">
                                <h6>Contact Details</h6>
                                <h2>Get in Touch</h2>
                                <p className="get-in">Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.</p>
                                <div>
                                    <h3>Our Address</h3>
                                    <p className="para">2750 Quadra Street Victoria Road, New York, Canada</p>
                                </div>
                                <div>
                                    <h3>E-mail</h3>
                                    <h5 className="heading">Mail: <span className="text-mail">hello@ecademy.com</span></h5>
                                    <h5 className="heading">Gmail: <span className="text-mail">ecademy@gmail.com</span></h5>
                                </div>
                                <div className="mt-3">
                                    <h3>Contact</h3>
                                    <h5 className="heading">Mobile: <span className="text-mail">+1-613-555-0103</span></h5>
                                    <h5 className="heading">Phone: <span className="text-mail">+1-485-456-0102</span></h5>
                                </div>
                                <div className="mt-3">
                                    <h3>Hours of Operation</h3>
                                    <p className="get-in">Sunday & Saturday: 10.30 - 22.30</p>
                                </div>

                            </div>
                        </Col>
                        <Col>
                            <div className="form-submit">
                                <h2>Ready to Get Started?</h2>
                                <p>Your email address will not be published. Required fields are marked *</p>
                                <div className="area-form">
                                    <Form>
                                        <Form.Group className="mb-3" controlId="formGroupEmail">
                                            <Form.Control className="input-field text-white" type="text" placeholder="Your name" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Control type="email" placeholder="Your email address" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formGroupPassword">
                                            <Form.Control type="text" placeholder="Your subject" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                                            <Form.Control as="textarea" rows={3} placeholder="Write your message" />
                                        </Form.Group>
                                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                                            <Form.Check type="checkbox" label="Accept terms and privacy policy." />
                                        </Form.Group>
                                        <Button variant="primary" className="submit-btn" type="submit">
                                            Send message
                                        </Button>
                                    </Form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Contact;