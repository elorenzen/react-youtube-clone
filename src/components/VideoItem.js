import React from 'react';

const VideoItem = ({video}) => {
    const watchLink=`https://www.youtube.com/watch?v=${video.id.videoId}`;

    return (
        <div className="item">
            <img className="ui image" src={video.snippet.thumbnails.default.url} alt={video.snippet.description} />
            <div className="content">
                <a className="header" href={watchLink}>
                    {video.snippet.title}
                </a>
                <div className="description">{video.snippet.description}</div>
            </div>
        </div>
    )
};

export default VideoItem;