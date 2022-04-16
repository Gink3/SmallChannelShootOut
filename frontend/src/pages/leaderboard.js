import React from 'react';
import './pages.scss';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import thumbnail from "../images/thumbnail.png";
import axios from "axios"

import goldpillar from "../images/GoldPillar.png";
import silverpillar from "../images/SilverPillar.png";
import bronzepillar from "../images/BronzePillar.png";

import {Video} from "../components/video.js";

var cardbox=[];
  
axios.get('http://localhost:5000/videoInfo', {
  withCredentials:true
}).then((response)=>{
  cardbox = response.data
  console.log(cardbox)
}).catch((error) => {
  console.log(error)
})

function leaderboard(){
  return(
    <>
      {/* <div class="row"> */}
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="silver">
            {/*silver*/}
            <div className="column" style={{maxWidth: '640px', marginLeft: '15%'}}>
              <Card className="home-card-box" style={{marginLeft: '15%', minWidth: '180%', maxWidth: '190%',  flexGrow: 1}} >
               <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>Silver Medal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Channel</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
              <div style={{marginLeft: '7%'}}>
              </div>
           </div>
          </div> 

        </Col>
   {/*    </Row> */}

     {/*  <Row className="justify-content-center"> */}
        <Col md={6}>
          <div className="gold">
            {/*gold*/}
            <div className="column" style={{maxWidth: '640px', marginLeft: '15%'}}>
              <Card className="home-card-box" style={{marginLeft: '14%', minWidth: '180%', maxWidth: '170%',  flexGrow: 1}} >
                <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>Gold Medal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Channel</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
              <div style={{marginLeft: '7%'}}>
              </div>
            </div>
          </div> 
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md={6}>
        <div className="bronze">
         {/*bronze*/}
         <div className="column" style={{maxWidth: '640px', marginLeft: '15%'}}>
              <Card className="home-card-box" style={{marginLeft: '8%', minWidth: '190%', maxWidth: '190%', flexGrow: 1}} >
               <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>Bronze Medal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Channel</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
              <div style={{marginLeft: '2%'}}>
              </div>
          </div> 
        </div>

        {/* <div style={{borderTop: "4px solid #000 " }}></div> */}

        </Col>
      </Row>
    </>
  );
}
export default leaderboard;