import React from 'react';
import loadinGif from '../images/loadingGif.gif';

const loading = () => {
    return (
        <div className="loading">
            <h4>rooms data loading...</h4>
            <img src={loadinGif} alt="Loading"/>
        </div>
    )
}

export default loading
