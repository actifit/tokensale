import React, { useState } from 'react';
import './style.css';
export default function Landing(props) {
    // var flag = 0;
    // function ham_dropdown() {
    //     if (flag == 0) {
    //         flag = 1;
    //         document.getElementById("dropmenu").style.height = "280px";
    //     } else {
    //         flag = 0;
    //         document.getElementById("dropmenu").style.height = "0";
    //     }
    // };

    return (
        <div className="navbars">
            <div className="navbars-top u-flex-between">
                <a className="Actifit-btn u-flex-around u-btn u-responsive-before">Actifit.io</a>
                <div className="social-icons u-flex-between u-responsive-before">
                    <a><img src="/assets/img/facebook.svg" /></a>
                    <a><img src="/assets/img/instagram.svg" /></a>
                    <a><img src="/assets/img/cartoon.svg" /></a>
                    <a><img src="/assets/img/twitter.svg" /></a>
                    <a><img src="/assets/img/ariplane.svg" /></a>
                </div>
                <div className="u-flex-around u-responsive-after">
                    <a className="Connect-btn-a u-flex-around">Team</a>
                    <a className="Connect-btn-a u-flex-around">Docs</a>
                    <a className="Connect-btn u-flex-around u-btn">Connect Metamask</a>
                </div>
            </div>
            <div className="navbars-down u-flex-between u-flex-column">
                <div className="u-flex-between navbars-down-top u-responsive">
                    <a className="logo-div u-flex-around u-flex-column">
                        <img src="/assets/img/logo.svg" />
                        <div>From the Creators of Actifit</div>
                    </a>
                    <div className="token-div u-flex-around u-flex-column">
                        <div className="token-div-top">Token Sale <span>STARTS</span> in</div>
                        <div className="token-div-down">00:00:00</div>
                    </div>
                    <div className="u-flex-around u-responsive-before">
                        <a className="Connect-btn-a u-flex-around">Team</a>
                        <a className="Connect-btn-a u-flex-around">Docs</a>
                        <a className="Connect-btn u-flex-around u-btn">Connect Metamask</a>
                    </div>
                </div>
                {/* <div className="token-div u-flex-around u-flex-column u-responsive-after">
                    <div className="token-div-top">Token Sale <span>STARTS</span> in</div>
                    <div className="token-div-down">00:00:00</div>
                </div> */}
            </div>
        </div>
    );
}
