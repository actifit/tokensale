import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';
export default function Landing() {

    return (
        <div id="buy" className="u-invest u-flex-around u-flex-column">
            <Zoom>
                <div className="u-invest-var">
                    <div className="u-flex-between">
                        <div>Total Contributed: 1,000,000</div>
                        <div>Total Rewards 1,000,000</div>
                    </div>
                    <div className="u-invest-var-main">
                        <div>
                            <img className="u-invest-var-main-color" src="/assets/img/bar_back.png" style={{ width: "70%" }} />
                            <div className="u-invest-var-main-num" style={{ left: "70%" }}>70%</div>
                        </div>
                    </div>
                </div>
                <div className="u-invest-title">INVEST NOW TO WIN UP TO</div>
                <div className="u-invest-2000 u-flex-around">$ 200,000</div>
            </Zoom>
            <div className="u-invest-items u-responsive">
                <Fade left>
                    <div className="u-invest-item">
                        <div className="u-invest-item-title1 u-flex-around u-flex-column">
                            AFITX
                            <img src="/assets/img/afitx.svg" />
                        </div>
                        <div className="u-invest-item-title2 u-flex-column">
                            Governance Token
                        </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Core DeFi token </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp; Further Decentralize Actifit </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Voting </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp; Fit Loans</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Increase User Rank</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Core DeFi token </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Yield Farms, Pools & Vaults (Workouts & Shakes) </div>
                        <div className="u-flex-around invest-btn u-btn u-responsive-after">BUY AFITX </div>
                    </div>
                </Fade>
                <Fade right>
                    <div className="u-invest-item">
                        <div className="u-invest-item-title1 u-flex-around u-flex-column">
                            AFIT
                            <img src="/assets/img/afit.svg" />
                        </div>
                        <div className="u-invest-item-title2 u-flex-column">
                            Utility Token
                        </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Buy fitness products</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Challenge your friends</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Gamification</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Participate in contests</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Increase User Rank</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Reward friends for tracking fitness activity</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Yield Farms, Pools & Vaults (Workouts & Shakes) </div>
                        <div className="u-flex-around invest-btn u-btn u-responsive-after">BUY AFIT</div>
                    </div>
                </Fade>
            </div>
            <div className="u-invest-items u-responsive-before" style={{ marginTop: "0" }}>
                <Zoom>
                    <div className="u-invest-item">
                        <div className="u-flex-around invest-btn u-btn">BUY AFITX </div>
                    </div>
                </Zoom>
                <Zoom>
                    <div className="u-invest-item">
                        <div className="u-flex-around invest-btn u-btn">BUY AFITX</div>
                    </div>
                </Zoom>
            </div>
            <img className="invest_money" src="/assets/img/money1.png" />
        </div>
    );
}
