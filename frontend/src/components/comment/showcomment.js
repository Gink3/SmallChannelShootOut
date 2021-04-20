import React, {useState} from 'react';
import './comment.scss'
import { useQuery } from 'react-query';
import { Get } from '../utilities';
import Accordion from 'react-bootstrap/Accordion'
import { Button, Card } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'
import Addreply from './addreply';
import Showreply from './showreply';
import {MdExpandMore} from 'react-icons/md';

const ShowComment=({postId})=>{
var commentCount=0;
    const {isLoading, error, data} = useQuery("commentList",() =>{
        return Get("http://localhost:3009/comments");
    });

    if (isLoading){
        return <div><Spinner animation="grow" /></div>;
    }
    if(error){
        return <div>Something went wrong :(</div>
    }
    return (
      <>
                 

        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
              <Accordion.Toggle as={Button} className="btn-showcomments" variant="" eventKey="1" style={{ fontWeight: "bold", fontSize: "1rem",color: 'black' }}>
              {data.data.map((c) => {
                 if (postId == c.postId){
                  commentCount=commentCount+1;
                 } 
              })}
             
              ({commentCount}) Comment{commentCount > 1 ? "s" : ""} <MdExpandMore/>

              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              {(commentCount == 0)&&
                  (<div>No comments yet!   Be the first to comment!</div>)
              }
              {data.data.map((commentListing) => {
                
                if (postId == commentListing.postId){
                  
          return (
            <div key={commentListing.id}>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundColor: "whitesmoke",
                  marginLeft: "5px",
                  marginTop: "5px",
                  padding: ".5rem"
                }}
                key={commentListing.id}
              >
                <div style={{ fontWeight: "bold" }}>{commentListing.author}: </div>
                {commentListing.comment}<br/>
              
                 <Addreply commentId={commentListing.id}/> 
                     
                 <Showreply commentId={commentListing.id}/>
                         
              

               
              </div>
              
            </div>
          );
              }
        })}
                  </Card.Body>
            </Accordion.Collapse>
          </Card>
        </Accordion>
      

        
      </>
    );
};
export default ShowComment;