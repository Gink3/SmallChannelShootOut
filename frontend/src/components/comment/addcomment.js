import React, { useState } from 'react';
import { Button, Card,  Form } from "react-bootstrap";
import {useMutation} from 'react-query';
import { queryClient } from '../../reactQuery';
import {Post} from '../utilities';



const makeComment = ({comment, postId, author})=>{
    return Post('http://localhost:3009/comments', {comment, postId, author});
    
};

function AddComment({ postId }) {
  const user="John";

  const [comment, setComment] = useState("");
  const [author, setAuthor] = useState("John");

  const mutation = useMutation(makeComment);

  const onsubmitHandle = (event) => {
    event.preventDefault();
    setAuthor(user);
  
    mutation.mutate(
      { comment, postId, author},
      {
        onSuccess: () => {
          queryClient.refetchQueries(["commentList"]);
        },
      }
    );
    setComment("");
   
    

  };

  return (
    <>
      <hr style={{ borderTop: "4px solid #E5E4E2 ", borderRadius: "15px" }} />

      <Card>
        <Card.Body>
          <Form onSubmit={onsubmitHandle}>
            <Form.Group>
              <Form.Control
                required
                as="textarea"
                rows={1}
                style={{ borderRadius: "19px" }}
                placeholder="Write a comment..."
                onChange={(x) => setComment(x.target.value)}
                value={comment}
              />
            </Form.Group>
            &nbsp; &nbsp;
            <Button
              variant="primary"
              type="submit"
              style={{ borderRadius: "7px" }}
            >
              Comment
            </Button>
          </Form>
          {/* <hr/>
                <Card.Title>Comments</Card.Title> */}
        </Card.Body>
      </Card>
      {/*   </ReactQueryCacheProvider>  */}
    </>
  );
}
export default AddComment;
