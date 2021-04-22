import React, {useState} from 'react';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import './pages.scss';

import thumbnail from "../images/thumbnail.png";
import playButton from "../images/playbutton.png"
import {BiStar} from "react-icons/bi";

export function Video(object) {
  console.log(object.cardbox)

  const truncate = (str, n) => {
    return (str.length > n) ? str.substr(0, n-3) + '...' : str;
  }

  const [count, setCount] = useState([]);
  const [isVisible, setIsVisible] = useState(false);

  const likeVideo = (cards,i ) => {
    console.log(cards.star);
    (isVisible) ?(cards.star -= 1):(cards.star += 1);
    /* (isVisible) ? setCount(count - 1): setCount(count + 1); */
    setIsVisible(!isVisible);
  };

  /*
  function likeVideo(cards,i) {
  console.log(cards.star);

  (isVisible) ? setCount(count - 1) : setCount(count + 1);
  setIsVisible(!isVisible);
  }
  */

  return (
    <>
      <CardDeck style={{margin: '10px'}}>
        {object.cardbox.map((cards, i) => (
          <div style={{maxWidth: '20%'}}>
            
            <a target="_blank" href={`https://www.youtube.com/watch?v=${cards.videoId}&ab_channel=${cards.channelId}`}>
              <Card className="home-card-box-video" style={{marginTop: '12px', minWidth: '18rem', minHeight: '10rem', flexGrow: 1}} key={i} >
                <Card.Img variant="top" src={cards.image} />

               
                <Card.Body>
                  <Card.Title>{truncate(cards.videoTitle, 50)}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{cards.channelTitle}</Card.Subtitle>
                  
                  <Button className="star-btn" variant="" onClick={() => likeVideo(cards, i) }>
                    <BiStar className="star" color="gold" size= "2em"  />
                  </Button>

                  {cards.votes}
                </Card.Body>
              </Card>
            </a>
          </div>
        ))}
      </CardDeck>
    </>
  );
};
