var VideoList = (props) => (
  <div className="video-list media">
    {exampleVideoData.map(videoObj =>
        <VideoListEntry onVideoClick={props.onVideoClick.bind(this)} videoObj={videoObj} />
    )}
  </div>
);

window.VideoList = VideoList;
