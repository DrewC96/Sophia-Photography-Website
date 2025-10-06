import React from 'react';
import Me from '../assets/sunset of me .JPG';


export default function Home() {
    return (
        <div className="image-header-container">
            <h1 className="home-header">Welcome to Sophia's Print Shop!</h1>
            <img src={Me} alt="Sophia Rojas" className="home-image" />
        </div>
    );
}