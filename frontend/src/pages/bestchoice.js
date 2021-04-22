import React from 'react';
import { Breadcrumb, Container } from 'react-bootstrap';
import {Video} from "../components/video.js";
import axios from "axios"

const cardbox=[
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
];

function bestChoice(){
  axios.get('http://localhost:5000/videoInfo', {
        withCredentials:true
    }).then((response)=>{
      console.log(response.data);
    })

    return(
      <>
        <Container fluid>
          <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
            <a href="/bestchoice" style={{margin: '0px'}}>
              <h2>Playoff Videos</h2>
            </a>
          </div>
          <div style={{borderTop: "4px solid #000 " }}></div>
  
          <br/>  

          <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
            <a href="/bestchoice" style={{margin: '0px'}}>
              <h2>Runner-Up Videos</h2>
            </a>
          </div>
          <div style={{borderTop: "4px solid #000 " }}></div>

          <br/>  
        </Container>
      </>
    );
  }
export default bestChoice;