import React from 'react';

function Logo(props) {
    const { fontSize, bold } = props;
    return (
        <p style={{fontFamily: 'zongyi', color: 'rgb(88, 180, 222)', fontSize: fontSize || '24px', fontWeight: bold ? 'bolder': 'normal'}}>
            ObjC
            <span style={{color: 'rgb(221,78,91)'}}>UI</span>
        </p>
    );
}

export default Logo;