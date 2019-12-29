import axios from 'axios';

const KEY = 'AIzaSyDaU6miY4Y5hGbwmfT4s0euJWggNk0t-CM';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        type: 'video',
        key: KEY      // we ned to append this key https://www.googleapis.com/youtube/v3?key=AIzaSyDaU6miY4Y5hGbwmfT4s0euJWggNk0t-CM  like this
        // q - we are not including here we attache it with search terms
    }
});