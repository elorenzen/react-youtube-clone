import React from 'react';

const VideoItem = ({video}) => {
    const watchLink=`https://www.youtube.com/watch?v=${video.id.videoId}`;

    return (
        <div>
            <a href={watchLink}>
            <h3>{video.snippet.title}</h3>
            <img src={video.snippet.thumbnails.default.url} alt={video.snippet.description} />
            </a>
        </div>
    )
};

export default VideoItem;