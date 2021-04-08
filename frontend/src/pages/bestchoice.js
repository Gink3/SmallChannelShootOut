import React from 'react';
import {Container } from 'react-bootstrap';

const cardbox=[
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
];

function bestChoice(){
    return(
      <>
        <Container fluid>
          <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
            <a href="/bestchoice" style={{margin: '0px'}}>
              <h2>Playoff Videos</h2>
            </a>
          </div>
          <div style={{borderTop: "4px solid #000 " }}></div>
          {/*<Video cardbox={cardbox} />*/}
  
          <br/>  

          <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
            <a href="/bestchoice" style={{margin: '0px'}}>
              <h2>Runner-Up Videos</h2>
            </a>
          </div>
          <div style={{borderTop: "4px solid #000 " }}></div>
           {/*<Video cardbox={cardbox} />
          <Video cardbox={cardbox} />
          <Video cardbox={cardbox} />*/}

          <br/>  
        </Container>
      </>
    );
  }
export default bestChoice;