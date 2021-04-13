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

  /*
  var array = fetchDataFromYoutube(object.query);
  array.then(function(result){

      var videosPerPage = 50;

      for(var i = 0; i < videosPerPage; i++){
        var card = {
          image: result.items[i].snippet.thumbnails.medium.url,
          title: result.items[i].snippet.title,
          subtitle: result.items[i].snippet.channelTitle,
          videoId: result.items[i].id.videoId,
          channelId: result.items[i].snippet.channelId,
          star: 0
        }

        object.cardbox.push(card);
      }
  })
  */


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
              <Card className="home-card-box-video" style={{marginTop: '12px', minWidth: '18rem', flexGrow: 1}} key={i} >
                <Card.Img variant="top" src={cards.image} />

                {/*  Please do not delete */}
                {/*  <div style={ {borderRadius: 9  }} className="embed-responsive embed-responsive-16by9">
                  <iframe className="embed-responsive-item"
                    src={cards.image}
                    allowFullScreen
                  ></iframe>
                </div>
                */}



                <Card.Body>
                  <Card.Title>{cards.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">{cards.subtitle}</Card.Subtitle>
                  
                  <Button className="star-btn" variant="" onClick={() => likeVideo(cards, i) }>
                    <BiStar className="star" color="gold" size= "2em"  />
                  </Button>

                  {cards.star}
                </Card.Body>
              </Card>
            </a>
          </div>
        ))}
      </CardDeck>
    </>
  );
};
