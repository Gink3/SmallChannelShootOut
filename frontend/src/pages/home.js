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
    resultsPerPage = 50;
    subscriberLimit = 2000000 // what to change when you want to change the upper limit of subscriber for a search
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
      console.log("channelString", this.state.channelIdString)

      //GET all channel info from channel string
      const response2 = await youtube.get('/channels',{
        params: {
          part: 'statistics',
          id: this.state.channelIdString
        }
      })
      //only allows videos that have under 100,000 subscribers
      for(var i = 0; i < this.resultsPerPage; i++){ // this loop loops through response number 1 which contains the video information from the search
        for(var j = 0; j < response2.data.items.length; j++) // this loops through response number 2 which contains the channel information from the search
        {
          if(response2.data.items[i] !== undefined && response.data.items[i].snippet.channelId == response2.data.items[j].id) // if response 2 item is not undefined and the channelID matches for video and channel continue
          {
            if(response2.data.items[j].statistics.subscriberCount <= this.subscriberLimit){ // checks how many subscribers the channel has
              this.setState({
                validVideos: this.state.validVideos.concat(response.data.items[i]) // adds to the array of valid videos
              })
            }
          }
        }
      }
      
      this.setState({
        channelIdString: '' // resets channelIDString
      })
    };

    handleVideoSelect = (video) => {
      this.setState({selectedVideo: video}); // used for when you click on a video
    }

    render() {
        return (
          <>
            <div className="home1" >
            <div style={{backgroundColor:'light coral'}}>
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
        // when enter is pressed the handle form submit function is activated.
    }
}

export default Home;
