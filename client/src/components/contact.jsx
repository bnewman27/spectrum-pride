// create a contact page with a functioning contact form that will send an email to the user and the site administrator
// create a contact form component
// import react
import React from 'react';
// import reactstrap
import { Container, Row, Col, Form, FormGroup, Label, Input, Button } from 'reactstrap';
// import styles
// import './styles/contact.scss';

// create and export contact component
export default function Contact() {
    return (
        <div className="contact">
            <Container className="contact-container">
                <Row>
                    <Col className="contact-col">
                        <h1 className="contact-title">Contact Us</h1>
                        <p className="contact-text">Call us at 559-512-3526</p>
                        <p className="contact-text">or</p>
                        <p className="contact-text">fill out the form below to contact us.</p>
                        <Form className="contact-form">
                            <FormGroup className="contact-form-group">
                                <Label className="contact-label" for="name">Name</Label>
                                <Input className="contact-input" type="text" name="name" id="name" placeholder="Enter your name" />
                            </FormGroup>
                            <FormGroup className="contact-form-group">
                                <Label className="contact-label" for="email">Email</Label>
                                <Input className="contact-input" type="email" name="email" id="email" placeholder="Enter your email" />
                            </FormGroup>
                            <FormGroup className="contact-form-group">
                                <Label className="contact-label" for="message">Message</Label>
                                <Input className="contact-input" type="textarea" name="message" id="message" placeholder="Enter your message" />
                            </FormGroup>
                            <Button className="contact-button">Submit</Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}