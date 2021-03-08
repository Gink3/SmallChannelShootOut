import React, {useState} from 'react';
import {Button, Form, Row, Col, Container} from "react-bootstrap";
import "../style/signup.scss";
import axios from 'axios';

function MakeAccount(){
    const[postUser, setUserData] = useState({
        firstName: "", 
        lastName: "", 
        userName: "", 
        email: "", 
        password: ""
    }); 

    const formSubmit= async (e) => {
        e.preventDefault(); 
      axios.post('http://localhost:5000/signup', postUser);
      window.location = '/';
      };

        return (
            <>
                <Container fluid>
                    <div className="d-flex justify-content-center header  ">
                        <h2>  Create your ShootOut Account</h2>
                    </div>
                    <Row className="justify-content-md-center ">

                        <Col md={4}>

                            <Form onSubmit={formSubmit}>
                                <br />
                                <Form.Group controlId="firstName">

                                    <Form.Control required type="text" className="input line" placeholder="First Name" 
                                    value = {postUser.firstName} onChange={(e)=> setUserData({...postUser, firstName:e.target.value})}/>
                                </Form.Group>

                                <Form.Group controlId="lastName">

                                    <Form.Control required type="text" className="line" placeholder="Last Name" 
                                    value = {postUser.lastName} onChange={(e)=> setUserData({...postUser, lastName:e.target.value})}/>
                                </Form.Group>

                                <Form.Group controlId="userName">

                                    <Form.Control required type="text" className="line" placeholder="Username" 
                                    value = {postUser.userName} onChange={(e)=> setUserData({...postUser, userName:e.target.value})}/>
                                </Form.Group>

                                <Form.Group controlId="email">

                                    <Form.Control required type="email" className="line" placeholder="Enter email" 
                                    value = {postUser.email} onChange={(e)=> setUserData({...postUser, email:e.target.value})}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Control required type="password" className="line" placeholder="Password"
                                     value = {postUser.password} onChange={(e)=> setUserData({...postUser, password:e.target.value})}/>
                                </Form.Group>


                                <br />
                                <Button variant="primary" className="btn_createacc" size="lg" type="submit" block>
                                    SIGN UP
                                </Button>
                                <br />
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </>
        );
}

export default MakeAccount; 
