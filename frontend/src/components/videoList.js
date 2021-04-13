import React from 'react';
import VideoItem from './videoItem';
import './video.scss';


const VideoList = ({videos , handleVideoSelect}) => {
    const renderedVideos =  videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />
        // console.log(video.id);
    });

    return <div>{renderedVideos}</div>;
};
export default VideoList;