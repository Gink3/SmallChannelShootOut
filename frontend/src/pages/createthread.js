import React, {useState} from 'react';
import { Button, Tabs, Tab, Card,  Container, Row, Col, Form } from "react-bootstrap";
import "../style/createthread.scss";
import axios from 'axios';



function CreateThread(){
    const[postThread, setThreadData] = useState({
        userName: "",
        link: "", 
        title: "", 
        body: "",
        comments: "",
        likes: 0,
        dislikes: 0,
        
    }); 

    const formSubmit= async (e) => {
        e.preventDefault(); 
        axios.post('http://localhost:5000/talk', postThread).then (function(response){
        if(response.data.Message === "Successful"){
            window.location = '/';
            alert(response.data.Message); //do something when create thread is successful
        }
        else {
            alert(response.data.Message); 
        }
    });
}


    return(            
        <>
            <Container fluid>
                    <div className="d-flex justify-content-center header  ">
                        <h2>Create a post</h2>
                    </div>
                    <Row className="justify-content-md-center ">

                        <Col md={4}>

                            <Form onSubmit={formSubmit}>
                                <br/>

                                <Tabs className="wrap">
              
                                    <Tab className="" eventKey="threadTypePost" title="Post">
                                    <div className="box2">
                                        <Form.Group controlId="Title">
                                            <Form.Control required type="text" placeholder="Title" 
                                            value = {postThread.title} onChange={(e)=> setThreadData({...postThread, title:e.target.value})}/>
                                        </Form.Group>
                                        <textarea className="box3" rows="5" placeholder="Write your post here."
                                        value = {postThread.body} onChange={(e)=> setThreadData({...postThread, body:e.target.value})}/>
                                    </div>
                                    </Tab>
                                    <Tab className="" eventKey="threadTypeLink" title="Link">
                                    <div className="box2">
                                        <Form.Group controlId="Title">
                                            <Form.Control required type="text" placeholder="Title" />
                                        </Form.Group>

                                        <Form.Group controlId="Link">
                                            <Form.Control required type="text" placeholder="Link" 
                                            value = {postThread.link} onChange={(e)=> setThreadData({...postThread, link:e.target.value})}/>
                                        </Form.Group>

                                        <Form.Group controlId="Comment">
                                            <Form.Control required type="text" placeholder="Comment" />
                                        </Form.Group>                  
                                    </div>
                                    </Tab>
                                    <Tab className="" eventKey="threadTypeDrafts" title="From Drafts">
                                        No drafts saved.
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

export default CreateThread;

/*
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
*/