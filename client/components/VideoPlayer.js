var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + props.mainVideo.id.videoId} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.mainVideo.snippet.title}</h3>
      <div>{props.mainVideo.snippet.description}</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;
