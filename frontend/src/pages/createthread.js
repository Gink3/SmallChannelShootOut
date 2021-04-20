import React, {useState} from 'react';
import { Button, Tabs, Tab, Container,  Form, Modal } from "react-bootstrap";
import "../style/createthread.scss";
import axios from 'axios';
import { queryClient } from '../reactQuery';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 function CreateThread(props) {
   
     const [postThread, setThreadData] = useState({
     userName:"John",
     link: "",
     title: "",
     body: "",
     likes: 0,
     isLiked:[],
     dislike: 0,
     timestamp: "",
   });

   const formSubmit = async(e) => {
     e.preventDefault();
    if (postThread.link!="" && postThread.title!="" && postThread.body!="" ){
     var regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;
    var match = postThread.link.match(regExp);
    
   setThreadData(postThread.link=match[2]);
        /* if (match && match[2].length == 11) {
        return match[2];
    } else {
        return 'error';
    }*/

    /* Backup API: "http://localhost:3009/posts" */
   

    var today = new Date();
    setThreadData(postThread.timestamp=today);
     axios.post("http://localhost:5000/talk", postThread, {
      withCredentials:true
     })
     
       .then(() => {
         setThreadData({
           userName:"John",
           link: "",
           title: "",
           body: "",
           likes: 0,
           isLiked:[],
           dislike: 0,
           timestamp: "",
         });
         toast.success("Post created Sucessfully!");
         queryClient.refetchQueries(["postList"]);
       })
       .catch((error) => {
         
         console.log(error);
       });
   }
   else
   {
    toast.error("Error: All feild must be filled!");

   }
}


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
                     <Form.Group>
              <Form.Control
                required
                as="textarea"
                rows={7}
                
                placeholder="Write your post here."
                value={postThread.body}
                onChange={(e) =>
                  setThreadData({ ...postThread, body: e.target.value })
                }
              />
            </Form.Group>
                    
                     <Form.Group controlId="Link">
                       <Form.Control
                        
                         type="text"
                         placeholder="Youtube link .."
                         value={postThread.link}
                         onChange={(e) =>
                           setThreadData({
                             ...postThread,
                             link: e.target.value,
                           })
                         }
                       />
                     </Form.Group>
                   </div>
                 </Tab>
                {/*  <Tab className="" eventKey="threadTypeLink" title="Link">
                   <div className="box2"> */}
                     {/* <Form.Group controlId="Title">
                       <Form.Control required type="text" placeholder="Title" />
                     </Form.Group> */}

                     {/* <Form.Group controlId="Link">
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
                     </Form.Group> */}

                    {/*  <Form.Group controlId="Comment">
                       <Form.Control
                         required
                         type="text"
                         placeholder="Comment"
                       />
                     </Form.Group> */}
                {/*    </div> */}
                {/*  </Tab> */}
                 {/* <Tab
                   className=""
                   eventKey="threadTypeDrafts"
                   title="From Drafts"
                 >
                   No drafts saved.
                 </Tab> */}
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
              {/*  <Button
                 variant=""
                 className="btn_createacc"
                 size="lg"
                 type="submit"
                 block
               >
                 Save as Draft
               </Button> */}
            
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