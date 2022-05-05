
//This component file is not implemented on a page yet
//The purpose of this file is to make a form for users to submit video links
//The form currently asks the user for all the video info
//This file will need to be implemented as a component for it to work


import React, {useState, useContext} from 'react';
import AuthContext from "../context/authcontext.js"
import {Button, Form, Row, Col, Container} from "react-bootstrap";
import "../style/signup.scss";
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function VideoSubForm(){
    const history = useHistory(); 
    const {loggedIn} = useContext(AuthContext);
    const[postVideo, setVideoData] = useState({
        _id: "",  
        videoId: "",
        videoTitle: "", 
        channelTitle: "",       //this is all the fields of data that are stored for videos
        votes: "", 
        videoThumbnail: "", 
        videoPublishDate: "", 
        _v: "",
    }); 

    const handleSubmit = event => {
        event.preventDefault(); 

        console.log("Handled submit");

        axios.post('http://localhost:5000/', postVideo, {     //need to add route since component
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
    // postVideo obj to later send
    const handleChange = (event) => {
        console.log(event);
        setVideoData({
            ...postVideo,
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
                        <h2  style={{color:'white'}}>  Submit your video </h2>
                         </div>
                            <Form onSubmit={handleSubmit}>
                                <br />
                                <Form.Group controlId="_id">

                                    <Form.Control required type="text" name="_id" className="input line" placeholder="ID" 
                                    value={postVideo._id} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="videoId">

                                    <Form.Control required type="text" name="videoId" className="line" placeholder="Video ID" 
                                    value={postVideo.videoId} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="videoTitle">

                                    <Form.Control required type="text" name="videoTitle" className="line" placeholder="Video Title" 
                                    value={postVideo.videoTitle} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="channelTitle">

                                    <Form.Control required type="text" name="channelTitle" className="line" placeholder="Channel Title" 
                                    value={postVideo.channelTitle} onChange={handleChange}/>
                                </Form.Group>

                                <Form.Group controlId="votes">
                                    <Form.Control required type="text" name="votes" className="line" placeholder="Votes"
                                     value={postVideo.votes} onChange={handleChange}/>
                                </Form.Group>


                                <Form.Group controlId="videoThumbnail">
                                    <Form.Control required type="text" name="videoThumbnail" className="line" placeholder="Video Thumbnail"
                                     value = {postVideo.videoThumbnail} onChange={handleChange}/>
                                </Form.Group>


                                <Form.Group controlId="videoPublishDate">
                                    <Form.Control required type="text" name="videoPublishDate" className="line" placeholder="Publish Date"
                                     value = {postVideo.videoPublishDate} onChange={handleChange}/>
                                </Form.Group>


                                <Form.Group controlId="_v">
                                    <Form.Control required type="text" name="_v" className="line" placeholder="V"
                                     value = {postVideo._v} onChange={handleChange}/>
                                </Form.Group>




                                <br />
                                <Button variant="" className="btn_createacc" size="lg" type="submit" block>
                                    Submit Video
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

export default VideoSubForm; 