import React from 'react';
import './video.scss';

const VideoItem = ({video , handleVideoSelect}) => {
    return (
        <>
            <div className='videoItem' onClick={ () => handleVideoSelect(video)}>
                <img className='videoItemImage' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description}/>
                <div className='videoItemContent'>
                    <h4>{video.snippet.title}</h4>
                    <div className='videoItemCreator'>{video.snippet.channelTitle}</div>

                </div>
            </div>

            <div style={{borderTop: "4px solid #000 " }}></div>
        </>
    )
};
export default VideoItem;