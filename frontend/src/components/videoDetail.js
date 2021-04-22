import React, {useState} from 'react';
import './video.scss';
import { Button } from "react-bootstrap";
import {BiStar} from "react-icons/bi";
import axios from 'axios';

const VideoDetail = ({ video }) => {
  const [videoID, setVideoID]=useState({
    votedVideo: ""
});
const [VideoDetail, setVideoDetail] = useState({
  videoId:"", 
  videoTitle:"", 
  channelTitle: "",
  videoThubnail: "",
  videoPublishDate: ""
})
  if (!video) {
    return <div className="landingPage">
        <h1>Welcome to Small Channel Shootout!</h1>
        <h2>Begin exploring by searching for your favorite videos above.</h2>
        <br/>
        <div className="landingPageParagraph">
            <h5>
                Any content you search for will have been created by a "small creator". After creating an account, you'll be able to
                vote on your favorite videos each week and see the results of that vote at our Best Choice page.
            </h5>
        </div>
        <h2>See your videos below.</h2>

    </div>;
  }

  var votes = 0

  const likeVideo = (votes) => {
      setVideoID({votedVideo: votes}); 
      setVideoDetail({
        videoId: votes, 
        videoTitle: video.snippet.title, 
        channelTitle: video.snippet.channelTitle, 
        videoThubnail: video.snippet.thumbnails.medium.url,
        videoPublishDate: video.snippet.publishedAt}) 

       axios.all( [
       axios.post('http://localhost:5000/video',VideoDetail , {
        withCredentials:true
      }),
       axios.post('http://localhost:5000/vote',videoID, {
        withCredentials:true
      })
  ]).then((error)=>{
      console.log(error); 
  })
  };

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  const dateString = video.snippet.publishedAt;
  const year = dateString.slice(0,4);
  const month = dateString.slice(5,7);
  const day = dateString.slice(8,10);

  return (
    <div className="jumbotron">
        <div className="jumbotron-video">
            <iframe src={videoSrc} className="jumbotron-video" allowFullScreen title="Video player" />
        </div>

        <div className="jumbotron-header">
            <h2>{video.snippet.title}</h2>
            <h5>{video.snippet.channelTitle}  |  {year}-{month}-{day}</h5>
            <p>{video.snippet.description}</p>
            <p>Video ID: {video.id.videoId}</p>

            {/* Star Button */}
            <Button className="star-btn" variant="" onClick={() => likeVideo(video.id.videoId) }>
              <BiStar className="star" color="gold" size= "3em"  />
            </Button>

            {/* Vote Count */}
            <div className='numVotes'>
              <h2>{votes}</h2>
            </div>
        </div>
    </div>
  );
};

export default VideoDetail;