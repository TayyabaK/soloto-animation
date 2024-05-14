import React, { useState, useRef } from 'react';
import './App.css'; // Import your CSS file for styling

import videoSource from './assets/soloto-machine.mp4'; // Import your video file
import gifSource from './assets/1.gif'; // Import your GIF file

const App = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  const [showGif, setShowGif] = useState(false);

  const videoRef = useRef(null);

  // Function to handle video end event
  const handleVideoEnded = () => {
    setIsVideoPlaying(false); // Pause the video
    setShowGif(true); // Show the GIF animation
  };

  // Function to handle button click to start animation
  const handleStartAnimation = () => {
    setIsVideoPlaying(true); // Start playing the video
    setShowGif(false); // Hide the GIF animation
    //videoRef.current.play(); // Play the video
  };

  return (
    <div className="app-container">
      <h1>Video and GIF Animation</h1>
      
      {/* Display video if isVideoPlaying state is true */}
      {isVideoPlaying && (
        <video
          ref={videoRef}
          className="animation"
          src={videoSource}
          type="video/mp4"
          autoPlay
          muted
          onEnded={handleVideoEnded}
        >
          Your browser does not support the video tag.
        </video>
      )}

      {/* Display GIF if showGif state is true */}
      {showGif && (
        <img src={gifSource} alt="Animated GIF" className="animation" />
      )}

      {/* Button to start the animation */}
      <button onClick={handleStartAnimation}>
        {isVideoPlaying ? 'Playing Video...' : 'Start Animation'}
      </button>
    </div>
  );
};

export default App;
