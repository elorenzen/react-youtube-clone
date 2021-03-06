import React from 'react';

const VideoItem = ({video, onVideoSelect}) => {
    const watchLink=`https://www.youtube.com/watch?v=${video.id.videoId}`;

    return (
        <div className="item" onClick={() => onVideoSelect(video)}>
            <img className="ui image" src={video.snippet.thumbnails.default.url} alt={video.snippet.title} />
            <div className="content">
                <a className="header" href={watchLink}>
                    {video.snippet.title}
                </a>
            </div>
        </div>
    )
};

export default VideoItem;