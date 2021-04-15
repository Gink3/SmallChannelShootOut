import React, {useState} from 'react';
import { Button, Tabs, Tab, Container,  Form, Modal } from "react-bootstrap";
import "../style/createthread.scss";
import axios from 'axios';
import { queryClient } from '../reactQuery';


 function CreateThread(props) {
   const [postThread, setThreadData] = useState({
     link: "No links",
     title: "",
     body: "",
     likes: 0,
     dislike: 0,
     user: "John",
     timestamp: "2 sec ago",
   });

   const formSubmit = (e) => {
     e.preventDefault();
     axios
       .post("http://localhost:3009/posts", postThread)
       .then(() => {
         setThreadData({
           link: "",
           title: "",
           body: "",
           likes: 0,
           dislike: 0,
           user: "John",
           timestamp: "2 sec ago",
         });
         queryClient.refetchQueries(["postList"]);
       })
       .catch((error) => {
         console.log(error);
       });
   };

   return (
     <>
       <Container fluid>
         <Modal
           {...props}
           size="md"
           aria-labelledby="contained-modal-title-vcenter"
           centered
           className="login-design"
         >
           <Modal.Header closeButton>
             <Modal.Title id="contained-modal-title-vcenter">
               Create a Thread{" "}
             </Modal.Title>
           </Modal.Header>

           <Modal.Body style={{ backgroundColor: "#BFBFBF" }}>
             <Form onSubmit={formSubmit} noValidate>
               <br />

               <Tabs className="wrap">
                 <Tab className="" eventKey="threadTypePost" title="Post">
                   <div className="box2">
                     <Form.Group controlId="Title">
                       <Form.Control
                         required
                         type="text"
                         placeholder="Title"
                         value={postThread.title}
                         onChange={(e) =>
                           setThreadData({
                             ...postThread,
                             title: e.target.value,
                           })
                         }
                       />
                     </Form.Group>
                     <textarea
                       className="box3"
                       rows="5"
                       placeholder="Write your post here."
                       value={postThread.body}
                       onChange={(e) =>
                         setThreadData({ ...postThread, body: e.target.value })
                       }
                     />
                   </div>
                 </Tab>
                 <Tab className="" eventKey="threadTypeLink" title="Link">
                   <div className="box2">
                     <Form.Group controlId="Title">
                       <Form.Control required type="text" placeholder="Title" />
                     </Form.Group>

                     <Form.Group controlId="Link">
                       <Form.Control
                         required
                         type="text"
                         placeholder="Link"
                         value={postThread.link}
                         onChange={(e) =>
                           setThreadData({
                             ...postThread,
                             link: e.target.value,
                           })
                         }
                       />
                     </Form.Group>

                     <Form.Group controlId="Comment">
                       <Form.Control
                         required
                         type="text"
                         placeholder="Comment"
                       />
                     </Form.Group>
                   </div>
                 </Tab>
                 <Tab
                   className=""
                   eventKey="threadTypeDrafts"
                   title="From Drafts"
                 >
                   No drafts saved.
                 </Tab>
               </Tabs>

               <br />
               <Button
                 onClick={props.onHide}
                 variant=""
                 className="btn_createacc"
                 size="lg"
                 type="submit"
                 block
               >
                 Post
               </Button>
               <Button
                 variant=""
                 className="btn_createacc"
                 size="lg"
                 type="submit"
                 block
               >
                 Save as Draft
               </Button>
               <br />
             </Form>
           </Modal.Body>
           <Modal.Footer>
             <Button onClick={props.onHide}>Close</Button>
           </Modal.Footer>
         </Modal>
       </Container>
     </>
   );
 }

 export default CreateThread;

/*
function typePost(){
    return(
        <>
            <div className="box2">
                <Form>
                    <Form.Group controlId="Title">
                        <Form.Control required type="text" placeholder="Title" />
                    </Form.Group>

                    <textarea className="box3" rows="5" placeholder="Write your post here."/>
                </Form>
            </div>
        </>
    );
}

function typeLink(){
    return(
        <>
            <div className="box2">
                <Form>
                    <Form.Group controlId="Title">
                        <Form.Control required type="text" placeholder="Title" />
                    </Form.Group>

                    <Form.Group controlId="Link">
                        <Form.Control required type="text" placeholder="Link" />
                    </Form.Group>

                    <Form.Group controlId="Comment">
                        <Form.Control required type="text" placeholder="Comment" />
                    </Form.Group>                  
                </Form>
            </div>
        </>
    );
}

function typeDrafts(){
    return(
        <>
            No drafts saved.
        </>
    );
}
*/