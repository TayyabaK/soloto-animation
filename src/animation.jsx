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

import png1 from './assets/1.png'; // Import your PNG file
import png2 from './assets/2.png'; // Import your PNG file
import png3 from './assets/3.png'; // Import your PNG file
import png4 from './assets/4.png'; // Import your PNG file
import png5 from './assets/5.png'; // Import your PNG file
import png6 from './assets/6.png'; // Import your PNG file
import png7 from './assets/7.png'; // Import your PNG file
import png8 from './assets/8.png'; // Import your PNG file
import png9 from './assets/9.png'; // Import your PNG file
import png10 from './assets/10.png'; // Import your PNG file
import png11 from './assets/11.png'; // Import your PNG file
import png12 from './assets/12.png'; // Import your PNG file
import png13 from './assets/13.png'; // Import your PNG file
import png14 from './assets/14.png'; // Import your PNG file
import png15 from './assets/15.png'; // Import your PNG file
import png16 from './assets/16.png'; // Import your PNG file
import png17 from './assets/17.png'; // Import your PNG file
import png18 from './assets/18.png'; // Import your PNG file
import png19 from './assets/19.png'; // Import your PNG file
import png20 from './assets/20.png'; // Import your PNG file
import png21 from './assets/21.png'; // Import your PNG file
import png22 from './assets/22.png'; // Import your PNG file
import png23 from './assets/23.png'; // Import your PNG file
import png24 from './assets/24.png'; // Import your PNG file
import png25 from './assets/25.png'; // Import your PNG file
import png26 from './assets/26.png'; // Import your PNG file
import png27 from './assets/27.png'; // Import your PNG file
import png28 from './assets/28.png'; // Import your PNG file
import png29 from './assets/29.png'; // Import your PNG file
import png30 from './assets/30.png'; // Import your PNG file

const Animation = ({ numbers }) => {

    const gifSource = [
        gif1, gif2, gif3, gif4, gif5, gif6, gif7, gif8, gif9, gif10,
        gif11, gif12, gif13, gif14, gif15, gif16, gif17, gif18, gif19, gif20,
        gif21, gif22, gif23, gif24, gif25, gif26, gif27, gif28, gif29, gif30
    ];

    const pngSource = [
        png1, png2, png3, png4, png5, png6, png7, png8, png9, png10,
        png11, png12, png13, png14, png15, png16, png17, png18, png19, png20,
        png21, png22, png23, png24, png25, png26, png27, png28, png29, png30
    ];

    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const [showGif, setShowGif] = useState(false);
    const [gifIndex, setGifIndex] = useState(-1);

    const videoRef = useRef(null);

    // Preload GIF and PNG images
    useEffect(() => {
        gifSource.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
        pngSource.forEach((src) => {
            const img = new Image();
            img.src = src;
        });
    }, []);

    useEffect(() => {
        let timeout;
        if (showGif && gifIndex < numbers.length) {
            timeout = setTimeout(() => {
                setGifIndex(prevIndex => prevIndex + 1);
            }, 1500);
        } else if (gifIndex >= numbers.length) {
            setShowGif(false);
            setIsVideoPlaying(false);
        }
        return () => clearTimeout(timeout);
    }, [gifIndex, showGif, numbers]);

    const handleVideoEnded = () => {
        setIsVideoPlaying(false);
        setGifIndex(-1);
        setShowGif(true);
    };

    const handleStartAnimation = () => {
        setIsVideoPlaying(true);
        setShowGif(false);
        setGifIndex(-1)
        if (videoRef.current) {
            videoRef.current.play();
        }
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

                {showGif && gifIndex < numbers.length && gifIndex >= 0 && (
                    <img src={gifSource[numbers[gifIndex] - 1]} alt="Animated GIF" className="animation" />
                )}

                <div className="lottery-bar">
                    {numbers.map((number, index) => (
                        <div key={index} className="circle" style={{ backgroundColor: "#543E6B" }}>                            {gifIndex >= index ? (
                            <img src={pngSource[numbers[index] - 1]} alt={`PNG ${index + 1}`} />
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
