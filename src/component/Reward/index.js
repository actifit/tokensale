import React, { useState } from 'react';
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
                <div className="u-reward-body-item">
                    <img src="/assets/img/hand.svg" />
                    <div className="u-flex-around">
                        <div className="u-reward-body-title u-flex-around">5</div>
                        <div className="u-reward-body-body u-flex-around">Random Winners sharing up to 100,000$ </div>
                    </div>
                </div>
                <div className="u-reward-body-item">
                    <img src="/assets/img/star.svg" />
                    <div className="u-flex-around">
                        <div className="u-reward-body-title">5</div>
                        <div className="u-reward-body-body">Top Investors sharing up to 100,000$</div>
                    </div>
                </div>
                <div className="u-reward-body-item">
                    <img src="/assets/img/graphic.svg" />
                    <div className="u-flex-around">
                        <div className="u-reward-body-title">200</div>
                        <div className="u-reward-body-body">First Investors to Receive extra AFITX airdrop</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
