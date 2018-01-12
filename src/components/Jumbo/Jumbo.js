import React from 'react';
import './Jumbo.css';

const Jumbo = props => (
    <div className='row'>
        <div className="jumbotron jumbo">
            <h1 className="text-center">Clicky Game!</h1>
            <h2 className="text-center">Click on an image to earn points, but don't click on any more than once!</h2>
        </div>
    </div>
);
export default Jumbo;