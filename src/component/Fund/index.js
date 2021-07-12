/* eslint-disable */


import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';
export default function Landing() {

    return (
        <div className="u-fund u-flex-around u-flex-column">
            <div className="u-fund-title ">THE GENERATED FUNDS WILL BE USED FOR:</div>
            <div className="u-fund-body u-flex-between u-responsive">
                <div>
                    <Zoom>
                        <div className="u-fund-body-item">
                            <div className="u-fund-body-item-num u-flex-around">30%</div>
                            <div>
                                <div className="u-fund-body-item-title">LOCKED LIQUIDITY</div>
                                <div className="u-fund-body-item-desc">30% of the token sale funds will be locked for a minimum of 1 year to provide solid long term liquidity for AFIT, AFITX tokens, and Actifit DeFi project.</div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="u-fund-body-item">
                            <div className="u-fund-body-item-num u-flex-around">10%</div>
                            <div>
                                <div className="u-fund-body-item-title">PARTICIPANT REWARDS</div>
                                <div className="u-fund-body-item-desc">10% will be distributed back to random, top participants, as well as extra AFITX rewards to first 200 participants in the token sale.</div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="u-fund-body-item">
                            <div className="u-fund-body-item-num u-flex-around">10%</div>
                            <div>
                                <div className="u-fund-body-item-title">HIVE TOKEN PURCHASE</div>
                                <div className="u-fund-body-item-desc">As an attribution to our original Actifit blockchain - Hive, 10% of token sale funds will be used to buy and power up HIVE, to help grow the ecosystem and reward Actifit app users.</div>
                            </div>
                        </div>
                    </Zoom>
                </div>
                <div>
                    <Zoom>
                        <div className="u-fund-body-item">
                            <div className="u-fund-body-item-num u-flex-around">30%</div>
                            <div>
                                <div className="u-fund-body-item-title">PROJECT DEVELOPMENT</div>
                                <div className="u-fund-body-item-desc">30% will be used to fund the continuous coding and development effort on Actifit and Actifit DeFi.</div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="u-fund-body-item">
                            <div className="u-fund-body-item-num u-flex-around">10%</div>
                            <div>
                                <div className="u-fund-body-item-title">MARKETING</div>
                                <div className="u-fund-body-item-desc">10% of the funds will be used to expand Actifit and Actifit DeFi marketing channels and reach.</div>
                            </div>
                        </div>
                    </Zoom>
                    <Zoom>
                        <div className="u-fund-body-item">
                            <div className="u-fund-body-item-num u-flex-around">10%</div>
                            <div>
                                <div className="u-fund-body-item-title">PROJECT GROWTH & PARTNERSHIPS</div>
                                <div className="u-fund-body-item-desc">10% of the funds will be used to entice collaborations with major players in DeFi and relevant fields.</div>
                            </div>
                        </div>
                    </Zoom>
                </div>
            </div>
        </div>
    );
}
