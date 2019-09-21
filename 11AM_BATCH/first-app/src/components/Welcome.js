import React from 'react';

let Welcome = () => {
    let green = {
        color : 'white',
        backgroundColor : 'limegreen'
    };
    return(
        <div>
            <h1 style={green}>Welcome to functional component</h1>
        </div>
    );
};

export  default Welcome;