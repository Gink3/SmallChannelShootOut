import React from 'react';
import './comment.scss'
import { useQuery } from 'react-query';
import { Get } from '../utilities';
import Accordion from 'react-bootstrap/Accordion'
import { Button, Card } from "react-bootstrap";
import Spinner from 'react-bootstrap/Spinner'

const Showreply=({commentId})=>{
    const {isLoading, error, data} = useQuery("replyList",() =>{
        return Get("http://localhost:3009/replys");
    });

    if (isLoading){
        return <div><Spinner animation="grow" /></div>;
    }
    if(error){
        return <div>Something went wrong :(</div>
    }
    return(
        <>
        {data.data.map((replying)=>{
            if(commentId == replying.commentId)
            {
            return(
                <>
                <div key={replying.id}>
              <div
                style={{
                  borderRadius: "5px",
                  backgroundColor: 'burlywood',
                  marginLeft: "2rem",
                  marginTop: "5px",
                  padding: ".5rem",
                }}
                key={replying.id}
              >
                <div style={{ fontWeight: "bold" }}>John: </div>
                {replying.reply}<br></br>
                {/* <Button className="reply" variant="">Reply</Button> */}
              

               
              </div>
              
            </div>
               {/*  <div key={replying.id}>
                    {replying.reply}
                </div> */}
                </>
            );
            }
        })
        }

        </>
    );
};
export default Showreply;
