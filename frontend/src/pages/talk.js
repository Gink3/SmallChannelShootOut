import React from 'react';
import { Button, Card,  Container, Row, Col, Form } from "react-bootstrap";
import "../style/talk.scss";

function talk(){
    return(
        <>
            <Container fluid>
                <div className="d-flex justify-content-center header  " >
                    <h2>  Create your ShootOut Account</h2>
                </div>
                <Row className="justifycontent-md-center ">
                    <Col md={4} >
                <Form>
                    <Form.Group controlId="threadLink">
                        <Form.Control required type="text" className="line" placeholder="Video Link" />
                    </Form.Group>

                    <Form.Group controlId="threadTitle">
                        <Form.Control required type="text" className="line" placeholder="Title" />
                    </Form.Group>

                    <Form.Group controlId="threadBody">
                        <Form.Control required type="text" className="line" placeholder="Body" />
                    </Form.Group>

                    <Button variant="primary" className="btn_createthread" size="lg" type="submit" block>
                        CREATE THREAD
                    </Button>

                </Form>
                </Col>
                </Row>
            </Container>


            <div className="page-manager">
                Talk

                <Card className="backside">
                    <Card.Body>
                        <Card.Text className="text-muted">
                            Posted by User123
                        </Card.Text>

                        <Card.Title>Awesome Thread!</Card.Title>

                        <Button variant="primary">Comments</Button>
                        <Button variant="primary">Share</Button>
                        <Button variant="primary">Save</Button>
                        <Button variant="primary">...</Button>
                    </Card.Body>
                </Card>

                <Card className="backside">
                    <Card.Body>
                        <Card.Text className="text-muted">
                            Posted by User045
                        </Card.Text>

                        <Card.Title>Crazy video by this youtuber</Card.Title>

                        <Button variant="primary">Comments</Button>
                        <Button variant="primary">Share</Button>
                        <Button variant="primary">Save</Button>
                        <Button variant="primary">...</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
export default talk;
