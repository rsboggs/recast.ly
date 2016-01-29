class App extends React.Component {
  constructor (props) {
    super(props);
    // this is where we will store state, if needed
    this.state = {
      data: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  componentDidMount(){
    this.getYouTubeVideos('Bob Seger');
  }

  getYouTubeVideos (query) {
    console.log(query);
    var key = window.YOUTUBE_API_KEY;

    searchYouTube(query, key, (data) =>
      this.setState({
        data: data.items,
        currentVideo: data.items[0]
      })
    )    
  }

  onVideoClick (video) {
    this.setState({
      currentVideo: video
    });
  }


  render () {
    return ( 
      <div>
        <Nav onSearch={_.debounce((input) => this.getYouTubeVideos(input),500)}/>
        <div className="col-md-7">
          <VideoPlayer mainVideo={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList videoData={this.state.data} onVideoClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
