import React from 'react';

function Logo(props) {
    const { fontSize, bold } = props;
    return (
        <p style={{fontFamily: 'zongyi', color: 'rgb(88, 180, 222)', fontSize: fontSize || '24px', fontWeight: bold ? 'bolder': 'normal'}}>
            ObjC
            <span style={{color: 'rgb(221,78,91)'}}>UI</span>
            <span style={{fontSize: '8px', color: 'rgb(33, 35, 42)', backgroundColor: 'white', padding: '4px', paddingTop: '0', paddingBottom: '2px', marginLeft: '4px',borderRadius: '2px', verticalAlign: 'top'}}>beta</span>
        </p>
    );
}

export default Logo;