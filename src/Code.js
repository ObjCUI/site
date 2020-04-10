import React from 'react';
import './App.css';
import LabelCodeImg from './images/labeldemo.png';
import LabelSimImg from './images/labelsim.png';
import StateSimImg from './images/statesim.png';
import StateCodeImg from './images/statedemo.png';

function CodeSamples() {
    return (
        <div className="code-samples">
            <div className="code-sample">
                <h3>Display A Simple Label</h3>
                <div className="code-image">
                    <img alt="" src={LabelCodeImg} />
                    <img alt="" src={LabelSimImg} />
                </div>
            </div>
            <div className="code-sample">
                <h3>Rendering Stateful Component</h3>
                <div className="code-image">
                    <img alt="" src={StateCodeImg} />
                    <img alt="" src={StateSimImg} />
                </div>
            </div>
        </div>
    );
}

export default CodeSamples;