import React from 'react'
import { connect } from 'react-redux';
import './GameSettings.css'


const GameSettings = ( {

    startEasy, startMedium, startHard, startCrazy
}) => (
    <>
    <div className='container h-100 m-auto'>
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
                        <button className="btn btn-success form-control" onClick={() => {}}>GO</button>
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
                        <button className="btn btn-primary form-control" onClick={() => {}}>GO</button>
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
                        <button className="btn btn-danger form-control" onClick={() => {}}>GO</button>
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
                            <div className="col-6">15 Seconds</div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-6">Stars</div>
                            <div className="col-6">25</div>
                        </div>               
                    </div>
                    <div className="text-center m-2">
                        <button className="btn btn-dark form-control" onClick={() => {}}>GO</button>
                    </div>
                </div>
            </div>

        </div>

    </div>
    </>
);

const mapStateToProps = (state) => {
    return {
        state
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        startEasy() {

        },
        startMedium() {

        },
        startHard() {

        },
        startCrazy() {

        }
    }
}

export const ConnectedGameSettings = connect(mapStateToProps, mapDispatchToProps)(GameSettings);