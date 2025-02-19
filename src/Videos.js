import React, { useState, useEffect, useCallback } from 'react';
import "./Videos.css";
import "./Header.js";




const API_KEY = process.env.REACT_APP_YOUTUBE_DATA_API_KEY;

// Function to get YouTube videos
function Videos({ searchQuery }) {
    const [videos, setVideos] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getVideos = async () => {
            if (!searchQuery.trim()) return; // Prevent empty search

            setLoading(true);
            setError(null);

            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${encodeURIComponent(searchQuery)}&type=video&key=${API_KEY}`
                );

                if (!response.ok) throw new Error("Failed to fetch videos");

                const data = await response.json();

                if (!data.items) throw new Error("No videos found");

                const videosData = data.items.map(item => ({
                    title: item.snippet.title,
                    videoId: item.id.videoId,
                    description: item.snippet.description,
                    thumbnail: item.snippet.thumbnails.default.url,
                }));

                setVideos(videosData);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getVideos();
    }, [searchQuery]);


return (
    
    <div className="videos_list">
        {loading && <p>Loading videos...</p>}
        {error && <p className="error">{error}</p>}
        <div className="videos-grid">
            {videos.map((video) => (
                <div key={video.videoId} className="video-item w3-card">
                    <a href={`https://www.youtube.com/watch?v=${video.videoId}`}>
                        <img className="video-thumbnail" src={video.thumbnail} alt={video.title} />
                        <p className="video-title">{video.title}</p>
                    </a>
                    <p className="description">{video.description}</p>
                </div>
            ))}
        </div>
    </div>
);

}

// Call the getVideos function
export default Videos;


