import React from 'react';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import thumbnail from "../images/thumbnail.png";
console.log("YES");

function VideoTemplate() {
    console.log("YES");
    return (
      <>
            <Card className="home-card-box-video" style={{marginTop: '12px', minWidth: '18rem',  flexGrow: 1}} >               
                <Card.Img variant="top" src={thumbnail} />
               {/*  Please do not delete */}
                {/* <div style={ {borderRadius: 9  }} className="embed-responsive embed-responsive-16by9">
                   <iframe className="embed-responsive-item"
                 src={cards.image}
              allowFullScreen
            ></iframe>
          </div>  */}
                  <Card.ImgOverlay>
                    <Card.Title>
                        
                        </Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">
                        </Card.Subtitle>
                  </Card.ImgOverlay>


                </Card>      
                </>
    );
};
export default VideoTemplate;
