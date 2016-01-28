class App extends React.Component {
  constructor (props) {
    super(props);
    // this is where we will store state, if needed
    this.state = {
      data: exampleVideoData,
      currentVideo: exampleVideoData[0],
      query: "Bob Seger"
    };
  }

  componentDidMount(){
    var options = {
      part: 'snippet',
      q: this.state.query,
      maxResults: 5,
      type: 'video',
      videoEmbeddable: true,
      key: window.YOUTUBE_API_KEY
    };
    searchYouTube(options, function(data){
      this.setState({
        data: data.items,
        currentVideo: data.items[0]
      });
    }.bind(this));
  }
  onVideoClick (video) {
    this.setState({
      currentVideo: video
    });
  }
  onSearch(searchQuery) {
    console.log(this);
    this.setState({
      query: searchQuery
    });
  }


  render () {
    return ( 
      <div>
        <Nav onSearch={this.onSearch.bind(this)}/>
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
