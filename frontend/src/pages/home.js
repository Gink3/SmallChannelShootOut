import React from 'react';
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown, Button, Card, CardDeck } from "react-bootstrap";
import thumbnail from "../images/thumbnail.png";

function home(){
    return(
        <>
        Trending!

        {/* Deck of 'Trending' Cards */}
        <CardDeck>

            {/* Card 1 */}
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

            {/* Card 2 */}
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

            {/* Card 3 */}
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

        </>
    );
}
export default home;