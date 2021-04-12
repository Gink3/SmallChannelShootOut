import React from 'react';
import './pages.scss';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import thumbnail from "../images/thumbnail.png";

import goldpillar from "../images/GoldPillar.png";
import silverpillar from "../images/SilverPillar.png";
import bronzepillar from "../images/BronzePillar.png";

import {Video} from "../components/video.js";

const cardbox=[
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0',title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
  ];

  const cardbox1=[
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
  ];
  

function about(){
  return(
    <>
      {/* <div class="row"> */}
      <Row className="justify-content-center">
        <Col md={6}>
          <div className="silver">
            {/*silver*/}
            <div className="column" style={{maxWidth: '640px', marginLeft: '15%', marginTop: '22.4%'}}>
              <Card className="home-card-box" style={{marginTop: '10px', marginLeft: '15%', minWidth: '180%', maxWidth: '190%',  flexGrow: 1}} >
               <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>Silver Medal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Channel</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
              <div style={{marginLeft: '7%'}}>
              <img src={silverpillar} style={{borderBottom: "5px solid black", marginTop: '10px', marginLeft: '10%', minWidth: '190%', maxWidth: '190%',  flexGrow: 1}}  />
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
              <Card className="home-card-box" style={{marginTop: '29px', marginLeft: '14%', minWidth: '180%', maxWidth: '170%',  flexGrow: 1}} >
                <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>Gold Medal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Channel</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
              <div style={{marginLeft: '7%'}}>
              <img src={goldpillar} style={{borderBottom: "5px solid black", marginTop: '10px', marginLeft: '9%', minWidth: '190%', maxWidth: '190%',  flexGrow: 1}}  className="img-fluid"/>
              </div>
            </div>
          </div> 
        </Col>
      </Row>
      
      <Row className="justify-content-center">
        <Col md={6}>
        <div className="bronze">
         {/*bronze*/}
         <div className="column" style={{maxWidth: '640px', marginLeft: '15%', marginTop: '6%'}}>
              <Card className="home-card-box" style={{marginTop: '10px', marginLeft: '8%', minWidth: '190%', maxWidth: '190%', flexGrow: 1}} >
               <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>Bronze Medal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Channel</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
              <div style={{marginLeft: '2%'}}>
              <img src={bronzepillar} style={{borderBottom: "5px solid black", marginTop: '7px', marginLeft: '8%', minWidth: '190%', maxWidth: '190%',  flexGrow: 1}} height="341px" width="433px"/>
              </div>
          </div> 
        </div>

        {/* <div style={{borderTop: "4px solid #000 " }}></div> */}

        </Col>
      </Row>
    </>
  );
}
export default about;