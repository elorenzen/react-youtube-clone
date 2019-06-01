import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from '../components/VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({videos: response.data.items})
    };

    // video = fetched video object from YouTube API
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
        <div className='ui container'>
            <SearchBar onTermSubmit={this.onTermSubmit} />
            <VideoDetail video={this.state.selectedVideo}></VideoDetail>
            <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
        </div>
        )
    }
};

export default App;