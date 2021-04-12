import React, {useState} from 'react';
import {Container, Tab, Tabs, Row, Col} from "react-bootstrap";
import thumbnail from "../images/thumbnail.png";
import './pages.scss';
import '../components/base.scss'
import SearchBar from "../components/searchbar";
import { Navbar, Nav} from "react-bootstrap";

import {Video} from "../components/video.js";

//<div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
//{console.log("Hello!")}
//</div>

function Home(){
  return(
    <>
    {/*
      <Tab.Container id="left-tabs-example" defaultActiveKey="first">
        <Row>
          <Col sm={1}>
            <Nav variant="pills" className="flex-column">
              <Nav.Item>
                <Nav.Link eventKey="first">Trending</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="second">Gaming</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="third">Music</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fourth">News</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="fifth">Movies</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="sixth">Science and Technology</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="seventh">Fashion</Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>
          <Col sm={11}>
            <Tab.Content>

              <Tab.Pane eventKey="first">
                <Video cardbox={[]} query='trending' />
              </Tab.Pane>

              <Tab.Pane eventKey="second">
              </Tab.Pane>

              <Tab.Pane eventKey="third">
              </Tab.Pane>

              <Tab.Pane eventKey="fourth">
              </Tab.Pane>

              <Tab.Pane eventKey="fifth">
              </Tab.Pane>

              <Tab.Pane eventKey="sixth">
              </Tab.Pane>

              <Tab.Pane eventKey="seventh">
              </Tab.Pane>

            </Tab.Content>
          </Col>
        </Row>
      </Tab.Container>
      
    {/*
      <div>
        <input type="text" />
      </div>
    */}
      <Tabs>
        
        <Tab className="" eventKey="trending" title="Trending">
          <Container fluid>

          </Container>            
        </Tab>
     
        <Tab className="" eventKey="gaming" title="Gaming">
          <Container fluid>
          <Video cardbox={[]} query='gaming' />

          </Container>            
        </Tab>

        <Tab className="" eventKey="news" title="News">
          <Container fluid>

          </Container>            
        </Tab>

        <Tab className="" eventKey="music" title="Music">
          <Container fluid>

          </Container>            
        </Tab>

        <Tab className="" eventKey="movies" title="Movies">
          <Container fluid>

          </Container>            
        </Tab>
      </Tabs>

      <br/>


{/*

        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/voting/sports">
            <h2>Sports</h2>
          </a>
        </div>
        <div style={{borderTop: "4px solid #000 " }}></div>

        {returnData('comedy')}
        <Video cardbox={cardbox} />

        <br/>
        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/voting/gaming">
            <h2>Gaming</h2>
          </a>
        </div>
        <div style={{borderTop: "4px solid #000 " }}></div>

        {returnData('gaming')}
        <Video cardbox={cardbox} />

        <br/>


        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/voting/fashion">
            <h2>Fashion and Beauty</h2>
          </a>
        </div>
        <div style={{borderTop: "4px solid #000 " }}></div>

        {returnData('fashion')}
        <Video cardbox={cardbox} />

        <br/>

        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/voting/news">
            <h2>News</h2>
          </a>
        </div>
        <div style={{borderTop: "4px solid #000 " }}></div>

        {returnData('news')}
        <Video cardbox={cardbox}/>

        <br/>

        <div className="d-flex justify-content-left header" style={{padding: '0px', marginTop: '10px'}}>
          <a href="/voting/news">
            <h2>Music</h2>
          </a>
        </div>
        <div style={{borderTop: "4px solid #000 " }}></div>

        {returnData('music')}
        <Video cardbox={cardbox}/>

        <br/>
*/}

    </>
  );
}
export default Home;
///////////////////////////////Do not delete :)

/*<div className="homebox">
            <Intro videoboxes={videoboxObj} />

            </div>
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
} */
