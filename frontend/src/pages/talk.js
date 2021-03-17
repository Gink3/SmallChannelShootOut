import React from 'react';
import { Button, Card,  Container, Row, Col, Form } from "react-bootstrap";
import "../style/talk.scss";
import {AiOutlinePlus} from "react-icons/ai";

const threadbox=[
    {title:"Thread 1", subtitle:"Posted by User01"},
    {title:"Thread 2", subtitle:"Posted by User12"},   
    {title:"Thread 3", subtitle:"Posted by User23"},    
    {title:"Thread 4", subtitle:"Posted by User34"},    
    {title:"Thread 5", subtitle:"Posted by User45"},
    {title:"Thread 6", subtitle:"Posted by User56"},
    {title:"Thread 7", subtitle:"Posted by User67"},
    {title:"Thread 8", subtitle:"Posted by User78"},
    {title:"Thread 9", subtitle:"Posted by User89"},
    {title:"Thread 10", subtitle:"Posted by User90"},

];

function Thread(props) {  
  return (
    <>
      {props.threadbox.map((cards, i) => (
        
        <Card className="backside" key={i} style={{minWidth: '18rem',  flexGrow: 1}} >
          <Card.Body>

            <Card.Title>{cards.title}</Card.Title>

            <Card.Subtitle className="mb-2 text-muted">
              {cards.subtitle}
            </Card.Subtitle>        

            {/* -- BUTTONS -- 
            <Button variant="primary">Comments</Button>
            <Button variant="primary">Share</Button>
            <Button variant="primary">Save</Button>
            <Button variant="primary">...</Button>
            */}

          </Card.Body>
        </Card>
       
      ))}
    </>
  );
}

function talk(){
    return(
        <>    
            <Button style={{marginBottom: "2px", marginTop: "2px"}} variant="" href="/createthread" >
                <AiOutlinePlus color="white" size= "3em" />
                <text className="btn-text">Start a conversation!</text>
            </Button>

            <div style={{borderTop: "4px solid #000 " }}></div>

            <div className="page-manager">
                <Thread threadbox={threadbox} />
            </div>
        </>
    );
}
export default talk;
