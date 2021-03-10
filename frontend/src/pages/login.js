import React from 'react';
import Modal from 'react-bootstrap/Modal'
import {Button, Form} from "react-bootstrap";
import "../style/signup.scss";

  
function Login(props) {
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
          <Form>
            <br />
            <Form.Group controlId="email">
              <Form.Control
                required
                type="email"
                className="line"
                placeholder="Enter email"
              />
            </Form.Group>
            <Form.Group controlId="password">
              <Form.Control
                required
                type="password"
                className="line"
                placeholder="Password"
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
            Don't have an account ? &nbsp; <a href="/signup">Click here!</a>
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