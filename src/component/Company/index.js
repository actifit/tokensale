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
                    <div className="u-flex-around"><img src="/assets/img/company1.svg" /></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><img src="/assets/img/company2.svg" /></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><img src="/assets/img/company3.svg" /></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><img src="/assets/img/company4.svg" /></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around u-company-flag"><img src="/assets/img/company5.svg" /></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><img src="/assets/img/company6.svg" /></div>
                </Zoom>
                <Zoom>
                    <div className="u-flex-around"><img src="/assets/img/company7.svg" /></div>
                </Zoom>
            </div>
        </div>
    );
}
