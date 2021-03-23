import React from 'react';
import { Breadcrumb } from 'react-bootstrap';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import '../pages.scss';
import {Video} from "../../components/video.js"

const cardbox=[
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0',  title:"Video Title", subtitle:"Generic Small Channel", star:19, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:1,text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/gbNwdDWeC9E',  title:"Video Title", subtitle:"Generic Small Channel", star:4, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:15,text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0',  title:"Video Title", subtitle:"Generic Small Channel", star:19, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:1,text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/gbNwdDWeC9E',  title:"Video Title", subtitle:"Generic Small Channel", star:4, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:15,text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0',  title:"Video Title", subtitle:"Generic Small Channel", star:19, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:1,text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/gbNwdDWeC9E',  title:"Video Title", subtitle:"Generic Small Channel", star:4, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:15,text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY?rel=0',  title:"Video Title", subtitle:"Generic Small Channel", star:19, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:12, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:1,text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/gbNwdDWeC9E',  title:"Video Title", subtitle:"Generic Small Channel", star:4, text:" Video description, creator, view count, etc..."},
    {image:'https://www.youtube.com/embed/tgbNymZ7vqY',  title:"Video Title", subtitle:"Generic Small Channel", star:15,text:" Video description, creator, view count, etc..."},
  ];

function news(){
    return(            
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/bestchoice">Best Choice</Breadcrumb.Item>
                <Breadcrumb.Item active>News</Breadcrumb.Item>
            </Breadcrumb> 
            
            <Container fluid>
                <Row>
                    <Col>
                        <CardDeck>
                            <Video cardbox={cardbox} />
                        </CardDeck>
                    </Col>
                </Row>
            </Container>
            <br/>
        </>    
    );
}
export default news;