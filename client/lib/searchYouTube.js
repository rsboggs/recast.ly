var options = {
  query: "dance",
  max: 5,
  key: window.YOUTUBE_API_KEY,
  //only get embedded videos
};

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    contentType: 'application/json',
    success: function(data){
      console.log("Data", data);
    },
    error: function(data){
      console.log("error!");
    }
  });
};

window.searchYouTube = searchYouTube;
