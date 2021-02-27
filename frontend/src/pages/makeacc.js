import React from 'react';
import {Button, Form, Row, Col, Container} from "react-bootstrap";
import "../style/signup.scss";


function signUp(){
    return(
        <>
        <Container fluid>
            <div className="d-flex justify-content-center header  ">
              <h2>  Create your ShootOut Account</h2>
            </div>
            <Row className="justify-content-md-center ">

                <Col md={4} > 
            
            <Form >
                <br/>
                <Form.Group controlId="signupFirstName">
                    {/* <Form.Label>First Name</Form.Label> */}
                    <Form.Control required type="text" className="input line" placeholder="First Name" />
                </Form.Group>

                <Form.Group controlId="signupLastName">
                   {/*  <Form.Label>Last Name</Form.Label> */}
                    <Form.Control required type="text" className="line" placeholder="Last Name" />
                </Form.Group>

                <Form.Group controlId="signupUsername">
                  {/*   <Form.Label>Username</Form.Label> */}
                    <Form.Control required type="text" className="line" placeholder="Username" />
                </Form.Group>

                <Form.Group controlId="signupEmail">
                    {/* <Form.Label>Email address</Form.Label> */}
                    <Form.Control required type="email" className="line" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="signupPassword">
                    {/* <Form.Label>Password</Form.Label> */}
                    <Form.Control required type="password" className="line" placeholder="Password" />
                </Form.Group>

                <Form.Group controlId="signupResubmitPassword">
                   {/*  <Form.Label>Password</Form.Label> */}
                    <Form.Control required type="password" className="line" placeholder="Resubmit Password" />
                </Form.Group>
<br/>
                <Button variant="primary" className="btn_createacc" size="lg" type="submit" block>
                  SIGN UP 
                </Button>
                <br/>
            </Form>
            </Col>
            </Row>
            </Container>
        </>
    );  
}

export default signUp;
