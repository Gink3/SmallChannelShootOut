import React from 'react';
import { Button, Card,  Container, Row, Col, CardColumns } from "react-bootstrap";
import "../style/talk.scss";

function talk(){
    return(            
        <>

            <div>
                <Card>
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

                <Card>
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