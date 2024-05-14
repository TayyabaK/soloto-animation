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
    const gifSource = [
        gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10,
        gif11, gif12, gif13, gif14, gif15, gif16, gif17, gif18, gif19, gif20,
        gif21, gif22, gif23, gif24, gif25, gif26, gif27, gif28, gif29, gif30
    ];

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showGif, setShowGif] = useState(false);
    const [gifIndex, setGifIndex] = useState(0);

    const videoRef = useRef(null);

    useEffect(() => {
        let timeout;
        if (showGif && gifIndex < numbers.length) {
            timeout = setTimeout(() => {
                setGifIndex(gifIndex + 1);
            }, 2500);
        } else if (gifIndex >= numbers.length) {
            setShowGif(false);
            setIsVideoPlaying(false);
        }
        return () => clearTimeout(timeout);
    }, [showGif, gifIndex, numbers]);

    const handleVideoEnded = () => {
        setIsVideoPlaying(false);
        setGifIndex(0);
        setShowGif(true);
    };

    const handleStartAnimation = () => {
        setIsVideoPlaying(true);
        setShowGif(false);
        setGifIndex(0);
    };

    return (
        <div className="app-container">
            <div>
                {isVideoPlaying && !showGif && (
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

                {showGif && gifIndex < numbers.length && (
                    <img src={gifSource[numbers[gifIndex] - 1]} alt="Animated GIF" className="animation" />
                )}

                <div className="lottery-bar">
                    {numbers.map((number, index) => (
                        <div key={index} className="circle">
                            {gifIndex > index ? (
                                <img src={gifSource[numbers[index] - 1]} alt={`GIF ${index + 1}`} className="gif" />
                            ) : (
                                <div className="circle"></div>
                            )}
                        </div>
                    ))}
                </div>

                <button onClick={handleStartAnimation} disabled={isVideoPlaying || showGif}>
                    {isVideoPlaying || showGif ? 'Playing Animation...' : 'Start Animation'}
                </button>
            </div>
        </div>
    );
};

export default Animation;
