import { useState } from "react";

import Fixperts from "../assets/Fixperts.mp4"; // Ensure this path matches your project structure
import "./VideoGallery.css"; // Rename CSS file to remove space

function VideoGallery() {
  const [index, setIndex] = useState(0);

  // Video array
  const videos = [Fixperts]; // Add more videos if needed

  // Navigation functions
  function goToNextVideo() {
    setIndex((prevIndex) => (prevIndex + 1) % videos.length);
  }

  function goToPreviousVideo() {
    setIndex((prevIndex) => (prevIndex - 1 + videos.length) % videos.length);
  }

  return (
    <div className="video-gallery-container">
      <header className="video-gallery-header">
        <h1>Video Gallery</h1>
        <p>Explore my collection of videos showcasing various topics and projects.</p>
      </header>
      {/* Display video or fallback message */}
      {videos.length > 0 ? (
        <video
          src={videos[index]}
          controls
          className="video-player"
          key={videos[index]} // Reload video when changing
        />
      ) : (
        <p>No videos available</p>
      )}
      {/* Navigation buttons */}
      <div className="video-gallery-buttons">
        <button onClick={goToPreviousVideo} className="video-gallery-button">
          Previous
        </button>
        <button onClick={goToNextVideo} className="video-gallery-button">
          Next
        </button>
      </div>
    </div>
  );
}

export default VideoGallery;
