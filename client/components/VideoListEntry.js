var VideoListEntry = (props) => (
  <div className="video-list-entry" onClick={props.onVideoClick.bind(this, props.videoObj)}>
    <div className="media-left media-middle">
      <img className="media-object" src={props.videoObj.snippet.thumbnails.default.url} alt="" />
    </div>
    <div className="media-body">
      <div className="video-list-entry-title" value={props.videoObj.id}>{props.videoObj.snippet.title}</div>
      <div className="video-list-entry-detail">{props.videoObj.snippet.description}</div>
    </div>
  </div>
);

window.VideoListEntry = VideoListEntry;
