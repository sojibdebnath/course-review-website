import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css';
const Footer = () => {
    return (
        <div className="footer-top">
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h3>Resources</h3>
                            <div>
                                <ul className="footer-area">
                                    <li><i className="fas fa-square"></i> Become A Teacher</li>
                                    <li><i className="fas fa-square"></i> Instructor/Student Profile</li>
                                    <li><i className="fas fa-square"></i> Courses</li>
                                    <li><i className="fas fa-square"></i> LP Checkout</li>
                                </ul>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <h3>Explore</h3>
                        <ul className="footer-area">
                            <li><i className="fas fa-square"></i> Home</li>
                            <li><i className="fas fa-square"></i> Blog</li>
                            <li><i className="fas fa-square"></i> Privacy Policy</li>
                            <li><i className="fas fa-square"></i> Courses</li>
                        </ul>
                    </Col>
                    <Col>
                        <div>
                            <p>Working to bring significant changes in online-based learning by doing extensive research for course curriculum preparation!</p>
                            <ul className="social-icon">
                                <li><i className="fab fa-facebook"></i></li>
                                <li><i className="fab fa-instagram"></i></li>
                                <li><i className="fab fa-youtube"></i></li>
                                <li><i className="fab fa-linkedin"></i></li>
                            </ul>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;