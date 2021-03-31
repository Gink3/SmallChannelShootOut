import React from 'react';
import './pages.scss';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import thumbnail from "../images/thumbnail.png";
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
         {/*gold*/}
         <div style={{maxWidth: '640px', marginLeft: '37%'}}>
              <Card className="home-card-box" style={{marginTop: '10px', minWidth: '80%', maxWidth: '80%',  flexGrow: 1}} >               
               <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>Gold Medal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Channel</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
          </div>
 
         {/*silver*/}
         <div style={{maxWidth: '640px', marginLeft: '4%'}}>
              <Card className="home-card-box" style={{marginTop: '10px', minWidth: '80%', maxWidth: '80%',  flexGrow: 1}} >               
               <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>Silver Medal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Channel</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
          </div>
  
         {/*bronze*/}
         <div style={{maxWidth: '640px', marginLeft: '71%'}}>
              <Card className="home-card-box" style={{marginTop: '10px', minWidth: '80%', maxWidth: '80%', flexGrow: 1}} >               
               <Card.Img variant="top" src={thumbnail} />
                <Card.ImgOverlay>
                  <Card.Title>Bronze Medal</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">Channel</Card.Subtitle>
                </Card.ImgOverlay>
              </Card>
          </div>
         <br></br>  <br></br>  
         <br></br>  <br></br> 
        </>    
    );
}
export default about;