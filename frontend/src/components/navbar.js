import React, {useState} from "react";
import "./base.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import {OverlayTrigger, Tooltip } from 'react-bootstrap'

import logo from "../images/SCSLogo_SimpleBB.png";
import {FaAdn, FaUserPlus} from "react-icons/fa";
import {AiOutlineHome, AiOutlineTrophy} from "react-icons/ai";
import {RiMessage3Line} from "react-icons/ri";
import {BiLogIn} from "react-icons/bi";
import {FaMedal} from "react-icons/fa";
import {BiPoll} from "react-icons/bi";
import {RiAccountCircleLine} from "react-icons/ri";

import Login   from '../pages/login';

import {BiMoon} from 'react-icons/bi'

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

            {/*Homepage Link*/}
            <Nav.Link className="nav btn-nav" href="/" eventKey="1">
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Home</Tooltip>}>
                <span className="d-inline-block">
                  <AiOutlineHome className="icon" size="2em"/>
                </span>
              </OverlayTrigger>
              &#8239;
            </Nav.Link>
            

            {/*Voting Page Link*/}
            <Nav.Link href="/bestchoice" className="nav btn-nav">
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Best Choice</Tooltip>}>
                <span className="d-inline-block">
                  <BiPoll className="icon" size="2em"/>&#8239;
                </span>
              </OverlayTrigger>
            </Nav.Link>

            {/*Thread Page Choice*/}
            <Nav.Link href="/talk" className="nav btn-nav">
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Threads</Tooltip>}>
                <span className="d-inline-block">
                  <RiMessage3Line className="icon" size="2em"/>&#8239;
                </span>
              </OverlayTrigger>
            </Nav.Link>

            {/* Hall of Fame Link*/}
            <Nav.Link href="/about" className="nav btn-nav">
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Hall of Fame</Tooltip>}>
                <span className="d-inline-block">
                  <AiOutlineTrophy className="icon bounce" size="2em"/>
                </span>
              </OverlayTrigger>
              &nbsp;
            </Nav.Link>
          {/*End of Left-side Nav*/}

            {/*Search Bar*/}
            <div className="container nav">
              <input href="/search" type="text" placeholder="Search..." />
              <div className="search">

              </div>
            </div>
          </Nav>


          {/*Right-Side Navigation*/}
          <Nav>
            {/*Dark Mode Toggle*/}
            {/*backgroundMode()} className="nav btn-nav">*/}
            <Nav.Link onClick={() => darkMode()} className="nav btn-nav"> 
              <BiMoon size="2em" className="icon"/> THEME
            </Nav.Link>  

            {/*Sign-Up Link*/}
            <Nav.Link href="/signup" className="nav btn-nav">
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Create an Account</Tooltip>}>
                <span className="d-inline-block">
                  <FaUserPlus className="icon bounce" size="2em"/>
                </span>
              </OverlayTrigger>
              &nbsp;
            </Nav.Link>

            {/*Login Link*/}
            <Nav.Link href="" className="nav btn-nav" onClick={() => setModalShow(true)} >
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Log In</Tooltip>}>
                <span className="d-inline-block">
                  <BiLogIn className="icon bounce" size="2em"/>
                </span>
              </OverlayTrigger>
              &nbsp;
              &nbsp;
            </Nav.Link>

            <Login show={modalShow} onHide={() => setModalShow(false)}/>

            {/* 
            This is Bootstrap.
            "$npm install react-bootstrap bootstrap" needed
            */}

            {/*Account Page Link*/}
            <Nav.Link href="/account" className="nav btn-nav">
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Account Settings</Tooltip>}>
                <span className="d-inline-block">
                  <RiAccountCircleLine className="icon bounce" size="2em"/>
                </span>
              </OverlayTrigger>
              &nbsp;
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}


function darkMode() {
  console.log("dark mode activated");
  var element = document.body;
  element.classList.toggle("dark-mode");
  localStorage.setItem('mode', "dark");
}

/*function lightMode() {
  console.log("light mode activated");
  var element = document.body;
  element.classList.toggle("light-mode");
  localStorage.setItem('mode', "light");
}

function backgroundMode()
{
  //var element = document.body;
  var bckgrnd = document.body.style.backgroundImage;
  //querySelector("body").style;

  alert(document.getElementById("boxostuff").style.backgroundImage);

  console.log(bckgrnd);
/*
  if(bckgrnd == ""){

  }

  if(bckgrnd == ""){
    
  }
  
}

function checkBackground(){
  const bck = localStorage.getItem('mode');
  console.log(bck);

  var element = document.body;

  if(bck == "dark"){
    element.classList.toggle("dark-mode");
  }
  else{
    return;
  }

}

checkBackground();*/

export default Topbar;
