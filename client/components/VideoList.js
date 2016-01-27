var VideoList = () => (
  <div className="video-list media">
    {exampleVideoData.map(videoObj =>
        <VideoListEntry videoObj={videoObj} />
    )}
  </div>
);

window.VideoList = VideoList;
