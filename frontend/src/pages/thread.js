import React, {useState} from 'react';
import { Button, Card,  Container, Row, Col, Form, Toast, Spinner } from "react-bootstrap";
import "../style/talk.scss";
import {AiOutlinePlus} from "react-icons/ai";
import {FiThumbsDown, FiThumbsUp} from "react-icons/fi";
import toast from "../images/toast.png";
import AddComment from "../components/comment/addcomment";
import ShowComment from "../components/comment/showcomment";
 /* import AdSense from 'react-adsense';  */
import { useQuery } from 'react-query';
import { Get } from '../components/utilities';

function Thread(){
     const {isLoading, error, data} = useQuery("postList",() =>{
      return Get('http://localhost:3009/posts');
  });
   
   if (isLoading){
    return <div ><Spinner  style={{marginTop:'30%', marginLeft:'50%'}} animation="border" /></div>;
}
if(error){
    return <div>Something went wrong :(</div>
}
    
    return (
      <> 
      {data.data.map((thread)=>{
        return (
        <>
           <Card
            className="backside"
            key={thread.id}
            style={{ minWidth: "18rem", flexGrow: 1 }}
          >
            <Card.Body>
              <Card.Title
                style={{ backgroundColor: "white", borderRadius: "5px" }}
              >
                &nbsp;
                <div className="ml-4">
                  <img src={toast} className="rounded mr-2" />
                  &nbsp;
                  <span>{thread.title}</span>
                  <span> &nbsp; &nbsp; ||&nbsp; {thread.user}</span>
                </div>
                <div
                  className="d-flex justify-content-end mt-sm-6"
                  style={{ marginTop: "9px", color: "#B6B6B4" }}
                >
                  <small>{thread.timestamp}&nbsp;&nbsp;&nbsp;</small>
                </div>
              </Card.Title>
              <div
                style={{ borderTop: "4px solid #E5E4E2 ", borderRadius: "15px" }}
              ></div>
              <br />
              <Card.Subtitle className="mb-2 text-muted"></Card.Subtitle>
              {thread.body}
            
              <hr style={{ height: "2px", color: "#E5E4E2" }} />
              &nbsp;&nbsp;&nbsp;
              <FiThumbsUp className="like-btn" size="1.5em" color="green" />
              &nbsp;
              {thread.likes}
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              
              <FiThumbsDown className="dislike-btn" size="1.5em" color="red" />
              &nbsp;
              {thread.dislike}
             
              &nbsp;&nbsp;&nbsp;
              
             
              
            <AddComment postId={thread.id}/>
          <ShowComment postId={thread.id}/>
            </Card.Body>
          </Card> 
       
          </>);
      })}
        
      </>
    );
  }
  
  export default Thread;