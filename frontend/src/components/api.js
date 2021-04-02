/*

API STUFF:

Content Details:                https://www.googleapis.com/youtube/v3/activities?part=snippet%2CcontentDetails&channelId=Channel_id&key=API
All Threads Related to Channel: https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&allThreadsRelatedToChannelId=Channel_id&key=YOUR_API_KEY
Comment Threads:                https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=Video_id&key=YOUR_API_KEY

*/

import axios from 'axios';
const KEY = 'AIzaSyCQCCOurp1uYGYyj_hJT1GYGrAlbPEGxBs';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: '5',
        key: KEY
    }
})