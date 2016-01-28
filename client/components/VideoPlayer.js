var VideoPlayer = (props) => (
  <div className="video-player">
    <div className="embed-responsive embed-responsive-16by9">
      <iframe className="embed-responsive-item" src={'https://www.youtube.com/embed/' + (props.mainVideo.id !== undefined ? props.mainVideo.id.videoId : "")} allowFullScreen></iframe>
    </div>
    <div className="video-player-details">
      <h3>{props.mainVideo.snippet !== undefined ? props.mainVideo.snippet.title : "loading"}</h3>
      <div>{props.mainVideo.snippet !== undefined ? props.mainVideo.snippet.description : "loading"}</div>
    </div>
  </div>
);

window.VideoPlayer = VideoPlayer;
