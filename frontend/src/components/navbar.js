import React from "react";
import "./base.scss";
import { Navbar, Nav, NavDropdown, DropdownButton, Dropdown, Button, Card, CardDeck } from "react-bootstrap";
import homeIcon from "../images/homeicon.svg";
import accountIcon from "../images/account-icon.png";

function nav() {
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
        <Navbar.Brand href="/">Logo</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav">

          {/*Left-Side Navigation*/}
          <Nav className="mr-auto">

            {/*Home Link*/}
            <Nav.Link className="nav btn-nav" href="/">
            <img src={homeIcon} alt="home icon" width="30px" className=""/>
                &nbsp; Home
            </Nav.Link>

            {/*About Link*/}
            <Nav.Link href="/about" className="nav btn-nav">
              About
            </Nav.Link>

            {/*Best Choice Choice*/}
            <Nav.Link href="#winner" className="nav btn-nav">
              Best Choice
            </Nav.Link>

            {/*Talk Choice*/}
            <Nav.Link href="/talk" className="nav btn-nav">
              Talk
            </Nav.Link>

            {/*Search Bar*/}
            <NavDropdown title="Genre" id="collasible-nav-dropdown" className="nav">
              <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Free-style</NavDropdown.Item>
            </NavDropdown>

            {/*Search Bar*/}
            <div className="container nav">
              <input href="/search" type="text" placeholder="Search..." />
              <div className="search">

              </div>
            </div>
        
          </Nav>

          {/*Right-Side Navigation*/}
          <Nav>

            {/*Sign-Up Link*/}
            <Nav.Link href="/signup" className="nav btn-nav">
              SIGN UP
            </Nav.Link>                  

            {/* 
            This is Bootstrap.
            "$npm install react-bootstrap bootstrap" needed
            */}
            <DropdownButton drop="left" title="Account" className="nav btn-nav">
              <Dropdown.Item href="/account">Your Account</Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item>Settings</Dropdown.Item>
            </DropdownButton>
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default nav;
