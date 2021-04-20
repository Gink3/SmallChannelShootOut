import React, {useState} from 'react';
import './video.scss';
import './pages.scss';
import {AiFillStar} from "react-icons/ai";


const VideoItem = ({video , handleVideoSelect}) => {
    const dateString = video.snippet.publishedAt;
    const year = dateString.slice(0,4);
    const month = dateString.slice(5,7);
    const day = dateString.slice(8,10);

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