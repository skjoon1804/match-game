import React from 'react'

const PlayNumber = props => (
    <>
    {Array.from({length: 9}, (_, i) => 1+i).map(number =>
        <div className="number" key={number}>{number}</div>
    )}
    </>
);
export default PlayNumber;