import React from 'react';
import logo from "../images/SCSLogo_SimpleBB.png";
import {HiOutlineMail} from "react-icons/hi";
import {FaRobot} from "react-icons/fa";

function footer(){
    return(
    <> 
   
      {/*Footer*/}
      <div className=" d-flex justify-content-center footer_make added-footer">

        {/*Logo*/}
        <a href="/"> 
          <img src={logo} alt="logo" width="70px" style={{paddingTop: '20px'}}/>
        </a>

        <footer className="footer" style={{color: 'white'}}>
          <br/>

          {/*Main Content*/}
          <div className= "footer"> 
            <span className="footer">
              &nbsp; &copy; 2022 &nbsp;
              <FaRobot className="footer_make" size="2em"/> 
              &nbsp;HTML Coding
            </span>
          </div>

          {/*Mail Icon*/}
          <div className="d-flex justify-content-center">
            <span className="footer_make"><HiOutlineMail className="footer_make" size="1em"/> 
              &nbsp;
            </span>

            {/*E-mail*/}
            <a href="#n">
              &nbsp;shootout@beepboop.com
            </a> 
          </div>

          <br/>
        </footer>
      </div>
    </>
    );
}
export default footer;

