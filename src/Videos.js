import React, { useState, useEffect } from 'react';
import "./Videos.css";
import "./Header.js";

const my_API = "AIzaSyB8LTFV_8Hf5uPzbzoUNExSv82AU_2G9aU"


const API_KEY = my_API;

// Function to get YouTube videos
function Videos({inputValue}) {
    const [videos, setVideos] = useState([]);
    

    const getVideos = async () => {
    // Define the search query
    const query = inputValue;

    // Fetch the data from the YouTube API
    const response = await fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${inputValue}&type=video&key=${API_KEY}`);
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
                    <div className="video-item">
                    <li key={video.videoId}>
                        <a href={`https://www.youtube.com/watch?v=${video.videoId}`}>
                            <img src={video.thumbnail} alt={video.title} />
                            
                            <p>{video.title}</p>
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
