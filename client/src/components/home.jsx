// build a home page with a route to a navbar and footer
// import react
import React from 'react';
// import react router
import { Link } from 'react-router-dom';
// import reactstrap
import { Container, Row, Col } from 'reactstrap';
// import components
import Navbar from './navbar';
import Footer from './footer';
// import images
// import homeImage from '../../assets/images/home.jpg';
// import styles
// import '../../assets/styles/home.scss';

// create and export home component
export default function Home() {    
    return (
        <div className="home">
            <Navbar />
            <Container className="home-container">
                <Row>
                    <Col className="home-col">
                        <h1 className="home-title">Welcome to <span className="home-title-span">Spectrum Pride</span> </h1>
                        <p className="home-text">Serving Children from Fresno to Modesto</p>
                    </Col>
                    <Col className="home-col">
                        {/* <img className="home-image" src={homeImage} alt="home" /> */}
                    </Col>
                </Row>
            </Container>
            <Footer />
        </div>
    );
}

// end of file