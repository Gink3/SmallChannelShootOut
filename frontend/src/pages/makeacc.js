import React, {useState, useContext} from 'react';
import AuthContext from "../context/authcontext.js"
import {Button, Form, Row, Col, Container} from "react-bootstrap";
import "../style/signup.scss";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function MakeAccount(){
    const history = useHistory(); 
    const {loggedIn} = useContext(AuthContext);
    const[postUser, setUserData] = useState({
        firstName: "", 
        lastName: "", 
        userName: "", 
        email: "", 
        password: "", 
        verifyPaswrd: "",
    }); 

    const handleSubmit = event => {
        event.preventDefault(); 

        console.log("Handled submit");

        axios.post('http://localhost:5000/signup', postUser, {
          withCredentials:true
        }).then(function(res){
            console.log(res);
            history.push("/");
            history.go(0);
        }).catch(function(error) {
            console.log(error);
        }); 
      
    }

    // Handles changes to input fields and updates
    // postUser obj to later send to signup route
    const handleChange = (event) => {
        console.log(event);
        setUserData({
            ...postUser,
            [event.target.name]: event.target.value
        });
    }

        return (
                 <>
                 {loggedIn===false && (
                <Container fluid>
                   
                    <Row className="justify-content-md-center " >

                        <Col md={4} style={{backgroundColor:'black', marginTop:'2%', marginBottom:'2%', borderRadius:'9px'}}>
                        <div className="d-flex justify-content-center header"> 
                        <h2  style={{color:'white'}}>  Create your ShootOut Account</h2>
                         </div>
                            <Form onSubmit={handleSubmit}>
                                <br />
                                <Form.Group controlId="firstName">

                                    <Form.Control required type="text" name="firstName" className="input line" placeholder="First Name" 
                                    value={postUser.firstName} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="lastName">

                                    <Form.Control required type="text" name="lastName" className="line" placeholder="Last Name" 
                                    value={postUser.lastName} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="userName">

                                    <Form.Control required type="text" name="userName" className="line" placeholder="Username" 
                                    value={postUser.userName} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="email">

                                    <Form.Control required type="email" name="email" className="line" placeholder="Enter email" 
                                    value={postUser.email} onChange={handleChange}/>
                                    <Form.Text className="text-muted">
                                        We'll never share your email with anyone else.
                                    </Form.Text>
                                </Form.Group>

                                <Form.Group controlId="password">
                                    <Form.Control required type="password" name="password" className="line" placeholder="Password"
                                     value={postUser.password} onChange={handleChange}/>
                                </Form.Group>


                                <Form.Group controlId="verifyPaswrd">
                                    <Form.Control required type="password" name="verifyPaswrd" className="line" placeholder="Verify Password"
                                     value = {postUser.verifyPaswrd} onChange={handleChange}/>
                                </Form.Group>


                                <br />
                                <Button variant="" className="btn_createacc" size="lg" type="submit" block>
                                    SIGN UP
                                </Button>
                                <br />
                            </Form>
                        </Col>
                    </Row>
                </Container>
               )} 
            </>
        );
}

export default MakeAccount; 
