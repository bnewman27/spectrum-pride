// create a footer component

// create a footer component
// import react
import React from 'react';
// import reactstrap
import { Container, Row, Col } from 'reactstrap';
// import styles
// import '../../assets/styles/footer.scss';

// create and export footer component
export default function Footer() {
    return (
        <div className="footer">
            <Container className="footer-container">
                <Row>
                    <Col className="footer-col">
                        <p className="footer-text">Call us at 559-512-3526 - Copyright © 2022 Spectrum Pride LLC - All Rights Reserved.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

// end of file
