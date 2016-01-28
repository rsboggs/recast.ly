var options = {
  part: 'snippet',
  q: "Bob Seger",
  maxResults: 5,
  type: 'video',
  videoEmbeddable: true,
  key: window.YOUTUBE_API_KEY
};

var searchYouTube = (options, callback) => {
  // TODO
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    contentType: 'application/json',
    success: function(data){
      // console.log(data);
        callback(data);
    },
    error: function(data){
      console.log("error!");
    }
  });
};

window.searchYouTube = searchYouTube;
