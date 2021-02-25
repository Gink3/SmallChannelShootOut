import React from 'react';
import { Button, Card,  Container, Row, Col, CardColumns } from "react-bootstrap";
import './pages.scss';
import starIcon from "../images/star-like.svg";
import thumbnail from "../images/thumbnail.png";
import {FiStar} from "react-icons/fi";


const cardbox=[
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video 1 Title", subtitle:"Generic Small Channel", text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video 2 Title", subtitle:"Generic Small Channel", text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video 3 Title", subtitle:"Generic Small Channel", text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/gbNwdDWeC9E',  title:"Video 4 Title", subtitle:"Generic Small Channel", text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video 5 Title", subtitle:"Generic Small Channel", text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video 6 Title", subtitle:"Generic Small Channel", text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/-F3ybIQb6tY',  title:"Video 7 Title", subtitle:"Generic Small Channel", text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video 8 Title", subtitle:"Generic Small Channel", text:" Video description, creator, view count, etc..."},


];
//const vcardboxObj= cardbox.map((cardbox, i)=>({id: i, title:cardbox}));


function Video(props) {
  return (
    <section>
      {props.cardbox.map((cards, i) => (
        <Card className="home-card-box" key={i}>
           <Card.Img variant="top" src={thumbnail} />
          {/* <div className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"
              
              src={cards.image}
              allowFullScreen
            ></iframe>
          </div> */}
          <Card.Body>
            <Card.Title>{cards.title}</Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {cards.subtitle}
            </Card.Subtitle>
            <Card.Text>{cards.text}</Card.Text>
            <Button className="star" variant="">
            <FiStar size="2em"/>
             {/*  <img
                src={starIcon}
                alt="star icon"
                width="30px"
                className="star-icon"
              /> */}
            </Button>
          </Card.Body>
        </Card>
      ))}
    </section>
  );
}

function home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <CardColumns>
              <Video cardbox={cardbox} />
            </CardColumns>
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default home;
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