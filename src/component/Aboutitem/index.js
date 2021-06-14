import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';
export default function Landing() {

    return (
        <div className="u-aboutitem u-responsive">
            <Fade down>
                <div className="u-aboutitem-item u-aboutitem-item-top u-flex-between u-flex-column">
                    <div className="u-aboutitem-title">5000+ Active Users</div>
                    <div className="u-aboutitem-line"></div>
                    <div className="u-aboutitem-img u-flex-around">
                        <img src="/assets/img/aboutitem1.svg" />
                    </div>
                </div>
            </Fade>
            <Fade up>
                <div className="u-aboutitem-item u-aboutitem-item-down u-flex-between u-flex-column">
                    <div className="u-aboutitem-img u-flex-around">
                        <img src="/assets/img/aboutitem2.svg" />
                    </div>
                    <div className="u-aboutitem-line"></div>
                    <div className="u-aboutitem-title">A Solid Project With a Long-Standing History</div>
                </div>
            </Fade>
            <Fade down>
                <div className="u-aboutitem-item u-aboutitem-item-top u-flex-between u-flex-column">
                    <div className="u-aboutitem-title">A Well-Experienced & Reputable Team </div>
                    <div className="u-aboutitem-line"></div>
                    <div className="u-aboutitem-img u-flex-around">
                        <img src="/assets/img/aboutitem3.svg" />
                    </div>
                </div>
            </Fade>
            <Fade up>
                <div className="u-aboutitem-item u-aboutitem-item-down u-flex-between u-flex-column">
                    <div className="u-aboutitem-img u-flex-around">
                        <img src="/assets/img/aboutitem4.svg" />
                    </div>
                    <div className="u-aboutitem-line"></div>
                    <div className="u-aboutitem-title">Ranked Number 1 Health App on State of the Dapps Website </div>
                </div>
            </Fade>
            <Fade down>
                <div className="u-aboutitem-item u-aboutitem-item-top u-flex-between u-flex-column">
                    <div className="u-aboutitem-title">Ranked Number 33 Among all Dapps on State of Dapps Website</div>
                    <div className="u-aboutitem-line"></div>
                    <div className="u-aboutitem-img u-flex-around">
                        <img src="/assets/img/aboutitem5.svg" />
                    </div>
                </div>
            </Fade>
        </div>
    );
}
