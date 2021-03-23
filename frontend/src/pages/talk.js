import React from 'react';
import { Button, Card,  Container, Row, Col, Form, Toast } from "react-bootstrap";
import "../style/talk.scss";
import {AiOutlinePlus} from "react-icons/ai";
import toast from "../images/toast.png";

const threadbox=[
    {title:"Thread 1", user:"User01", timestamp:"just now"},
    {title:"Thread 2", user:"User12", timestamp:"just now"},  
    {title:"Thread 3", user:"User23", timestamp:"just now"},    
    {title:"Thread 4", user:"User34", timestamp:"2 min ago"},    
    {title:"Thread 5", user:"User45", timestamp:"2 min ago"},
    {title:"Thread 6", user:"User56", timestamp:"3 min ago"},
    {title:"Thread 7", user:"User67", timestamp:"4 min ago"},
    {title:"Thread 8", user:"User78", timestamp:"10 min ago"},
    {title:"Thread 9", user:"User89", timestamp:"45 min ago"},
    {title:"Thread 10", user:"User90", timestamp:"1 hr ago"},
];

function Thread(props) {  
  return (
    <>
      {props.threadbox.map((cards, i) => (
      
        <Toast className="backside">
          <Toast.Header>
            {/*Profile Picture*/}
            <img src={toast} className="rounded mr-2" alt="" />

            {/*Username*/}
            <strong className="mr-auto">
              {cards.user}
            </strong>

            {/*Timestamp*/}
            <small>
              {cards.timestamp}
            </small>
          </Toast.Header>

          {/*Message*/}
          <Toast.Body>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure 
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non 
            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.          
          </Toast.Body>
        </Toast>
       
      ))}
    </>
  );
}

function talk(){
  return(
    <>    
      <Container fluid>
        <br/>

        <Button className="plus"/*  style={{ marginBottom: "2px", marginTop: "2px",  color:'white', fontSize: '20px'}} */ variant="" href="/createthread"  >
          <AiOutlinePlus size="3em"/>Create a thread!
        </Button>

        <br/><br/>

        <div style={{borderTop: "4px solid #000 " }}></div>
        <br/>

        <div className="toast-container">        
          <Thread threadbox={threadbox} />
        </div>

      </Container>
    </>
  );
}
export default talk;
