import React, { useRef } from 'react'
/* import { Button, Card,  Container, Row, Col, CardDeck,Tabs,Tab } from "react-bootstrap"; */
import './pages.scss';
import '../components/video.scss';
import '../components/base.scss'
import SearchBar from '../components/searchbar';
import youtube from '../components/api';
import VideoList from '../components/videoList';
import VideoDetail from '../components/videoDetail';
/* import background from "../images/thumbnail.png"; */

class Home extends React.Component {
    resultsPerPage = 15;

    state = {
        channelIdString: '',
        validVideos: [],
        selectedVideo: null
    }

    handleSubmit = async (termFromSearchBar) => {
      //clears previous lists
      this.setState({
      //  validVideos: this.state.validVideos.splice(0, 14),
      })

      //GET search bar response 
      const response = await youtube.get('/search', {
        params: {
          part: 'snippet',
          maxResults: this.resultsPerPage,
          type: 'video',
          regionCode: 'US',
          q: termFromSearchBar
        }
      })

      //concat all channel ids into 1 string
      for(var i = 0; i < this.resultsPerPage; i++){
        this.setState({
          channelIdString: this.state.channelIdString.concat(response.data.items[i].snippet.channelId + ",")
        })
      }
      //remove last ',' from string
      this.setState({
        channelIdString: this.state.channelIdString.substring(0, this.state.channelIdString.length - 1)
      })
      
      //csv string of all channel ids
      console.log("channelStyring", this.state.channelIdString)

      //GET all channel info from channel string
      const response2 = await youtube.get('/channels',{
        params: {
          part: 'statistics',
          id: this.state.channelIdString
        }
      })

      //only allows videos that have under 100,000 subscribers
      for(var i = 0; i < this.resultsPerPage; i++){
        if(response2.data.items[0].statistics.subscriberCount <= 1000000){
          this.setState({
            validVideos: this.state.validVideos.concat(response.data.items[i])
          })
        }
      }
      
      this.setState({
        channelIdString: ''
      })
      console.log(this.state.validVideos, this.state.selectedVideo)
    };

    handleVideoSelect = (video) => {
      this.setState({selectedVideo: video});
    }

    render() {
        return (
          <>
            <div className="home1" >
            <div style={{/*  backgroundImage: `url(${background})` */backgroundColor:'crimson'}}>
              <SearchBar handleFormSubmit={this.handleSubmit}/>         
              <div className="homevideodetail" style={{}}>
                <VideoDetail video={this.state.selectedVideo}/>
              </div>
              </div>
              <div style={{borderTop: "4px solid #000 " }}></div>

              <div className="homevideolist" style={{width: '80%'}}>
                <VideoList handleVideoSelect={this.handleVideoSelect} videos={this.state.validVideos}/>
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
