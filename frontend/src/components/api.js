/*

API STUFF:

Content Details:                https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=Channel_id&key=API
All Threads Related to Channel: https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&allThreadsRelatedToChannelId=Channel_id&key=YOUR_API_KEY
Comment Threads:                https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=Video_id&key=YOUR_API_KEY

*/

const KEY = 'AIzaSyA3-DS4lNWkaw-6K3WAvY2q4QFptnTdUL0';

export function fetchDataFromYoutube(topic){
    var baseURL = 'https://www.googleapis.com/youtube/v3/';
    var part = 'snippet'; //contentDetails
    var maxResults = '50';
    //var q = query;
    var topicId = topic;
    var type = 'video';
    var key = KEY;
    var regionCode = 'US';
    var chart = 'mostPopular'

    console.log("API Used!")
    return fetch(`${baseURL}search?part=${part}&maxResults=${maxResults}&q=${topicId}&type=${type}&regionCode=${regionCode}&key=${key}`)
    .then(res => res.json())
    .then(json => {
        return json
    })
    .catch(err => console.log(err))
}
