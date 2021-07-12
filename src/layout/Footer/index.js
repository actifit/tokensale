/* eslint-disable */

import React, { useState } from 'react';
import './style.css';
export default function Landing(props) {
    return (
        <div className="footer">
            <div className="footer-background u-responsive-before">
                <img src="../../images/footer_back.png" />
            </div>
            <div className="footer-top u-flex-between u-responsive">
                <a className="footer-logo-div u-flex-around u-flex-column">
                    <img src="/images/logo.svg" />
                </a>
                <div className="footer-top-items u-responsive-before">
                    <a>Company</a><br></br>
                    <a href="https://actifit.io">About Us</a><br></br>
                    <a href="https://actifit.io/#team">Team</a><br></br>
                    <a href="https://actifit.io/#partners">Partners</a><br></br>
                </div>
                <div className="footer-top-items u-responsive-before">
                    <a>Support </a><br></br>
                    <a href="mailto:info@actifit.io">Contact Us</a><br></br>
                    <a href="https://actifit.io/privacy-policy">Privacy policy</a><br></br>
                    <a href="https://actifit.io/terms-conditions">Terms & Conditions</a><br></br>
                </div>
                <div className="footer-top-items u-responsive-before">
                    <a href="https://actifit.io">www.actifit.io</a><br></br>
                    <a href="https://actifit.io/activity">Activity Feed</a><br></br>
                    <a href="https://actifit.io/market">Market</a><br></br>
                    <a href="https://actifit.io/#news">News</a><br></br>
                </div>
                <div className="footer-top-items u-responsive-before">
                    <a className="u-responsive-before"> </a><br></br>
                    <a href="https://actifit.io/yieldfarming">Yield farming</a><br></br>
                    <a href="https://actifit.io/delegators">Delegators</a><br></br>
                    <a href="https://actifit.io/leaderboard">Leaderboard</a><br></br>
                </div>
                <div className="u-flex-between u-responsive-after">
                    <div className="footer-top-items">
						<a href="https://actifit.io">About Us</a><br></br>
						<a href="https://actifit.io/#team">Team</a><br></br>
						<a href="https://actifit.io/#partners">Partners</a><br></br>
                    </div>
                    <div className="footer-top-items">
                        <a>Support </a><br></br>
						<a href="mailto:info@actifit.io">Contact Us</a><br></br>
						<a href="https://actifit.io/privacy-policy">Privacy policy</a><br></br>
						<a href="https://actifit.io/terms-conditions">Terms & Conditions</a><br></br>
                    </div>
                </div>
                <div className="u-flex-between u-responsive-after">
                    <div className="footer-top-items">
						<a href="https://actifit.io">www.actifit.io</a><br></br>
						<a href="https://actifit.io/activity">Activity Feed</a><br></br>
						<a href="https://actifit.io/market">Market</a><br></br>
						<a href="https://actifit.io/#news">News</a><br></br>
                    </div>
                    <div className="footer-top-items">
                        <a className="u-responsive-before"> </a><br></br>
						<a href="https://actifit.io/yieldfarming">Yield farming</a><br></br>
						<a href="https://actifit.io/delegators">Delegators</a><br></br>
						<a href="https://actifit.io/leaderboard">Leaderboard</a><br></br>
                    </div>
                </div>
                <div className="footer-top-items">
                    <a className="u-responsive-before"> </a><br></br>
                    <a href="https://actifit.io/whitepaper/Actifit_White_Paper.pdf">Whitepaper</a><br></br>
                    <a href="https://actifit.io/referrals">Refer a friend</a><br></br>
                    <a className="u-responsive-before"></a><br></br>
                </div>
            </div>
            <div className="footer-down u-flex-between u-responsive">
                <div><a href="https://actifit.io/privacy-policy">Privacy policy</a>&nbsp;|&nbsp;<a href="https://actifit.io/terms-conditions">Terms & Conditions</a></div>
                <div className="social-icons u-flex-between u-responsive">
                    <div className="u-u-flex-around">
                        <a href="https://www.facebook.com/Actifit.fitness/" target="_blank"><img src="/images/facebook.svg" /></a>
                        <a href="https://www.instagram.com/actifit.fitness/" target="_blank"><img src="/images/instagram.svg" /></a>
                        <a href="https://discord.gg/aHtcA6r" target="_blank"><img src="/images/cartoon.svg" /></a>
                        <a href="https://www.twitter.com/Actifit_fitness" target="_blank"><img src="/images/twitter.svg" /></a>
                        <a href="https://t.me/actifit" className="u-responsive-before" target="_blank"><img src="/images/ariplane.svg" /></a>
                        <a href="https://medium.com/@actifit.fitness" className="u-responsive-before" target="_blank"><img src="/images/M.svg" /></a>
                        <a href="https://www.linkedin.com/company/actifit-io" className="u-responsive-before" target="_blank"><img src="/images/instgram.svg" /></a>
                        <a href="https://www.youtube.com/channel/UCNHxAGO79rXI7Hdiikwnqtw" className="u-responsive-before" target="_blank"><img src="/images/youtube.svg" /></a>
                    </div>
                    <div className="u-u-flex-around u-responsive-after">
                        <a href="https://www.instagram.com/actifit.fitnes" target="_blank"><img src="/images/ariplane.svg" /></a>
                        <a href="https://medium.com/@actifit.fitness" target="_blank"><img src="/images/M.svg" /></a>
                        <a href="https://www.youtube.com/channel/UCNHxAGO79rXI7Hdiikwnqtw" target="_blank"><img src="/images/instgram.svg" /></a>
                        <a href="https://www.linkedin.com/company/actifit-io" target="_blank"><img src="/images/youtube.svg" /></a>
                    </div>
                </div>
                <div>© 2021 actifit.io All rights reserved.</div>
            </div>
            <img className="footer_money" src="/images/money1.png" />
        </div>
    );
}
