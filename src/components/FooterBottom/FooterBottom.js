import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const FooterBottom = () => {
    return (
        <div>
            <div className="bg-dark">
                <Container >
                    <Row>
                        <Col className="text-center text-white mt-3">
                            <p>Copyrights &copy;  All Rights Reserved 2021</p>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default FooterBottom;