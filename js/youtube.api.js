var channel_id = "UCU5JicSrEM5A63jkJ2QvGYw";
var api_key = "AIzaSyDeK0H_XGXCEjIhmP9Re0SavHDZ3TU_nfU";

async function get_channel_details() {
    var youtube_response = await fetch(`https://www.googleapis.com/youtube/v3/channels?key=${api_key}&id=${channel_id}&part=snippet,statistics,status,contentDetails`);
    var youtube_data = await youtube_response.json()
    var youtube_detail = document.getElementById('youtube-detail');

    var image = document.createElement('img')
    image.src = youtube_data.items[0].snippet.thumbnails.high.url

    youtube_detail.appendChild(image)


}

get_channel_details();