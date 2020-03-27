import React from "react";

const VideoDetail = ({ video }) => {
    if (!video) {
        return <div>No Video selected</div>;
    }
    return <div>{video.snippet.title}</div>;
};

export default VideoDetail;
