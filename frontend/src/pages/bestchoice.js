import React from 'react';
import {Video} from "../components/video.js";
import axios from "axios"
import VideoDetail from '../components/videoDetail';
import {AiFillStar} from "react-icons/ai";
import {CardGroup, Card, Button, Image, Tabs, Tab, Form, Row, Col, Container} from "react-bootstrap";

var cardbox=[];

axios.get('http://localhost:5000/videoInfo', {
  withCredentials:true
}).then((response)=>{
  cardbox = response.data
  console.log(cardbox)
}).catch((error) => {
  console.log(error)
})

const BestChoice = () => {
  return(
    <>
      <div className="home1" style={{marginTop: '1em'}}>                  
        <div className="homevideolist" style={{width: '100%'}}>
          <h2 style={{padding: '8px'}}>Most Popular Videos</h2>
          <div style={{borderTop: "4px solid #000 " }}></div>

          <Container fluid>
            <Row>
              <Col>
                <CardGroup>
                  <Video cardbox={cardbox} />
                </CardGroup>
              </Col>
            </Row>
          </Container> 
        </div>
      </div>
    </>
  )
}
export default BestChoice;