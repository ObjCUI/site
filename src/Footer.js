import React from 'react';
import './App.css';

function Footer() {
    return (
        <footer>
            <div className="author-wrapper" >
                <img alt="" onClick={() => {window.location="https://github.com/stephenwzl"}} src="https://avatars1.githubusercontent.com/u/10472240?s=60&u=6dbdd0f4f113e9312e199b806e2285b526bc3c9b&v=4"/>
                <p>stephenwzl <br/>Open Source</p>
            </div>
            <p>Copyright © 2020 by stephenwzl</p>
        </footer>
    );
}

export default Footer;