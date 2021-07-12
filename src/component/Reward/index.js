/* eslint-disable */


import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';
export default function Landing() {

    return (
        <div className="u-reward u-flex-around u-flex-column">
            <div className="u-reward-header">
                <div className="u-flex-around">REWARDS DISTRIBUTED TO</div>
            </div>
            <div className="u-reward-line u-responsive-before">
                <div className="u-reward-line1"></div>
                <div className="u-reward-line2"></div>
            </div>
            <div className="u-reward-body u-flex-between u-responsive">
                <Fade left>
                    <div className="u-reward-body-item">
                        <img src="/images/hand.svg" />
                        <div className="u-flex-around">
                            <div className="u-reward-body-title u-flex-around">5</div>
                            <div className="u-reward-body-body u-flex-around">Random Winners sharing up to 100,000$ </div>
                        </div>
                    </div>
                </Fade>
                <Fade up>
                    <div className="u-reward-body-item">
                        <img src="/images/star.svg" />
                        <div className="u-flex-around">
                            <div className="u-reward-body-title">5</div>
                            <div className="u-reward-body-body">Top Investors sharing up to 100,000$</div>
                        </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="u-reward-body-item">
                        <img src="/images/graphic.svg" />
                        <div className="u-flex-around">
                            <div className="u-reward-body-title">200</div>
                            <div className="u-reward-body-body">First Investors to Receive extra AFITX airdrop</div>
                        </div>
                    </div>
                </Fade>
            </div>
        </div>
    );
}
