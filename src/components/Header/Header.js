import React from 'react';
import { Button, Col, Container, Form, Image, Nav, Row } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from '../../images/eCademy.png';
import './Header.css';
const Header = () => {
    return (
        <div className="top-menu">
            <Container>
                <Row>
                    <Col md={2}>
                        <div className="logo-img">
                            <Image src={logo}></Image>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div>
                            <Form.Control className="input" type="text" placeholder="Search for anything..." />
                        </div>
                    </Col>
                    <Col md={5}>
                        <Nav>
                            <ul className="menu">
                                <li>
                                    <NavLink
                                        to="/home"
                                    >
                                        Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/about"
                                    >
                                        About Us
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/services"
                                    >
                                        Services
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/blogs"
                                    >
                                        Blogs
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink
                                        to="/contact"
                                    >
                                        Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </Nav>
                    </Col>
                    <Col md={2}>
                        <div>
                            <Button className="register"><i className="far fa-user"></i> Login/Register</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Header;