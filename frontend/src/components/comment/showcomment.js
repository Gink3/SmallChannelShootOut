import React from 'react';
import './comment.scss'
import { useQuery } from 'react-query';
import { Get } from '../utilities';
import Accordion from 'react-bootstrap/Accordion'
import { Button, Card } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'

const ShowComment=({postId})=>{
var count=0;
/* console.log(postId); */
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
              <Accordion.Toggle as={Button} className="btn-showcomments" variant="" eventKey="1" style={{ fontWeight: "bold", fontSize: "1.5rem",color: 'black' }}>
              {data.data.map((c) => {
                 if (postId == c.postId){
                  count=count+1;
                 } 
              })}
             
              ({count}) Comment(s)

              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="1">
              <Card.Body>
              {(count == 0)&&
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
                  padding: ".5rem",
                }}
                key={commentListing.id}
              >
                <div style={{ fontWeight: "bold" }}>John: </div>
                {commentListing.comment}
               
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