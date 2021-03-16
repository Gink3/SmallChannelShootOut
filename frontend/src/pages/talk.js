import React from 'react';
import { Button, Card,  Container, Row, Col, Form } from "react-bootstrap";
import "../style/talk.scss";
import {AiOutlinePlus} from "react-icons/ai";


function talk(){
    return(
        <>    
            <Button variant="" href="/createthread" >
                <AiOutlinePlus color="white" size= "3em"  />
                <text className="btn-text">Start a conversation!</text>
            </Button>

            <div style={{ borderTop: "4px solid #000 " }}></div>

            <div className="page-manager">
                <Card className="backside">
                    <Card.Body>
                        <Card.Text className="text-muted">
                            Posted by User123
                        </Card.Text>

                        <Card.Title>Awesome Thread!</Card.Title>

                        <Button variant="primary">Comments</Button>
                        <Button variant="primary">Share</Button>
                        <Button variant="primary">Save</Button>
                        <Button variant="primary">...</Button>
                    </Card.Body>
                </Card>

                <Card className="backside">
                    <Card.Body>
                        <Card.Text className="text-muted">
                            Posted by User045
                        </Card.Text>

                        <Card.Title>Crazy video by this youtuber</Card.Title>

                        <Button variant="primary">Comments</Button>
                        <Button variant="primary">Share</Button>
                        <Button variant="primary">Save</Button>
                        <Button variant="primary">...</Button>
                    </Card.Body>
                </Card>
            </div>
        </>
    );
}
export default talk;
