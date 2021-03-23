import React, {useState} from 'react';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import './pages.scss';

import thumbnail from "../images/thumbnail.png";

import {BiStar} from "react-icons/bi";
import {Video} from "../components/video.js"

const cardbox=[
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0',  title:"Video Title", subtitle:"Generic Small Channel", star:19, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:1,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/gbNwdDWeC9E',  title:"Video Title", subtitle:"Generic Small Channel", star:4, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:15,text:" Video description, creator, view count, etc..."},
];

const cardbox3=[
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0',  title:"Video Title", subtitle:"Generic Small Channel", star:19, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:1,text:" Video description, creator, view count, etc..."},
];

function Home() {
  return (
    <>
      <Container fluid>
        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/bestchoice"> 
            <h2>Trending</h2>
          </a>        
        </div>  

        <Row>
          <Col>
            <CardDeck>
              <Video cardbox={cardbox3} />
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <br/>

      <Container fluid>
        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/voting/sports"> 
            <h2>Sports</h2>
          </a>
        </div>       

        <Row>
          <Col>
            <CardDeck>
              <Video cardbox={cardbox} />
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <br/>

      <Container fluid>
        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/voting/gaming"> 
            <h2>Gaming</h2>
          </a>          
        </div>

        <Row>
          <Col>
            <CardDeck>
              <Video cardbox={cardbox} />
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <br/>

      <Container fluid>
        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/voting/fashion"> 
            <h2>Fashion and Beauty</h2>
          </a>          
        </div>  

        <Row>
          <Col>
            <CardDeck>
              <Video cardbox={cardbox} />
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <br/>

      <Container fluid>
        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/voting/news"> 
            <h2>News</h2>
          </a>          
        </div>  

        <Row>
          <Col>
            <CardDeck>
              <Video cardbox={cardbox} />
            </CardDeck>
          </Col>
        </Row>
      </Container>

      <br/>
    </>
  );
}
export default Home;
///////////////////////////////Do not delete :)

/*<div className="homebox">
            <Intro videoboxes={videoboxObj} />

            </div>
const videobox=["First", "Second", "Third", "Fourth", "Fifth","Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh"];
const videoboxObj= videobox.map((videobox, i)=>({id: i, title:videobox}));
function Intro(props) {
  return (
    <section>
      <ul>
        {props.videoboxes.map((videobox) => (

          <li key={videobox.id}>{videobox.title}

          <button className="like">
          <img src={starIcon} alt="star icon" width="30px" className="like-icon"/>
            </button>

          </li>
        ))}
      </ul>
    </section>
  );
} */
