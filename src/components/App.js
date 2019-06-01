import React from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import youtube from '../apis/youtube';
import VideoDetail from '../components/VideoDetail';

class App extends React.Component {
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
        this.onTermSubmit('live music');
    }

    onTermSubmit = async (term) => {
        const response = await youtube.get('/search', {
            params: {
                q: term
            }
        })
        this.setState({
            videos: response.data.items,
            selectedVideo: response.data.items[0]
        })
    };

    // video = fetched video object from YouTube API
    onVideoSelect = (video) => {
        this.setState({ selectedVideo: video });
    }

    render() {
        return (
        <div className='ui container'>
            <SearchBar onTermSubmit={this.onTermSubmit} />
            <div className='ui grid'>
                <div className="ui row">
                    <div className='eleven wide column'>
                        <VideoDetail video={this.state.selectedVideo}></VideoDetail>
                    </div>
                    <div className='five wide column'>
                        <VideoList videos={this.state.videos} onVideoSelect={this.onVideoSelect} />
                    </div>
                </div>
            </div>
        </div>
        )
    }
};

export default App;