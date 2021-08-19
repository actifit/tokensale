/* eslint-disable */


import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';

import ReactDOM from 'react-dom';
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';

import {Link} from 'react-scroll'

// Random component
const Completionist = () => <div className="token-div-top">Token Sale <span>CONCLUDED!</span></div>;

const tsStartDate = 1631203200000;
const tsEndDate = 1631376000000;

// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (Date.now() < tsEndDate){
	return '';
  }else if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
	return <div><div className="header-token-div-top">Token Sale <span>ENDS</span> in</div><div className="header-token-div-down">{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</div></div>;
  }
};


export default function Landing() {

    return (
        <div className="u-header u-flex-around u-flex-column">
            <div className="u-flex-around u-responsive">
                <Zoom>
                    <div className="u-header-desc-div">
                        <div className="u-header-title1">ACTIFIT DEFI IS LAUNCHING ON BINANCE SMART CHAIN</div>
                        <div className="u-header-title2">TAKE PART IN ACTIFIT’S MASSIVE TOKEN SALE NOW!</div>
                        <div className="u-header-desc">Actifit DeFi is the financial arm in the Actifit ecosystem, launching on Binance Smart Chain. It is an innovative concept, that is planned as a cross blockchain platform, connecting Actifit on Hive to BSC, and crossing the DeFi functionality and the DeFi rewards back to Actifit app with a<span> multi-token rewarding system. </span></div>
                        <Link className="buy-btn u-flex-around u-btn" to="buy" spy={true} smooth={true}>Buy Now!</Link>
                    </div>
                </Zoom>
                <Fade right>
                    <div className="u-flex-end">
                        <div className="u-video u-flex-around">
                            <img src="/images/triangle.svg" />
                        </div>
                        <img className="oximg" img src="/images/OX.png" />
                    </div>
                </Fade>
            </div>
            <Zoom>
                <div className="header-down u-flex-around">
                    <div className="header-token-div u-flex-around u-flex-column">
                        <Countdown date={tsEndDate} renderer={renderer}/>
                    </div>
                </div>
            </Zoom>
            <img className="money1img" img src="/images/money1.png" />
        </div>
    );
}
