import React from 'react';
import logo from "../images/SCSLogo_SimpleBB.png";
import {HiOutlineMail} from "react-icons/hi";
import {FaRobot} from "react-icons/fa";

function footer(){
    return(
    <> 
   
    
    <div className=" d-flex justify-content-center footer_make">
    <a  href="/"> <img src={logo} alt="logo" width="70px" /></a>

  <footer className=" footer footer_make">
   
    <br/>
    
       
      <div className= "footer footer_make"> 
      <span className="footer footer_make">&nbsp; &copy; 2021 &nbsp;<FaRobot className="footer_make" size="2em"/> &nbsp;Beep Boop Inc.</span>
    </div>
    <div className=" d-flex justify-content-center footer_make ">
      <span className="footer_make "><HiOutlineMail className="footer_make" size="2em"/> &nbsp;</span>
      <a href="#n">&nbsp;shootout@beepboop.com</a> 
      
    </div>
    <br/>
  </footer>
</div>

    </>
    );
}
export default footer;
