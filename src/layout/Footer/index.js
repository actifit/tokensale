import React, { useState } from 'react';
import './style.css';
export default function Landing(props) {
    return (
        <div className="footer">
            <div className="footer-background u-responsive-before">
                <img src="/assets/img/footer_back.png" />
            </div>
            <div className="footer-top u-flex-between u-responsive">
                <a className="footer-logo-div u-flex-around u-flex-column">
                    <img src="/assets/img/logo.svg" />
                </a>
                <div className="footer-top-items u-responsive-before">
                    <a>Company</a><br></br>
                    <a>About Us</a><br></br>
                    <a>Team</a><br></br>
                    <a>Partners</a><br></br>
                </div>
                <div className="footer-top-items u-responsive-before">
                    <a>Support </a><br></br>
                    <a>Contact Us</a><br></br>
                    <a>Privacy policy</a><br></br>
                    <a>Term of use</a><br></br>
                </div>
                <div className="footer-top-items u-responsive-before">
                    <a>www.actifit.io</a><br></br>
                    <a>Activity Feed</a><br></br>
                    <a>Market</a><br></br>
                    <a>News</a><br></br>
                </div>
                <div className="footer-top-items u-responsive-before">
                    <a className="u-responsive-before"> </a><br></br>
                    <a>Yield farming</a><br></br>
                    <a>Delegators</a><br></br>
                    <a>Leaderboard</a><br></br>
                </div>
                <div className="u-flex-between u-responsive-after">
                    <div className="footer-top-items">
                        <a>Company</a><br></br>
                        <a>About Us</a><br></br>
                        <a>Team</a><br></br>
                        <a>Partners</a><br></br>
                    </div>
                    <div className="footer-top-items">
                        <a>Support </a><br></br>
                        <a>Contact Us</a><br></br>
                        <a>Privacy policy</a><br></br>
                        <a>Term of use</a><br></br>
                    </div>
                </div>
                <div className="u-flex-between u-responsive-after">
                    <div className="footer-top-items">
                        <a>www.actifit.io</a><br></br>
                        <a>Activity Feed</a><br></br>
                        <a>Market</a><br></br>
                        <a>News</a><br></br>
                    </div>
                    <div className="footer-top-items">
                        <a className="u-responsive-before"> </a><br></br>
                        <a>Yield farming</a><br></br>
                        <a>Delegators</a><br></br>
                        <a>Leaderboard</a><br></br>
                    </div>
                </div>
                <div className="footer-top-items">
                    <a className="u-responsive-before"> </a><br></br>
                    <a>Whitepaper</a><br></br>
                    <a>Refer a friend</a><br></br>
                    <a className="u-responsive-before"></a><br></br>
                </div>
            </div>
            <div className="footer-down u-flex-between u-responsive">
                <div>Terms of Service Privacy Policy Security</div>
                <div className="social-icons u-flex-between u-responsive">
                    <div className="u-u-flex-around">
                        <a href="https://www.facebook.com/Actifit.fitness/"><img src="/assets/img/facebook.svg" /></a>
                        <a href="https://www.instagram.com/actifit.fitness/"><img src="/assets/img/instagram.svg" /></a>
                        <a href="https://discord.gg/aHtcA6r"><img src="/assets/img/cartoon.svg" /></a>
                        <a href="https://www.twitter.com/Actifit_fitness"><img src="/assets/img/twitter.svg" /></a>
                        <a href="https://www.instagram.com/actifit.fitnes" className="u-responsive-before"><img src="/assets/img/ariplane.svg" /></a>
                        <a href="https://medium.com/@actifit.fitness" className="u-responsive-before"><img src="/assets/img/M.svg" /></a>
                        <a href="https://www.youtube.com/channel/UCNHxAGO79rXI7Hdiikwnqtw" className="u-responsive-before"><img src="/assets/img/instgram.svg" /></a>
                        <a href="https://www.linkedin.com/company/actifit-io" className="u-responsive-before"><img src="/assets/img/youtube.svg" /></a>
                    </div>
                    <div className="u-u-flex-around u-responsive-after">
                        <a href="https://www.instagram.com/actifit.fitnes"><img src="/assets/img/ariplane.svg" /></a>
                        <a href="https://medium.com/@actifit.fitness"><img src="/assets/img/M.svg" /></a>
                        <a href="https://www.youtube.com/channel/UCNHxAGO79rXI7Hdiikwnqtw"><img src="/assets/img/instgram.svg" /></a>
                        <a href="https://www.linkedin.com/company/actifit-io"><img src="/assets/img/youtube.svg" /></a>
                    </div>
                </div>
                <div>© 2021 actifit.io All rights reserved.</div>
            </div>
            <img className="footer_money" src="/assets/img/money1.png" />
        </div>
    );
}
