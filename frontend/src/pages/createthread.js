import React from 'react';
import { Button, Card,  Container, Row, Col, Form } from "react-bootstrap";
import "../style/createthread.scss";

function createThread(){
    return(            
        <>
            <Container fluid>
                    <div className="d-flex justify-content-center header  ">
                        <h2>  Create a post</h2>
                    </div>
                    <Row className="justify-content-md-center ">

                        <Col md={4}>

                            <Form >
                                <br/>
                                <Form.Group controlId="firstName">
                                    <Form.Control required type="text" className="input line" placeholder="Title" />
                                </Form.Group>

                                <Form.Group controlId="lastName">

                                    <Form.Control required type="text" className="line" placeholder="Text" />
                                </Form.Group>

                                <br />
                                <Button variant="" className="btn_createacc" size="lg" type="submit" block>
                                    Post
                                </Button>
                                <Button variant="" className="btn_createacc" size="lg" type="submit" block>
                                    Save as Draft
                                </Button>
                                <br />
                            </Form>
                        </Col>
                    </Row>
                </Container>
        </>    
    );
}
export default createThread;