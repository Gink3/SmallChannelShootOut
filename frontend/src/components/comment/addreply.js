import React, { useState } from 'react';
import './comment.scss'
import { useMutation } from 'react-query';
import { Post } from '../utilities';
import { Button, Form } from 'react-bootstrap';
import { queryClient } from '../../reactQuery';
const makeReply=({reply, commentId})=>{
    return Post (" http://localhost:3009/replys", {reply, commentId});
};

const Addreply=({commentId})=>{
    const[reply, setReply]= useState("");
    const mutation=useMutation(makeReply);
    const onsubmit=(e)=>{
        e.preventDefault();
        mutation.mutate(
            {reply, commentId},
            {
                onSuccess:()=>{
                    queryClient.refetchQueries(["replyList"]);
                },
            }
            );
    setReply("");
    };

    return(
        <>
            <Form onSubmit={onsubmit} style={{marginLeft:'1rem'}}> 
            <Form.Group>
              <Form.Control
                required
                as="textarea"
                rows={1}
                style={{ borderRadius: "19px" }}
                placeholder="Write a comment..."
                onChange={(x) => setReply(x.target.value)}
                value={reply}
              />
            </Form.Group>
            &nbsp; &nbsp;
            <Button
              variant="primary"
              type="submit"
              style={{ borderRadius: "7px" }}
            >
              REPLY
            </Button>
          </Form>
        </>
    );
    };
export default Addreply;