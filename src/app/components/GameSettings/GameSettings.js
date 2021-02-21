import React from 'react'
import { connect } from 'react-redux';
import './GameSettings.css'
import axios from 'axios';

import { setTime, setStars, setLevel, setStatus, setState } from '../../actions'

const GameSettings = ( {

    startEasy, startMedium, startHard, startCrazy, setState
}) => {

    const url = "http://localhost:8888";
    const getGameRecords = async () => {
        const { data } = await axios.post(url + "/record");
        if (!data) { throw new Error(); }
        setState({...data});
    }

    const initiateEasy = (e) => {
        e.preventDefault();
        getGameRecords();
        startEasy();
    }

    return (
    <>
    <div className='container h-100 d-flex flex-column justify-content-center'>
        <div className="text-center">
            <h1 className="text-center title d-inline">Star Match</h1>
            <div className="dropdown d-inline m-2">
                <img src="https://pics.freeicons.io/uploads/icons/png/6668767391556258248-512.png" style={{maxWidth: '20px'}}/>
                <div className="help p-4">
                    <p>Click the number card(s) that sum up to the number of stars</p>
                    <p>More complex your combination is, more points you will earn (eg. 2+3+4 wins 9)</p>
                    <p>Be quick and earn <i>bonus points</i> for time remaining</p>
                </div>
            </div>
        </div>

        <div className="m-5">
            <div className="row">
                <div className="level col-sm card p-0">
                    <div className="card-header">
                        <h3 className="level-title text-center display-4">Easy</h3>
                    </div>
                    <div className="card-body">
                        <div className="level-desc py-5">
                            <div className="row justify-content-center">
                                <div className="col-6">Time</div>
                                <div className="col-6">25 Seconds</div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6">Stars</div>
                                <div className="col-6">9</div>
                            </div>               
                        </div>
                        <div className="text-center m-2">
                            <button className="btn btn-success form-control" onClick={(e) => initiateEasy(e)}>GO</button>
                        </div>
                    </div>
                </div>
                <div className="level col-sm card p-0">
                    <div className="card-header">
                        <h3 className="level-title text-center display-4">Medium</h3>
                    </div>
                    <div className="card-body">
                        <div className="level-desc py-5">
                            <div className="row justify-content-center">
                                <div className="col-6">Time</div>
                                <div className="col-6">20 Seconds</div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6">Stars</div>
                                <div className="col-6">16</div>
                            </div>               
                        </div>
                        <div className="text-center m-2">
                            <button className="btn btn-primary form-control" onClick={() => startMedium()}>GO</button>
                        </div>
                    </div>
                </div>
                <div className="level col-sm card p-0">
                    <div className="card-header">
                        <h3 className="level-title text-center display-4">Hard</h3>
                    </div>
                    <div className="card-body">
                        <div className="level-desc py-5">
                            <div className="row justify-content-center">
                                <div className="col-6">Time</div>
                                <div className="col-6">15 Seconds</div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6">Stars</div>
                                <div className="col-6">16</div>
                            </div>               
                        </div>
                        <div className="text-center m-2">
                            <button className="btn btn-danger form-control" onClick={() => startHard()}>GO</button>
                        </div>
                    </div>
                </div>
                <div className="level col-sm card p-0">
                    <div className="card-header">
                        <h3 className="level-title text-center display-4">Crazy</h3>
                    </div>
                    <div className="card-body">
                        <div className="level-desc py-5">
                            <div className="row justify-content-center">
                                <div className="col-6">Time</div>
                                <div className="col-6">10 Seconds</div>
                            </div>
                            <div className="row justify-content-center">
                                <div className="col-6">Stars</div>
                                <div className="col-6">25</div>
                            </div>               
                        </div>
                        <div className="text-center m-2">
                            <button className="btn btn-dark form-control" onClick={() => startCrazy()}>GO</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </>
    )
};

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        startEasy() {   // Easy - 25 Sec, 9
            dispatch(setTime(25));
            dispatch(setStars(9));
            dispatch(setLevel("easy"));
            dispatch(setStatus("active"));
        },
        startMedium() { // Medium - 20 Sec, 16
            dispatch(setTime(20));
            dispatch(setStars(16));
            dispatch(setLevel("medium"));
            dispatch(setStatus("active"));
        },
        startHard() {   // Hard - 15 Sec, 16
            dispatch(setTime(15));
            dispatch(setStars(16));
            dispatch(setLevel("hard"));
            dispatch(setStatus("active"));
        },
        startCrazy() {  // Crazy = 10 Sec, 25
            dispatch(setTime(10));
            dispatch(setStars(25));
            dispatch(setLevel("crazy"));
            dispatch(setStatus("active"));
        },
        setState(state) {
            dispatch(setState(state));
        }
    }
}

export const ConnectedGameSettings = connect(mapStateToProps, mapDispatchToProps)(GameSettings);