import React from 'react';
import Video from "../assets/Video.mp4";
import "../styles/VideoBg.css";

const VideoBg = () => {
    return (
        <div className="container">
            <div className="overlay">
            </div>
            <video className="video"
                src={Video}
                autoPlay loop muted
            />
            <div className="text">
                <h1>Hey Homie!</h1>
                <h2>Don't be sad, everything will be fine. Nature is the best healer :)</h2>
            </div>
        </div>
    )
}

export default VideoBg;