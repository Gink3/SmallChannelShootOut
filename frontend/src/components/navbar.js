import React, {useState, useRef} from "react";
import "./base.scss";
import { Navbar, Nav} from "react-bootstrap";
import {OverlayTrigger, Tooltip } from 'react-bootstrap'
import { NavLink} from 'react-router-dom'
import LoadingBar from "react-top-loading-bar";


import logo from "../images/SCSLogo_SimpleBB.png";
import { FaUserPlus} from "react-icons/fa";
import {AiOutlineHome, AiOutlineTrophy} from "react-icons/ai";
import {RiMessage3Line} from "react-icons/ri";
import {BiLogIn} from "react-icons/bi";

import {BiPoll} from "react-icons/bi";
import {RiAccountCircleLine} from "react-icons/ri";

import Login   from '../pages/login';

import {BiMoon} from 'react-icons/bi'

function Topbar() {
  const [modalShow, setModalShow] = useState(false); 
  const ref = useRef(null);

  const handleLoadSomething = () => {
    ref.current.continuousStart();
    setTimeout(() => {
         ref.current.complete();
    }, 1000);
  };
  return (
    <>
<LoadingBar color="#f11946" ref={ref} />
      <Navbar collapseOnSelect expand="lg" variant="dark" className="nav">
        <Navbar.Brand onClick={handleLoadSomething} href="/"><img src={logo} alt="logo" width="50px" className=""/></Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          className="navbar"
        />
        <Navbar.Collapse id="responsive-navbar-nav" className="nav">

          {/*Left-Side Navigation*/}
          <Nav className="mr-auto" >

           {/*Homepage Link*/}
          <NavLink to='/' className="icon" onClick={handleLoadSomething} exact activeClassName="active-link" style={{marginTop:'6px', marginLeft:'3px'}}>
          <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Home</Tooltip>}>
           <span className="d-inline-block">
                  <AiOutlineHome style={{marginLeft: '9px'}} size="2em"/>
                </span>
              </OverlayTrigger>&nbsp;&nbsp;&nbsp;
          </NavLink>

           
            

            {/*Voting Page Link*/}
            <NavLink onClick={handleLoadSomething} to='/bestchoice' className="icon" exact activeClassName="active-link" style={{marginTop:'6px', marginLeft:'3px'}}>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Best Choice</Tooltip>}>
                <span className="d-inline-block">
                  <BiPoll style={{marginLeft: '9px'}} size="2em"/>{/* &#8239; */}
                </span>
              </OverlayTrigger>&nbsp;&nbsp;&nbsp;
          </NavLink>


            {/*Thread Page Choice*/}
            <NavLink to='/talk' className="icon" exact activeClassName="active-link" onClick={handleLoadSomething} style={{marginTop:'6px', marginLeft:'3px'}}>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Threads</Tooltip>}>
                <span className="d-inline-block">
                  <RiMessage3Line style={{marginLeft: '9px'}} size="2em"/>{/* &#8239; */}
                </span>
              </OverlayTrigger>&nbsp;&nbsp;&nbsp;
          </NavLink>
            
            {/* Hall of Fame Link*/}
            <NavLink to='/about' className="icon" exact activeClassName="active-link" onClick={handleLoadSomething} style={{marginTop:'6px' , marginLeft:'3px' }}>
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Hall of Fame</Tooltip>}>
                <span className="d-inline-block">
                  <AiOutlineTrophy style={{marginLeft: '9px'}} size="2em"/>{/* &#8239; */}
                </span>
              </OverlayTrigger>
              &nbsp;&nbsp;&nbsp;
          </NavLink>

            

            {/*Search Bar*/}
            <div className="container nav">
              <input href="/search" type="text" placeholder="Search..." />
              <div className="search">

              </div>
            </div>
          </Nav>


          {/*Right-Side Navigation*/}
          <Nav>

            {/*backgroundMode()} className="nav btn-nav">*/}
            {/*Dark Mode Toggle*/}
            <Nav.Link onClick={() => darkMode()} className="nav btn-nav"> 
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Dark Mode</Tooltip>}>
                <span className="d-inline-block">
                  <BiMoon className="icon bounce" size="2em"/>
                </span>
              </OverlayTrigger>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </Nav.Link>

            {/*Sign-Up Link*/}
            <NavLink to='/signup' className="icon" exact activeClassName="active-right " onClick={handleLoadSomething} style={{marginTop:'9px'}}>
            &nbsp;&nbsp;&nbsp; <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Create an Account</Tooltip>}>
                <span className="d-inline-block">
                  <FaUserPlus size="2em"/>
                </span>
              </OverlayTrigger>
              &nbsp;&nbsp;&nbsp;
          </NavLink>

            
            {/*Login Link*/}
            
            <Nav.Link href="" className="nav btn-nav" onClick={() => setModalShow(true)} style={{marginTop:'2px'}}  >
            <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Log In</Tooltip>}>
                <span className="d-inline-block">
                  <BiLogIn className="icon" size="2em"/>
                </span>
              </OverlayTrigger>
              &nbsp;
              
            </Nav.Link>

            <Login show={modalShow} onHide={() => setModalShow(false)}/>

            {/* 
            This is Bootstrap.
            "$npm install react-bootstrap bootstrap" needed
            */}

            {/*Account Page Link*/}
            <NavLink to='/account' className="icon" exact activeClassName="active-right " onClick={handleLoadSomething} style={{marginTop:'9px'}}>
            &nbsp;&nbsp; <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Account Settings</Tooltip>}>
                <span className="d-inline-block">
                  <RiAccountCircleLine size="2em"/>
                </span>
              </OverlayTrigger>
              &nbsp;
              &nbsp;
              &nbsp;
              
              
            </NavLink>


            {/* <Nav.Link href="/account" className="nav btn-nav">
              <OverlayTrigger placement='bottom' overlay={<Tooltip id="tooltip-disabled">Account Settings</Tooltip>}>
                <span className="d-inline-block">
                  <RiAccountCircleLine className="icon bounce" size="2em"/>
                </span>
              </OverlayTrigger>
              &nbsp;
            </Nav.Link>
 */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      

    </>
  );
}


function darkMode() {
  //console.log("dark mode activated");
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
