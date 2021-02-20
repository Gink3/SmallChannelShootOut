import React from 'react';
//import { Button } from 'react-bootstrap';
import './pages.scss';
import starIcon from "../images/star-like.svg";


const videobox=["First", "Second", "Third", "Fourth", "Fifth","Sixth", "Seventh", "Eighth", "Ninth", "Tenth", "Eleventh"];
const videoboxObj= videobox.map((videobox, i)=>({id: i, title:videobox}));

function Intro(props) {
  return (
    <section>
      <ul>
        {props.videoboxes.map((videobox) => (
          
          <li key={videobox.id}>{videobox.title}
  
          <button className="like">
          <img src={starIcon} alt="star icon" width="30px" className="like-icon"/>
            </button>
          
          </li>
        ))}
      </ul>
    </section>
  );
}

function home(){
    return(
        <>
       
            <div className="homebox">
            <Intro videoboxes={videoboxObj} />
                
            </div>
        </>
    );
}
export default home;