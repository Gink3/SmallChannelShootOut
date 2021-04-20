import React, {useState} from 'react';
import './video.scss';
import './pages.scss';
import axios from 'axios';

import { Button } from "react-bootstrap";
import {AiFillStar} from "react-icons/ai";
import {BiStar} from "react-icons/bi";

const VideoItem = ({video , handleVideoSelect}) => {
    const dateString = video.snippet.publishedAt;
    const year = dateString.slice(0,4);
    const month = dateString.slice(5,7);
    const day = dateString.slice(8,10);
    const [videoID, setVideoID]=useState({
        votedVideo: ""
    });
    setVideoID({votedVideo:video.id.videoId}); 
    //setVideo_ID({videoId:video.id.videoId});  
     axios.all( [
     axios.post('http://localhost:5000/video',videoID , {
      withCredentials:true
    }),
     axios.post('http://localhost:5000/vote',videoID, {
      withCredentials:true
    })
]).then((error)=>{
    console.log(error); 
})



    return (
        <>
            <div className='videoItem' onClick={ () => handleVideoSelect(video)}>
                <img className='videoItemImage' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div className='videoItemContent'>
                    <div onClick={ () => handleVideoSelect(video)} className='videoItemTitle'>
                        <h4>
                            {video.snippet.title}
                        </h4>
                    </div>

                    <div className='videoItemCreator'>
                        <p>
                            {video.snippet.channelTitle}  |  {year}-{month}-{day}  |  <AiFillStar className='voteIcon'/> 0
                        </p>

                        <div className='videoItemDescription'>
                            <p>
                                {video.snippet.description} 
                            </p>
                        </div>
                    </div>

                    {/* YouTube Video ID */}
                    {/* <p>Video ID: {video.id.videoId}</p> */}
                </div>
            </div>
        </>
    )
};
export default VideoItem;