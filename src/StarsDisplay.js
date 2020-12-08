import React from 'react';

const StarsDisplay = props => (
    <>
        {Array.from({length: props.count}, (_, i) => 1+i).map(starId =>
            <div className="star" key={starId}></div>
            )}
    </>
);
export default StarsDisplay;