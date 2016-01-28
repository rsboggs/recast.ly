var VideoList = (props) => (
  <div className="video-list media">
    {props.videoData.map(videoObj =>
        <VideoListEntry onVideoClick={props.onVideoClick} videoObj={videoObj} />
    )}
  </div>
);

window.VideoList = VideoList;
