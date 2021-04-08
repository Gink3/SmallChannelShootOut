import React from 'react';
import {Breadcrumb} from 'react-bootstrap';
import {Container} from "react-bootstrap";
import '../pages.scss';
import {Video} from "../../components/video.js"

const cardbox=[
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
    {title:"Video Title", subtitle:"Generic Small Channel", star:0, text:" Video description, creator, view count, etc..."},
];

function fashion(){
    return(            
        <>
            <Breadcrumb>
                <Breadcrumb.Item href="/bestchoice">Best Choice</Breadcrumb.Item>
                <Breadcrumb.Item active>Fashion and Beauty</Breadcrumb.Item>
            </Breadcrumb> 
            
            <Container fluid>
                <Video cardbox={cardbox} />
            </Container>
            <br/>
        </>    
    );
}
export default fashion;