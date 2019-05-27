import axios from 'axios';

const KEY = 'AIzaSyBGo4ep7J7svtCxgo4Y6Godx8UjQFnJxIw'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
});