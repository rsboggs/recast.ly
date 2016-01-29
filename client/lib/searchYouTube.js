var searchYouTube = (query, API_key, callback) => {
  // TODO
  console.log(query);
  var options = {
    part: 'snippet',
    key: 'AIzaSyAwsNEZeN-NVnojdZk_EM4ML5-NMdLJnMI',
    q: query,
    maxResults: 5,
    type: 'video',
    videoEmbeddable: true
  };
  $.ajax({
    url: 'https://www.googleapis.com/youtube/v3/search',
    type: 'GET',
    data: options,
    contentType: 'application/json',
    success: (data) => {
        callback(data);
    },
    error: (data) => {
      console.log("error!");
    }
  });
};

window.searchYouTube = searchYouTube;
