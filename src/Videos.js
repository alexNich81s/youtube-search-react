import React, { useState, useEffect } from 'react';
import "./Videos.css";
import "./Header.js";




const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

// Function to get YouTube videos
function Videos({inputValue}) {
    const [videos, setVideos] = useState([]);
    

    const getVideos = async () => {
    // Define the search query
    const query = inputValue;

    // Fetch the data from the YouTube API
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${inputValue}&type=video&key=${API_KEY}`);
    const data = await response.json();

    // Extract the video information from the data
    const videosData = data.items.map(item => {
        return {
            title: item.snippet.title,
            videoId: item.id.videoId,
            description: item.snippet.description,
            thumbnail: item.snippet.thumbnails.default.url,
        };
   
    });

    // Set the videos state
    setVideos(videosData);
}

useEffect(() => {
    getVideos();
}, [inputValue]);
// Function to display the videos
return (
    <div className="videos_list">
        <ul>
            {
                videos.map(video => (
                    <div className="video-item w3-card">
                    <li key={video.videoId}>
                        <a href={`https://www.youtube.com/watch?v=${video.videoId}`}>
                            <img className="video-thumbnail" src={video.thumbnail} alt={video.title} />
                            
                            <p className="video-title">{video.title}</p>
                        </a>
                            
                        <p className="description">{video.description}</p>
                    </li>
                    </div>
                ))}
        </ul>
    </div>
);
}

// Call the getVideos function
export default Videos;


