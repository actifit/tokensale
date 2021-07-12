/* eslint-disable */


import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';
export default function Landing() {

    return (
        <div className="u-company">
            <Fade up>
                <div className="u-company-title u-flex-around">
                    <div className="u-flex-around">PARTNERS</div>
                </div>
            </Fade>
            <div>
                <Zoom>
                    <div className="u-flex-around"><a href="https://ark.io/" target="_blank"><img src="/images/company1.svg" /></a></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><a href="https://actifit.io/@adventureready" target="_blank"><img src="/images/company2.svg" /></a></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><a href="https://sportstalksocial.com/" target="_blank"><img src="/images/company3.svg" /></a></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><a href="https://actifit.io/@beachready" target="_blank"><img src="/images/company4.svg" /></a></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around u-company-flag"><a href="https://coinpedia.org/" target="_blank"><img src="/images/company5.svg" /></a></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><a href="https://marketsquare.io/" target="_blank"><img src="/images/company6.svg" /></a></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><a href="https://appics.com/" target="_blank"><img src="/images/company7.svg" /></a></div>
                </Zoom>
            </div>
        </div>
    );
}
