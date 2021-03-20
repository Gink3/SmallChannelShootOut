import React, {useState} from "react";
import "./base.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {OverlayTrigger, Tooltip } from 'react-bootstrap'

import logo from "../images/SCSLogo_SimpleBB.png";
import {FaAdn, FaUserPlus} from "react-icons/fa";
import {AiOutlineHome, AiOutlineTrophy} from "react-icons/ai"
import {RiMessage3Line} from "react-icons/ri"
import {BiLogIn} from "react-icons/bi"
import {FaMedal} from "react-icons/fa"
import {BiPoll} from "react-icons/bi"
import {RiAccountCircleLine} from "react-icons/ri"

import Login   from '../pages/login';





function Topbar() {
  const [modalShow, setModalShow] = useState(false); 
  //const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <>
      <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
        <Navbar.Brand href="/"><img src={logo} alt="logo" width="50px" className=""/></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav">

          {/*Left-Side Navigation*/}
          <Nav className="mr-auto" defaultActiveKey="/">

            {/*Home Link*/}
             <Nav.Link className="nav btn-nav" href="/" eventKey="1">
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Home</Tooltip>}>
              <span className="d-inline-block">
            <AiOutlineHome className="icon" size="2em"/>
            </span>
          </OverlayTrigger>
            &#8239;
            </Nav.Link>
            

            {/*Best Choice Choice*/}
            <Nav.Link href="/bestchoice" className="nav btn-nav">
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Best Choice</Tooltip>}>
              <span className="d-inline-block">
             <BiPoll className="icon" size="2em"/>&#8239;
             </span>
          </OverlayTrigger>
            </Nav.Link>

            {/*Talk Choice*/}
            <Nav.Link href="/talk" className="nav btn-nav">
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Talk</Tooltip>}>
              <span className="d-inline-block">
            <RiMessage3Line className="icon" size="2em"/>&#8239;
            </span>
          </OverlayTrigger>
            </Nav.Link>

            {/* Hall of Fame Link*/}
            <Nav.Link href="/about" className="nav btn-nav">
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">About</Tooltip>}>
              <span className="d-inline-block">
            <AiOutlineTrophy className="icon bounce" size="2em"/>
            </span>
          </OverlayTrigger>
              &nbsp;
            </Nav.Link>
            
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
              <FaUserPlus size="2em" className="icon"/>
            </Nav.Link>   

            {/*Login Link*/}
            <Nav.Link href="" className="nav btn-nav" onClick={() => setModalShow(true)} >
              <BiLogIn size="2em" className="icon"/>
            </Nav.Link>               
                  <Login show={modalShow}
                    onHide={() => setModalShow(false)}/>

            {/* 
            This is Bootstrap.
            "$npm install react-bootstrap bootstrap" needed
            */}

            {/*Sign-Up Link*/}
            <Nav.Link href="/account" className="nav btn-nav">
              <RiAccountCircleLine size="2em" className="icon"/>
            </Nav.Link>  
          </Nav>

        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Topbar;
