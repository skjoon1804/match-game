import React from 'react';
import './Shape.css'

const Shape = props => (
    <>
        {Array.from({length: props.count}, (_, i) => 1+i).map(starId =>
            <div className="shape" key={starId}></div>
            )}
    </>
);
export default Shape;