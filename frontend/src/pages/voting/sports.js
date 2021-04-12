import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import '../pages.scss';
import {Video} from "../../components/video.js"

const cardbox=[
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
];

function sports(){
    return(            
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/bestchoice">Best Choice</Breadcrumb.Item>
                <Breadcrumb.Item active>Sports</Breadcrumb.Item>
            </Breadcrumb> 
            
            <Container fluid>
                <Video cardbox={cardbox} />
            </Container>
            <br/>
        </>    
    );
}
export default sports;