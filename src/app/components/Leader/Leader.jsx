import React from 'react';
import { connect } from 'react-redux';

const Leader = ({
    rank, name, score
}) => {

    const determineHeader = (rank) => {
        if (rank === 1) {
            return <img src="https://e7.pngegg.com/pngimages/973/360/png-clipart-gold-medal-gold-medal-medal-gold-thumbnail.png" className="mx-1 w-25"/>
        } else if (rank === 2) {
            return <img src="https://e7.pngegg.com/pngimages/151/999/png-clipart-2nd-place-silver-medal-illustration-silver-medal-award-silver-medal-ribbon-medal-thumbnail.png"  className="mx-1 w-25"/>
        } else if (rank === 3) {
            return <img src="https://e7.pngegg.com/pngimages/564/310/png-clipart-top-3-ribbon-minnesota-timberwolves-target-center-1989-90-nba-season-2017-18-nba-season-milwaukee-bucks-bronze-medal-sport-medal-thumbnail.png"  className="mx-1 w-25"/>
        } else {
            return <div className="d-inline-block mx-2">{rank}</div>
        }
    }

    return (
        <>
            <div className="row mx-auto">
                {determineHeader(rank)}
                <div className="d-inline-block col">{name}</div>
                <div className="d-inline-block col">{score}</div>
            </div>
        </>
    )
}

const mapStateToProps = (state, ownProps) => {
    let rank = ownProps.rank+1;
    let name = ownProps.name;
    let score = ownProps.score;
    return { rank, name, score };
}

export const ConnectedLeader = connect(mapStateToProps)(Leader);