import React from "react";
import VideoItem from "./VideoItem";

const VideoList = ({ videos }) => {
    const renderedList = videos.map(video => {
        return <VideoItem />;
    });
    console.log(videos);
    return <div>{renderedList}</div>;
};

export default VideoList;
