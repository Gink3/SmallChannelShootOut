import React from 'react';
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown, Button, Card, CardDeck, Image, Tabs, Tab, Form, Row, Col, Container} from "react-bootstrap";
import "../style/signup.scss";


function signUp(){
    return(
        <>
            <div class="header">
                Create your ShootOut Account
            </div>
            
            <Form className="page-manager">
                <Form.Group controlId="signupFirstName">
                    <Form.Label>First Name</Form.Label>
                    <Form.Control required type="text" placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="signupLastName">
                    <Form.Label>Last Name</Form.Label>
                    <Form.Control required type="text" placeholder="Last Name" />
                </Form.Group>

                <Form.Group controlId="signupUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control required type="text" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="signupEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control required type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="signupPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="signupResubmitPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control required type="password" placeholder="Resubmit Password" />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Account!
                </Button>
            </Form>
        </>
    );  
}

export default signUp;
