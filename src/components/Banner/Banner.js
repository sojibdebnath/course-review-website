import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import './Banner.css';
const Banner = () => {
    return (
        <div className="banner">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="course-area">
                            <h6>DISTANT LEARNING</h6>
                            <h2>Feel Like You Are Attending Your Classes Physically!</h2>
                            <p>Training programs can bring you a super exciting experience of learning through online! You never face any negative experience while enjoying your classes virtually by sitting in your comfort zone. Our flexible learning initiatives will help you to learn better and quicker than the traditional ways of learning skills.</p>
                            <Button className="register"><i className="fas fa-calendar-day"></i> View Courses</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Banner;