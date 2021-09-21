/* eslint-disable */


import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';


export default function Landing() {

    return (
        <div className="u-about u-flex-around u-responsive">
            <Fade left>
                <div className="u-about-order">
                    <div className="u-about-title">About Actifit</div>
                    <div className="u-about-desc">Actifit is a health-focused social project, that promotes healthier lifestyle by rewarding its users for auto-tracking their day to day fitness activities. Strongly established and running for 3 years now on Hive & Steem blockchains, with 5,000 active users and 300,000 tracked activity reports.
                        <br></br><br></br>
                        Using Actifit mobile app on Android / iOS allows you to earn token rewards via auto-tracking your everyday activity. Rewards include: AFIT tokens (Actifit’s own token), HIVE, STEEM and SPORTS token rewards via upvotes on supported blockchains and partner communities.
                        <br></br><br></br>
                        Actifit has expanded onto Binance Smart Chain (BSC), and with this expansion, opened the doors to the creation of Actifit DeFi.
                    </div>
                </div>
            </Fade>
            <Fade right>
                <div>
                    <img src="/images/2OX.png" />
                </div>
            </Fade>
        </div>
    );
}
