import React, {useState} from 'react';
import { Button, Card,  Container, Row, Col, CardDeck } from "react-bootstrap";
import './video.scss';
import './pages.scss';
import axios from 'axios';


import {BiStar} from "react-icons/bi";

const VideoItem = ({video , handleVideoSelect}) => {
    const [count, setCount] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const [videoID, setVideoID]=useState({
        votedVideo: ""
    });
    const [video_id, setVideo_ID]=useState({
        videoId: ""
    });
    var votes = 0;

    const likeVideo = async (votes) => {
        setVideoID({votedVideo:video.id.videoId}); 
        //setVideo_ID({videoId:video.id.videoId});  
        await axios.all( [
         axios.post('http://localhost:5000/video',videoID , {
          withCredentials:true
        }),
         axios.post('http://localhost:5000/vote',videoID, {
          withCredentials:true
        })
    ]).then((error)=>{
        console.log(error); 
    })
        console.log("Votes Before: " + votes);
        votes+=1;
        console.log("Votes After: " + votes);

        //(isVisible) ?(votes -= 1):(votes += 1);
        /* (isVisible) ? setCount(count - 1): setCount(count + 1); */
        //setIsVisible(!isVisible);
    };

    return (
        <>
            <div className='videoItem' onClick={ () => handleVideoSelect(video)}>
                <img className='videoItemImage' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div className='videoItemContent'>
                    <h4>{video.snippet.title}</h4>
                    <div className='videoItemCreator'>{video.snippet.channelTitle}</div>

                    {/* YouTube Video ID */}
                    <h4>Video ID: {video.id.videoId}</h4>

                    {/* Star Button */}
                    <Button className="star-btn" variant="" onClick={() => likeVideo(votes) }>
                        <BiStar className="star" color="gold" size= "2em"  />
                    </Button>

                    {/* Vote Count */}
                    {votes}
                </div>
            </div>

            <div style={{borderTop: "4px solid #000 " }}></div>
        </>
    )
};
export default VideoItem;