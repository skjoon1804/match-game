import React from 'react';
import { connect } from 'react-redux';
import './Leaderboard.css'
import { ConnectedLeader } from '../Leader/Leader'
import { addEasyRecord, addMediumRecord, addHardRecord, addCrazyRecord } from '../../actions'
import axios from 'axios';

const Leaderboard = ({
    status, level, score, easyGroup, mediumGroup, hardGroup, crazyGroup,
    addEasyRecord, addMediumRecord, addHardRecord, addCrazyRecord
}) => {

    const url = "http://localhost:8888";
    const submitScore = async (e) => {
        e.preventDefault();
        let name = e.target[`name`].value;

        if (level === 'easy') {
            addEasyRecord(name, score)
            await axios.post(url + `/easy`, {
                easy: { name, score }
            })
        } else if (level === 'medium') {
            addMediumRecord(name, score)
            await axios.post(url + `/medium`, {
                medium: { name, score }
            })
        } else if (level === 'hard') {
            addHardRecord(name, score)
            await axios.post(url + `/hard`, {
                hard: { name, score }
            })

        } else if (level === 'crazy') {
            addCrazyRecord(name, score)
            await axios.post(url + `/crazy`, {
                crazy: { name, score }
            })
        }
        document.getElementById("overlay").style.display = "none";
    }

    const closeOverlay = (e) => {
        e.preventDefault();
        document.getElementById("overlay").style.display = "none";
    }

    return (
        <>
            {status==='won'
                ? 
                <div id="overlay" className="w-100">
                    <div className="d-flex justify-content-center">
                        <form className="p-5 border border-dark" onSubmit={submitScore}>
                            <div className="form-group row">
                                <label htmlFor="name" className="col">Name</label>
                                <input type="text" className="col form-control" id="name" maxLength="10" required/>
                            </div>
                            <div className="form-group row">
                                <label htmlFor="level" className="col">Level</label>
                                <input type="text" className="col form-control-plaintext" id="level" value={level.toUpperCase()} readOnly />
                            </div>
                            <div className="form-group row">
                                <label htmlFor="score" className="col">Score</label>
                                <input type="text" className="col form-control-plaintext" id="score" value={score} readOnly />
                            </div>
                            <div className="d-flex justify-content-center">
                                <button type="submit" className="mx-2 btn btn-dark">Submit</button>
                                <button onClick={(e) => closeOverlay(e)} className="mx-2 btn btn-outline-danger">Cancel</button>
                            </div>
                        </form>
                    </div>
                </div>
                : null
            }
            <div className="leaderboard m-3 p-3">
                <h3 className="title text-center">Leaderboard</h3>
                <div className="container border p-3">
                    <div className="row">
                        <div className="easy col-sm border-right px-auto">
                            <h6 className="text-center">Easy</h6>    
                                {easyGroup.map((easy, index) => {
                                    return <ConnectedLeader key={index} rank={index} {...easy}/>
                                })}
                        </div>
                        <div className="medium col-sm border-right">
                            <h6 className="text-center">Medium</h6>
                                {mediumGroup.map((medium, index) => {
                                    return <ConnectedLeader key={index} rank={index} {...medium} />
                                })}
                        </div>
                        <div className="hard col-sm border-right">
                            <h6 className="text-center">Hard</h6>
                                {hardGroup.map((hard, index) => {
                                    return <ConnectedLeader key={index} rank={index} {...hard} />
                                })}
                        </div>
                        <div className="crazy col-sm">
                            <h6 className="text-center">Crazy</h6>
                                {crazyGroup.map((crazy, index) => {
                                    return <ConnectedLeader key={index} rank={index} {...crazy} />
                                })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const mapStateToProps = (state) => {
    let status = state.status;
    let level = state.level;
    let score = state.score;
    
    let easyGroup = state.easy;
    let mediumGroup = state.medium;
    let hardGroup = state.hard;
    let crazyGroup = state.crazy;

    return { status, level, score, easyGroup, mediumGroup, hardGroup, crazyGroup };
}

const mapDispatchToProps = (dispatch) => {
    
    return {
        addEasyRecord(name, score) {
            dispatch(addEasyRecord(name, score));
        },
        addMediumRecord(name, score) {
            dispatch(addMediumRecord(name, score));
        },
        addHardRecord(name, score) {
            dispatch(addHardRecord(name, score));
        },
        addCrazyRecord(name, score) {
            dispatch(addCrazyRecord(name, score));
        }
    }
}

export const ConnectedLeaderboard = connect(mapStateToProps, mapDispatchToProps)(Leaderboard);