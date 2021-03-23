import React, {useState} from 'react';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import './pages.scss';

import thumbnail from "../images/thumbnail.png";
import {BiStar} from "react-icons/bi";

import Carousel from 'react-bootstrap/Carousel'

const turns = ["1", "2", "3"];

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
      <Carousel interval={null}>

      {/* loops "turns" number of times. the number is equal to how many elements are within 'turns' */}
      {turns.map(turn => (

        <Carousel.Item>
          <CardDeck style={{margin: '10px'}}>
            {props.cardbox.map((cards, i) => (

              <Card className="home-card-box" key={i} style={{marginTop: '12px', minWidth: '18rem',  flexGrow: 1}} >                <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>{cards.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{cards.subtitle}</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>

            ))}
          </CardDeck>
        </Carousel.Item>

      ))}
      </Carousel>
    </>
  );
};