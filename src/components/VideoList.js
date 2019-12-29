import React from 'react';
import VideoItem from './VideoItem';

//const VideoList = (props) => { instead of props.videos we can extrat videos directly using bellow 

const VideoList = ({ videos, onVideoSelect}) => {

     const iteratedList = videos.map((video)=>{
         return <VideoItem key={video.id.videoId} video={video} onVideoSelect={onVideoSelect}/>
    });
    return <div className="ui relaxed devided list">{iteratedList}</div>
}

export default VideoList;