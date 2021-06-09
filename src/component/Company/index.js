import React, { useState } from 'react';
import './style.css';
export default function Landing() {

    return (
        <div className="u-company">
            <div className="u-company-title u-flex-around">
                <div className="u-flex-around">PARTNERS</div>
            </div>
            <div>
                <div className="u-flex-around"><img src="/assets/img/company1.svg" /></div>
                <div className="u-flex-around"><img src="/assets/img/company2.svg" /></div>
                <div className="u-flex-around"><img src="/assets/img/company3.svg" /></div>
                <div className="u-flex-around"><img src="/assets/img/company4.svg" /></div>
                <div className="u-flex-around u-company-flag"><img src="/assets/img/company5.svg" /></div>
                <div className="u-flex-around"><img src="/assets/img/company6.svg" /></div>
                <div className="u-flex-around"><img src="/assets/img/company7.svg" /></div>
            </div>
        </div>
    );
}
