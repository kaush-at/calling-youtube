import React from 'react';
import '../styles/VideoItem.css';

const VideoItem = ({ video, onVideoSelect}) =>{

    return (
         // in here we need to arrow functio becouse i need to invoke callback function with an argument
        <div className="item" onClick={() => onVideoSelect(video)}> 
            <div className="block-image" >
                <img className="ui image" src={video.snippet.thumbnails.medium.url} alt={video.snippet.title}/>
            </div>
            <div className="block-content" >
                    <div className="content">
                    <div className="header">{video.snippet.title}</div>
                        
                    </div>
             </div>
        </div>
    );
}

export default VideoItem;