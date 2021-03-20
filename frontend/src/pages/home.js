import React, {useState} from 'react';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import './pages.scss';

import thumbnail from "../images/thumbnail.png";

import {BiStar} from "react-icons/bi";

const cardbox=[
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0',  title:"Video Title", subtitle:"Generic Small Channel", star:19, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:1,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/gbNwdDWeC9E',  title:"Video Title", subtitle:"Generic Small Channel", star:4, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:15,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/-F3ybIQb6tY',  title:"Video Title", subtitle:"Generic Small Channel", star:0,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:9,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0',  title:"Video Title", subtitle:"Generic Small Channel", star:19, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:1,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/gbNwdDWeC9E',  title:"Video Title", subtitle:"Generic Small Channel", star:4, text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:15,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/-F3ybIQb6tY',  title:"Video Title", subtitle:"Generic Small Channel", star:0,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:9,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:15,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/-F3ybIQb6tY',  title:"Video Title", subtitle:"Generic Small Channel", star:0,text:" Video description, creator, view count, etc..."},
  {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:9,text:" Video description, creator, view count, etc..."},
];
//const vcardboxObj= cardbox.map((cardbox, i)=>({id: i, title:cardbox}));

function Video(props) {
  
    /* const [count, setCount] = useState([]); */
    
    const [isVisible, setIsVisible] = useState(false);
     
    const likeVideo = (cards,i ) => {
      console.log(cards.star);
      (isVisible) ?(cards.star -= 1):(cards.star += 1);
      /* (isVisible) ? setCount(count - 1): setCount(count + 1); */
      setIsVisible(!isVisible);
    };
    /* function likeVideo(cards,i) {
      console.log(cards.star);
    
    (isVisible) ? setCount(count - 1) : setCount(count + 1);
    setIsVisible(!isVisible);
    
  } */
  
  return (
    <>
      {props.cardbox.map((cards, i) => (
        
        <Card className="home-card-box " key={i} style={{minWidth: '18rem',  flexGrow: 1}} >
            <Card.Img variant="top" src={thumbnail} />
         {/* <div style={ {borderRadius: 9  }} className="embed-responsive embed-responsive-16by9">
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
            <Button className="star-btn" variant="" onClick={() => likeVideo(cards, i) }>
              <BiStar className="star" color="gold" size= "2em"  />
            </Button>
            {cards.star }
          {/*  {count} */}
         
          </Card.Body>
        </Card>
       
      ))}
    </>
  );
}

function Home() {
  return (
    <>
      <Container fluid>
        <Row>
          <Col>
            <CardDeck>
              <Video cardbox={cardbox} />
            </CardDeck>
          </Col>
        </Row>
      </Container>
      <br />
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
