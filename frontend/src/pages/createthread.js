import React from 'react';
import { Button, Tabs, Tab, Card,  Container, Row, Col, Form } from "react-bootstrap";
import "../style/createthread.scss";

function createThread(){
    return(            
        <>
            <Container fluid>
                    <div className="d-flex justify-content-center header  ">
                        <h2>Create a post</h2>
                    </div>
                    <Row className="justify-content-md-center ">

                        <Col md={4}>

                            <Form >
                                <br/>

                                <Tabs className="wrap">
              
                                    <Tab className="" eventKey="threadTypePost" title="Post">
                                        {typePost()}
                                    </Tab>
                                    <Tab className="" eventKey="threadTypeLink" title="Link">
                                        {typeLink()}
                                    </Tab>
                                    <Tab className="" eventKey="threadTypeDrafts" title="From Drafts">
                                        {typeDrafts()}
                                    </Tab>

                                </Tabs>

                                <br />
                                <Button href="/talk" variant="" className="btn_createacc" size="lg" type="submit" block>
                                    Post
                                </Button>
                                <Button href="/talk" variant="" className="btn_createacc" size="lg" type="submit" block>
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

function typePost(){
    return(
        <>
            <div className="box2">
                <Form>
                    <Form.Group controlId="Title">
                        <Form.Control required type="text" placeholder="Title" />
                    </Form.Group>

                    <textarea className="box3" rows="5" placeholder="Write your post here."/>
                </Form>
            </div>
        </>
    );
}

function typeLink(){
    return(
        <>
            <div className="box2">
                <Form>
                    <Form.Group controlId="Title">
                        <Form.Control required type="text" placeholder="Title" />
                    </Form.Group>

                    <Form.Group controlId="Link">
                        <Form.Control required type="text" placeholder="Link" />
                    </Form.Group>

                    <Form.Group controlId="Comment">
                        <Form.Control required type="text" placeholder="Comment" />
                    </Form.Group>                  
                </Form>
            </div>
        </>
    );
}

function typeDrafts(){
    return(
        <>
            No drafts saved.
        </>
    );
}

export default createThread;