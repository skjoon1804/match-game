import React from 'react';
import './Leaderboard.css'

const Leaderboard = () => {

    return (
        <div className="leaderboard m-3 p-3">
            <h3 className="title text-center">Leaderboard</h3>
            <div className="container border p-3">
                <div className="row">
                    <div className="easy col-sm">
                        <h6 className="text-center">Easy</h6>
                        <div className="my-2">
                            <img src="https://e7.pngegg.com/pngimages/973/360/png-clipart-gold-medal-gold-medal-medal-gold-thumbnail.png" className="mx-2 w-25"/>
                            <div className="d-inline-block w-50">skjoon1804</div>
                            <div className="d-inline-block w-25">1500</div>
                        </div>
                        <div>
                            <img src="https://e7.pngegg.com/pngimages/151/999/png-clipart-2nd-place-silver-medal-illustration-silver-medal-award-silver-medal-ribbon-medal-thumbnail.png" />
                        </div>
                        <div>
                            <img src="https://e7.pngegg.com/pngimages/564/310/png-clipart-top-3-ribbon-minnesota-timberwolves-target-center-1989-90-nba-season-2017-18-nba-season-milwaukee-bucks-bronze-medal-sport-medal-thumbnail.png" />
                        </div>
                    </div>
                    <div className="medium col-sm">
                        <h6 className="text-center">Medium</h6>
                    </div>
                    <div className="hard col-sm">
                        <h6 className="text-center">Hard</h6>
                    </div>
                    <div className="crazy col-sm">
                        <h6 className="text-center">Crazy</h6>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Leaderboard;