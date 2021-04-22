import React, { useState } from 'react';
import './comment.scss'
import { useMutation } from 'react-query';
import axios from 'axios'; 
import { Button, Form } from 'react-bootstrap';
import { queryClient } from '../../reactQuery';
const makeReply=({reply, commentId, authorName})=>{
    return axios.post(" http://localhost:5000/reply", {reply, commentId, authorName}, {
      withCredentials:true
     })
};

const Addreply=({commentId})=>{
  const replier="Doe";

    const[reply, setReply]= useState("");
    const[showreply, setShowreply]= useState(false);


    const mutation=useMutation(makeReply);
    const [authorName, setAuthorName] = useState('Doe');

    const onsubmit=(e)=>{
        e.preventDefault();
        setAuthorName(replier);
        
        console.log(authorName);
        console.log(replier);


        mutation.mutate(
            {reply, commentId, authorName},
            {
                onSuccess:()=>{
                    queryClient.refetchQueries(["replyList"]);
                    setShowreply(false);
                },
            }
            );
    setReply("");
   
    

    };

    return(
        <>
         <Button onClick={()=> (showreply)? setShowreply(false):setShowreply(true)} className="reply" variant="">Reply</Button>
                {showreply &&
                          (
            <Form onSubmit={onsubmit} style={{marginLeft:'1rem'}}> 
            <Form.Group>
              <Form.Control
                required
                as="textarea"
                rows={1}
                style={{ borderRadius: "19px" }}
                placeholder="@name "
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
          )}
        </>
    );
    };
export default Addreply;