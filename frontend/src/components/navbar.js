import React, {useState} from "react";
import "./base.scss";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

import logo from "../images/SCSLogo_SimpleBB.png";
import {FaAdn, FaUserPlus} from "react-icons/fa";
import {AiOutlineHome, AiOutlineTrophy} from "react-icons/ai"
import {RiMessage3Line} from "react-icons/ri"
import {BiLogIn} from "react-icons/bi"

import Login   from '../pages/login';

import {BiMoon} from 'react-icons/bi'

function Topbar() {
  const [modalShow, setModalShow] = useState(false); 
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
          <Nav className="mr-auto">

            {/*Home Link*/}
            <Nav.Link className="nav btn-nav" href="/">
            {/* <img src={homeIcon} alt="home icon" width="30px" className=""/> */}
            <AiOutlineHome className="icon" size="2em"/>
            &#8239;Home
            </Nav.Link>

            {/*About Link*/}
            <Nav.Link href="/about" className="nav btn-nav">
            <FaAdn className="icon bounce" size="2em"/>
              &nbsp;About
            </Nav.Link>

            {/*Best Choice Choice*/}
            <Nav.Link href="/bestchoice" className="nav btn-nav">
             <AiOutlineTrophy className="icon" size="2em"/>&#8239;Best Choice
            </Nav.Link>

            {/*Talk Choice*/}
            <Nav.Link href="/talk" className="nav btn-nav">
            <RiMessage3Line className="icon" size="2em"/>&#8239;Talk
            </Nav.Link>

            {/*Search Bar*/}
            <NavDropdown title="Genre" id="collasible-nav-dropdown" className="nav" style={{marginTop: "2px"}}>
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
            {/*Dark Mode Toggle*/}
            {/*backgroundMode()} className="nav btn-nav">*/}
            <Nav.Link onClick={() => darkMode()} className="nav btn-nav"> 
              <BiMoon size="2em" className="icon"/> THEME
            </Nav.Link>  

            {/*Sign-Up Link*/}
            <Nav.Link href="/signup" className="nav btn-nav">
              <FaUserPlus size="2em" className="icon"/> SIGN UP
            </Nav.Link>   

            {/*Login Link*/}
            <Nav.Link href="" className="nav btn-nav" onClick={() => setModalShow(true)} >
              <BiLogIn size="2em" className="icon"/> LOGIN
            </Nav.Link>               
                  <Login show={modalShow}
                    onHide={() => setModalShow(false)}/>
            {/* 
            This is Bootstrap.
            "$npm install react-bootstrap bootstrap" needed
            */}
            <NavDropdown drop ="left" title="Account" id="collasible-nav-dropdown" className="nav" style={{marginTop: "2px"}}>
              <NavDropdown.Item href="/account">Your Account</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#s">Sign Out</NavDropdown.Item>
            </NavDropdown>
            {/* <DropdownButton drop="left" title="Account" className="nav account">
              <Dropdown.Item href="/account"><RiAccountCircleFill className="your-acc-icon" size="2em"/>&#8239;Your Account</Dropdown.Item>
              <NavDropdown.Divider />
              <Dropdown.Item>Settings</Dropdown.Item>
            </DropdownButton> */}
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
