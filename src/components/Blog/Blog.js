import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import './Blog.css';
import image from '../../images/blog-post-img2.jpg';
import online from '../../images/blog-post-img4.jpg';
import learning from '../../images/blog-post-img5.jpg';
import design from '../../images/blog-post-img6.jpg';
const Blog = () => {
    return (
        <div>
            <div>
                <Container className="py-5">
                    <h2 className="text-center fw-bold mb-5 us-tech">Blogs</h2>
                    <Row xs={1} md={3} className="g-4 ">
                        <Col>
                            <Card className="card-area">
                                <Card.Img variant="top" src={image} />
                                <Card.Body>
                                    <Card.Subtitle className="subtitle-text">ONLINE</Card.Subtitle>
                                    <Card.Title className="fw-bold fs-4 my-3 heading-slug">What is the Mlb Summer Slugger Program?</Card.Title>
                                    <Card.Text>
                                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.
                                    </Card.Text>
                                    <Button className="register">Read more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card-area">
                                <Card.Img variant="top" src={online} />
                                <Card.Body>
                                    <Card.Subtitle className="subtitle-text">EDUCATION</Card.Subtitle>
                                    <Card.Title className="fw-bold fs-4 my-3 heading-slug">4 Steps to Quality Training in Times of Urgency</Card.Title>
                                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.
                                    </Card.Text>
                                    <Button className="register">Read more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card-area">
                                <Card.Img variant="top" src={learning} />
                                <Card.Body>
                                    <Card.Subtitle className="subtitle-text">LEARNING</Card.Subtitle>
                                    <Card.Title className="fw-bold fs-4 my-3 heading-slug">100 Blended Learning Resources for Teachers</Card.Title>
                                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.
                                    </Card.Text>
                                    <Button className="register">Read more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                        <Col>
                            <Card className="card-area">
                                <Card.Img variant="top" src={design} />
                                <Card.Body>
                                    <Card.Subtitle className="subtitle-text">DESIGN</Card.Subtitle>
                                    <Card.Title className="fw-bold fs-4 my-3 heading-slug">Instructional Design and Adult Learners</Card.Title>
                                    <Card.Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not.
                                    </Card.Text>
                                    <Button className="register">Read more</Button>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default Blog;