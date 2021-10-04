import React from 'react';
import { Button, Container, Row } from 'react-bootstrap';
import './Notfound.css';
import notfound from '../../images/error.png';
const Notfound = () => {
    return (
        <div className="bg-dark">
            <Container>
                <Row>
                    <div className="text-center notfound text-white">
                        <img src={notfound} alt="" />
                        <h3 className="my-4 fs-1">Error 404 : Page Not Found</h3>
                        <p className="my-4 fs-3 w-75 mx-auto">The page you are looking for might have been removed had its name changed or is temporarily unavailable.</p>
                        <Button className="me-3"><i class="fas fa-undo-alt"></i> Go Back</Button>
                        <Button className="ms-3"><i class="fas fa-home"></i> Homepage</Button>
                    </div>
                </Row>
            </Container>
        </div>
    );
};

export default Notfound;