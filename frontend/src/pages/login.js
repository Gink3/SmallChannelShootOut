import React, {useState} from 'react';
import Modal from 'react-bootstrap/Modal'
import {Button, Form} from "react-bootstrap";
import "../style/signup.scss";
import axios from 'axios'; 
  
function Login(props) {

  const[logUser, setUserData] = useState({
    email: "", 
    password: "", 
}); 


const formSubmit= async (e) => {
  e.preventDefault(); 
axios.post('http://localhost:5000/login', logUser).then (function(response){
    if(response.data.Message === "Successful"){
      alert(response.data.Message); //do something when login is succesfull
    }
  else {
      alert(response.data.Message); //showing the server error message
  }
});

}

  return (
    <>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="login-design"
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">LOGIN</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form onSubmit={formSubmit}>
            <br />
            <Form.Group controlId="email">
              <Form.Control
                required
                type="email"
                className="line"
                placeholder="Enter email"
                value = {logUser.email} onChange={(e)=> setUserData({...logUser, email:e.target.value})}
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                required
                type="password"
                className="line"
                placeholder="Password"
                value = {logUser.password} onChange={(e)=> setUserData({...logUser, password:e.target.value})}
              />
            </Form.Group>
            <br />
            <Button
              variant=""
              className="btn_createacc"
              size="lg"
              type="submit"
              block
              
            >
              LOGIN
            </Button>
            <br />
            Don't have an account?&nbsp;<a href="/signup">Click here!</a>
            <br />
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={props.onHide}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
export default Login;