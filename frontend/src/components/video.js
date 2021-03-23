import React, {useState} from 'react';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import './pages.scss';

import thumbnail from "../images/thumbnail.png";
import {BiStar} from "react-icons/bi";

//const vcardboxObj= cardbox.map((cardbox, i)=>({id: i, title:cardbox}));

export function Video(props) {
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
        
        <Card className="home-card-box " key={i} style={{marginTop: '12px', minWidth: '18rem',  flexGrow: 1}} >
          <Card.Img variant="top" src={thumbnail} />

          {/* <div style={ {borderRadius: 9  }} className="embed-responsive embed-responsive-16by9">
            <iframe
              className="embed-responsive-item"

              src={cards.image}
              allowFullScreen
            ></iframe>
          </div> */}

          <Card.Body>
            <Card.Title>
              {cards.title}
            </Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              {cards.subtitle}
            </Card.Subtitle>

            <Card.Text>
              {cards.text}
            </Card.Text>

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
};