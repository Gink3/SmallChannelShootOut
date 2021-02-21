import React from 'react';
import accountIcon from "../images/account-icon.png";
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown, Button, Card, CardDeck, Image, Tabs, Tab, Form, Row, Col} from "react-bootstrap";
import thumbnail from "../images/thumbnail.png";

{/* First things a user sees 
    when they click onto the 
    "Account" page. */}

function account(){
    return(            
        <>
        <Image src={accountIcon} roundedCircle height="180px" width="171px"/>

        Firstname Lastname, Insert stats about user. EX: how many videos voted on, liked, date since joined, etc...
        
        <Tabs>
            <Tab eventKey="likedVideos" title="Liked Videos">
                Liked videos go here.
            </Tab>

            <Tab eventKey="votedVideos" title="Previously Voted For">
                Previously voted on videos go here.
            </Tab>

            <Tab eventKey="editInfo" title="Edit Information">
                <Tabs>
                    <Tab eventKey="currentInfo" title="Current Information">
                        {showCurrentInfo()}
                    </Tab>
                    <Tab eventKey="changeEmail" title="Change E-Mail">
                        {changeEmail()}
                    </Tab>
                    <Tab eventKey="changePassword" title="Change Password">
                        {changePassword()}
                    </Tab>
                    <Tab eventKey="changeUsername" title="Change Username">
                        {changeUsername()}
                    </Tab>
                    <Tab eventKey="changeProfilePic" title="Change Profile Picture">
                        {changeProfilePic()}
                    </Tab>
                </Tabs>
            </Tab>
        </Tabs>        

        </>    
    );
}

{/* Current Information Tab */}
function showCurrentInfo(){
    return(
        <>
            <Form>
                <Form.Group as={Row} controlId="formPlaintextEmail">
                
                {/* Current Username */}
                <Form.Label column sm="2">
                    Username
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="exampleUser123" />
                </Col>

                {/* Current Email */}
                <Form.Label column sm="2">
                    Email
                </Form.Label>

                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="email@example.com" />
                </Col>

                {/* Current Password */}
                <Form.Label column sm="2">
                    Password
                </Form.Label>
                <Col sm="10">
                    <Form.Control plaintext readOnly defaultValue="password123" />
                </Col>

                </Form.Group>
            </Form>
        </>
    );
}

{/* Change Email Tab */}
function changeEmail(){
    return(
        <>
            <Form>
            <Form.Group controlId="formChangeEmail">
                <Form.Label>Current Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter current email" />
            </Form.Group>

            <Form.Group controlId="formNewEmail">
                <Form.Label>New Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter new email" />
            </Form.Group>

            <Form.Group controlId="formNewEmail">
                <Form.Label>Re-enter New Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter new email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </>
    );
}

{/* Change Password Tab */}
function changePassword(){
    return(
        <>
            <Form>
            <Form.Group controlId="formChangePassword">
                <Form.Label>Current Password</Form.Label>
                <Form.Control type="password" placeholder="Enter current Password" />
            </Form.Group>

            <Form.Group controlId="formNewPassword">
                <Form.Label>New Password</Form.Label>
                <Form.Control type="password" placeholder="Enter new Password" />
            </Form.Group>

            <Form.Group controlId="formNewPassword">
                <Form.Label>Re-enter New Password </Form.Label>
                <Form.Control type="password" placeholder="Enter new Password" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </>
    );
}

{/* Change Username Tab */}
function changeUsername(){
    return(
        <>
            <Form>
            <Form.Group controlId="formChangeUsername">
                <Form.Label>Current Username</Form.Label>
                <Form.Control placeholder="Enter current Username" />
            </Form.Group>

            <Form.Group controlId="formChangeUsername">
                <Form.Label>New Username</Form.Label>
                <Form.Control placeholder="Enter new Username" />
            </Form.Group>

            <Form.Group controlId="formChangeUsername">
                <Form.Label>Re-enter New Username </Form.Label>
                <Form.Control placeholder="Enter new Username" />
            </Form.Group>

            <Button variant="primary" type="submit">
                Submit
            </Button>
            </Form>
        </>
    );
}

{/* Change Profile Picture Tab */}
function changeProfilePic(){
    return(
        <>
            <Form>
                <Form.File id="formcheck-api-regular">
                <Form.File.Label>Choose new profile picture.</Form.File.Label>
                <Form.File.Input />
                </Form.File>

                 <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </>
    );
}

export default account;