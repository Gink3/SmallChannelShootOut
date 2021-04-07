import React, { useState } from 'react';
import { Button, Card,  Form } from "react-bootstrap";
//import {useMutation} from 'react-query';

/* const makeComment = ({comment, postId})=>{
    return Post("http://localhost(add the API).", {comment, postId});
}; */

function AddComment(){ 

    const onsubmitHandle =(event) => {
        event.preventDefault();
        console.log("Checking comment...")

       /*  mutate({comment}); */

    }; 
    const [comment, setComment] = useState('');

  /* const [mutate] = useMutation(makeComment); */
    return (
      <>
        <hr style={{ borderTop: "4px solid #E5E4E2 ", borderRadius: "15px" }} />

        <Card>
          <Card.Body>
            <Form onSubmit={onsubmitHandle}>
              <Form.Group>
                <Form.Control
                  as="textarea"
                  rows={1}
                  placeholder="Write a comment..."
                  onChange={(x) => setComment(x.target.value)}
                  value={comment}
                />
              </Form.Group>
              <Button
                variant="primary"
                type="submit"
                /* onClick={(event) => {
                  handleCommentSubmit(comment);
                  setComment("");
                }} */
              >
                Submit comment
              </Button>
            </Form>
            {/* <hr/>
                <Card.Title>Comments</Card.Title> */}
          </Card.Body>
        </Card>
      </>
    );
}
export default AddComment;
