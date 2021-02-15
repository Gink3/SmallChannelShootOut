import React from "react";
import "./base.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import homeIcon from "../images/homeicon.svg";

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
          <Nav className="mr-auto">
          <Nav.Link className="nav btn-nav" href="/">
          <img src={homeIcon} alt="home icon" width="30px" className=""/>
              &nbsp; Home
            </Nav.Link>
            <Nav.Link href="#features" className="nav btn-nav">
              About
            </Nav.Link>

            <Nav.Link className="nav btn-nav" href="#winner">
              Best Choice
            </Nav.Link>
            <Nav.Link href="#talk" className="nav btn-nav">
              Talk
            </Nav.Link>
            <NavDropdown
              title="Genre"
              id="collasible-nav-dropdown"
              className="nav"
            >
              <NavDropdown.Item href="#action/3.1">Sports</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Horror</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Free-style</NavDropdown.Item>
            </NavDropdown>
            
              <div className="container nav">
                <input
                  href="/search"
                  type="text"
                  placeholder="Search..."
                />
                <div className="search"></div>
              </div>
           
          </Nav>
          <Nav>
            <Nav.Link href="/signup" className="nav btn-nav">
              SIGN UP
            </Nav.Link>
            <Nav.Link /* eventKey={2} */ href="#login" className="nav btn-nav">
              SIGN IN
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}
export default nav;
