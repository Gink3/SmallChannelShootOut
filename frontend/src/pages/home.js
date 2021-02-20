import React from 'react';
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown, Button, Card, CardDeck } from "react-bootstrap";
import './pages.scss';
import starIcon from "../images/star-like.svg";
import thumbnail from "../images/thumbnail.png";


const videobox=["First", "Second", "Third", "Fourth", "Fifth","Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh"];
const videoboxObj= videobox.map((videobox, i)=>({id: i, title:videobox}));

function Intro(props) {
  return (
    <section>
      <ul>
        {props.videoboxes.map((videobox) => (

          <li key={videobox.id}>{videobox.title}

          <button className="like">
          <img src={starIcon} alt="star icon" width="30px" className="like-icon"/>
            </button>

          </li>
        ))}
      </ul>
    </section>
  );
}

function home(){
    return(
        <>

            {/* 
            TYLER'S CARDDECK CODE
            
            Trending!

            Deck of 'Trending' Cards 
            <CardDeck>

                Card 1
                <Card>
                    <Card.Img variant="top" src={thumbnail} />
                    <Card.Body>
                        <Card.Title>Video 1 Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Generic Small Channel</Card.Subtitle>
                        <Card.Text>
                            Video description, creator, view count, etc...
                        </Card.Text>
                        <Button variant="primary">Vote Here</Button>
                    </Card.Body>
                </Card>

                Card 2 
                <Card>
                    <Card.Img variant="top" src={thumbnail} />
                    <Card.Body>
                        <Card.Title>Video 2 Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Generic Small Channel</Card.Subtitle>
                        <Card.Text>
                            Video description, creator, view count, etc...
                        </Card.Text>
                        <Button variant="primary">Vote Here</Button>
                    </Card.Body>
                </Card>

                Card 3 
                <Card>
                    <Card.Img variant="top" src={thumbnail} />
                    <Card.Body>
                        <Card.Title>Video 3 Title</Card.Title>
                        <Card.Subtitle className="mb-2 text-muted">Generic Small Channel</Card.Subtitle>
                        <Card.Text>
                            Video description, creator, view count, etc...
                        </Card.Text>
                        <Button variant="primary">Vote Here</Button>
                    </Card.Body>
                </Card>
                </CardDeck>
            
            */}

            <div className="homebox">
            <Intro videoboxes={videoboxObj} />

            </div>
        </>
    );
}
export default home;
