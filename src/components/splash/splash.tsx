import React, {useEffect, useState} from "react";
import {Player} from "@lottiefiles/react-lottie-player";
import rocketlauncher from "../../rocketlauncher.json";

function LoadingScreen() {
    const [loadingText, setLoadingText] = useState('Launching...');

    useEffect(() => {
        const typingTimer = setInterval(() => {
            setLoadingText(prevText => {
                if (prevText === 'Launching...') {
                    return 'Launching';
                } else {
                    return prevText + '.';
                }
            });
        }, 500);

        return () => {
            clearInterval(typingTimer);
        };
    }, []);

    return (
        <div className="loading-screen">
            <div className="loading-animation">
                <Player
                    autoplay
                    loop
                    src={rocketlauncher}
                    style={{ width: '800px', height: '800px' }}
                />
            </div>
            <p className="loading-text">
                {loadingText}
            </p>
        </div>
    );
}
export default LoadingScreen;