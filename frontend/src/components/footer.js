import React from 'react';
import logo from "../images/SCS_Target3_Transparent.svg";
import {HiOutlineMail} from "react-icons/hi";
import {FaRobot} from "react-icons/fa";

function footer(){
    return(
    <> 
   
      {/*Footer*/}
      <div className=" d-flex justify-content-center footer_make added-footer">

        {/*Logo*/}
        <a href="/"> 
          <img src={logo} alt="logo" width="70px" style={{padding: '10px'}}/>
        </a>

        <footer className="footer" style={{color: 'white'}}>
          <br/>

          {/*Main Content*/}
          <div className= "footer"> 
            <span className="footer">
              &nbsp; HTML Coding &nbsp; &copy; 2022 &nbsp;
            </span>
          </div>
          
          {/*Mail Icon
          
            <span className="footer_make"><HiOutlineMail className="footer_make" size="1em"/> 
              &nbsp;
            </span>*/}
          

          <br/>
        </footer>
      </div>
    </>
    );
}
export default footer;

