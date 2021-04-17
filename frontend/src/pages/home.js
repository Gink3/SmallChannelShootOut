import React, { useRef } from 'react'
import { Button, Card,  Container, Row, Col, CardDeck,Tabs,Tab } from "react-bootstrap";
import './pages.scss';
import '../components/video.scss';
import '../components/base.scss'
import SearchBar from '../components/searchbar';
import youtube from '../components/api';
import VideoList from '../components/videoList';
import VideoDetail from '../components/videoDetail';

class Home extends React.Component {
    state = {
        videos: [],
        selectedVideo: null
    }

    handleSubmit = async (termFromSearchBar) => {
        const response = await youtube.get('/search', {
            params: {
                q: termFromSearchBar
            }
        })

        this.setState({
            videos: response.data.items
        })
        console.log("this is resp",response);
    };

    handleVideoSelect = (video) => {
      this.setState({selectedVideo: video});
    }

    render() {
        return (
          <>
            <div className="home1" style={{marginTop: '1em'}}>
              <SearchBar handleFormSubmit={this.handleSubmit}/>
              
              <div className="homevideodetail" style={{}}>
                <VideoDetail video={this.state.selectedVideo}/>
              </div>

              <div style={{borderTop: "4px solid #000 " }}></div>

              <div className="homevideolist" style={{width: '80%'}}>
                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.videos}/>
              </div>
            </div>
          </>
        )
    }
}

export default Home;


///////////////////////////////Do not delete :)

/*
<div className="homebox">
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
} 
*/
