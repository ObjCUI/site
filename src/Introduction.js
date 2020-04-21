import React from 'react';
import Logo from './Logo';
import './App.css';
function Introduction() {
    return (
        <div className="introduction">
            <Logo fontSize='56px' bold={true}/>
            <p className="desc">
                A declarative, data-driven framework for building CocoaTouch user interface.
            </p>
            <button className="get-start" onClick={() => {
                window.location = "https://objcui.github.io/docs/";
            }}>Get Stared</button>
        </div>
    );
}

export default Introduction;