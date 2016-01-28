class App extends React.Component {
  constructor (props) {
    super(props);
    // this is where we will store state, if needed
    this.state = {
      data: exampleVideoData,
      currentVideo: exampleVideoData[0]
    };
  }
  onVideoClick (video) {
    this.setState({
      currentVideo: video
    });
  }


  render () {
    return ( 
      <div>
        <Nav />
        <div className="col-md-7">
          <VideoPlayer mainVideo={this.state.currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onVideoClick={this.onVideoClick.bind(this)}/>
        </div>
      </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('app'));
