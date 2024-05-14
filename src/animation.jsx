import React, { useState, useRef, useEffect } from 'react';
import './App.css'; // Import your CSS file for styling

import videoSource from './assets/soloto-machine.mp4'; // Import your video file

import gif1 from './assets/1.gif'; // Import your GIF file
import gif2 from './assets/2.gif'; // Import your GIF file
import gif3 from './assets/3.gif'; // Import your GIF file
import gif4 from './assets/4.gif'; // Import your GIF file
import gif5 from './assets/5.gif'; // Import your GIF file
import gif6 from './assets/6.gif'; // Import your GIF file
import gif7 from './assets/7.gif'; // Import your GIF file
import gif8 from './assets/8.gif'; // Import your GIF file
import gif9 from './assets/9.gif'; // Import your GIF file
import gif10 from './assets/10.gif'; // Import your GIF file
import gif11 from './assets/11.gif'; // Import your GIF file
import gif12 from './assets/12.gif'; // Import your GIF file
import gif13 from './assets/13.gif'; // Import your GIF file
import gif14 from './assets/14.gif'; // Import your GIF file
import gif15 from './assets/15.gif'; // Import your GIF file
import gif16 from './assets/16.gif'; // Import your GIF file
import gif17 from './assets/17.gif'; // Import your GIF file
import gif18 from './assets/18.gif'; // Import your GIF file
import gif19 from './assets/19.gif'; // Import your GIF file
import gif20 from './assets/20.gif'; // Import your GIF file
import gif21 from './assets/21.gif'; // Import your GIF file
import gif22 from './assets/22.gif'; // Import your GIF file
import gif23 from './assets/23.gif'; // Import your GIF file
import gif24 from './assets/24.gif'; // Import your GIF file
import gif25 from './assets/25.gif'; // Import your GIF file
import gif26 from './assets/26.gif'; // Import your GIF file
import gif27 from './assets/27.gif'; // Import your GIF file
import gif28 from './assets/28.gif'; // Import your GIF file
import gif29 from './assets/29.gif'; // Import your GIF file
import gif30 from './assets/30.gif'; // Import your GIF file




const Animation = ({ numbers }) => {

    const gifSource = [gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10, gif11, gif12, gif13, gif14, gif15, gif16, gif17, gif18, gif19, gif20, gif21, gif22, gif23, gif24, gif25, gif26, gif27, gif28, gif29, gif30];

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showGif, setShowGif] = useState(false);
    const [currentGifIndex, setCurrentGifIndex] = useState(0);
    // const [gifSource, setGifSource] = useState('');

    const videoRef = useRef(null);

    // Function to handle video end event
    // Function to handle video end event
    const handleVideoEnded = () => {
        setIsVideoPlaying(false); // Pause the video
        setShowGif(true); // Show the GIF animation

        setTimeout(() => {
            setCurrentGifIndex(numbers[0] - 1);
        }, 3000 * 1);


        setTimeout(() => {
            setCurrentGifIndex(numbers[1] - 1);
        }, 3000 * 2);

        setTimeout(() => {
            setCurrentGifIndex(numbers[2] - 1);
        }, 3000 * 3);

        setTimeout(() => {
            setCurrentGifIndex(numbers[3] - 1);
        }, 3000 * 4);

        setTimeout(() => {
            setCurrentGifIndex(numbers[4] - 1);
        }, 3000 * 5);

        setTimeout(() => {
            setCurrentGifIndex(numbers[5] - 1);
        }, 3000 * 6);

        setTimeout(() => {
            setShowGif(false);
        }, 3000 * 7);

    };

    // Function to handle button click to start animation
    const handleStartAnimation = () => {
        setIsVideoPlaying(true); // Start playing the video
        setShowGif(false); // Hide the GIF animation
        //videoRef.current.play(); // Play the video
    };

    useEffect(() => {
        setCurrentGifIndex(numbers[0]);
    }, [numbers]);

    return (
        <div className="app-container">
            <div>
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
                    <img src={gifSource[currentGifIndex]} alt="Animated GIF" className="animation" />
                )}

                {/* Button to start the animation */}
                <button onClick={handleStartAnimation}>
                    {isVideoPlaying ? 'Playing Video...' : 'Start Animation'}
                </button>
            </div>
            <div className="lottery-bar">

            </div>

        </div>
    );
};

export default Animation;
