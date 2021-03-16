import React from 'react';
import { Button, Card,  Container, Row, Col, Form } from "react-bootstrap";
import "../style/talk.scss";

function talk(){
    return(
        <>    
            <div style={{ margin: "12px" }}>
                <Button href="/createthread">Start a conversation!</Button>
            </div> 

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
