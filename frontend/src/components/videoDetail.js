import React from "react";
import './video.scss';

const VideoDetail = ({ video }) => {
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

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  
  return (
    <div className="jumbotron">
        <div>
            <iframe src={videoSrc} className="jumbotron-video" allowFullScreen title="Video player" />
        </div>

        <div className="jumbotron-header">
            <h4>{video.snippet.title}</h4>
            <h4>{video.snippet.channelTitle}</h4>
            <p>{video.snippet.description}</p>
        </div>
    </div>
  );
};

export default VideoDetail;