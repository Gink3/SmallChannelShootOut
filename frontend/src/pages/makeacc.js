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

    const formSubmit= async (e) => {
        e.preventDefault(); 
      axios.post('http://localhost:5000/signup', postUser, {
          withCredentials:true
        }).then(function(res){
            history.push("/")
            history.go(0);
        }); 
      
    }

        return (
                 <>
                 {loggedIn==false && (
                <Container fluid>
                   
                    <Row className="justify-content-md-center " >

                        <Col md={4} style={{backgroundColor:'black', marginTop:'2%', marginBottom:'2%', borderRadius:'9px'}}>
                        <div className="d-flex justify-content-center header"> 
                        <h2  style={{color:'white'}}>  Create your ShootOut Account</h2>
                         </div>
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


                                <Form.Group controlId="verifyPaswrd">
                                    <Form.Control required type="password" className="line" placeholder="Verify Password"
                                     value = {postUser.verifyPaswrd} onChange={(e)=> setUserData({...postUser, verifyPaswrd:e.target.value})}/>
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
