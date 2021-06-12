import React, { useState } from 'react';
import './style.css';
export default function Landing() {

    return (
        <div className="u-fund u-flex-around u-flex-column">
            <div className="u-fund-title ">THE GENERATED FUNDS WILL BE USED FOR:</div>
            <div className="u-fund-body u-flex-between u-responsive">
                <div>
                    <div className="u-fund-body-item">
                        <div className="u-fund-body-item-num u-flex-around">30%</div>
                        <div>
                            <div className="u-fund-body-item-title">PROVIDING LIQUIDITY</div>
                            <div className="u-fund-body-item-desc">to the different farms, pools and kick off the Actifit DeFi project liquidity. </div>
                        </div>
                    </div>
                    <div className="u-fund-body-item">
                        <div className="u-fund-body-item-num u-flex-around">10%</div>
                        <div>
                            <div className="u-fund-body-item-title">ALLOCATING REWARDS</div>
                            <div className="u-fund-body-item-desc">back to random and top participants of the token sale.</div>
                        </div>
                    </div>
                    <div className="u-fund-body-item">
                        <div className="u-fund-body-item-num u-flex-around">10%</div>
                        <div>
                            <div className="u-fund-body-item-title">BUYING HIVE TOKEN</div>
                            <div className="u-fund-body-item-desc">as an attribution to our original Actifit blockchain - Hive, and will be powered up to help grow the ecosystem and reward Actifit app users.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <div className="u-fund-body-item">
                        <div className="u-fund-body-item-num u-flex-around">30%</div>
                        <div>
                            <div className="u-fund-body-item-title">PROVIDING LIQUIDITY</div>
                            <div className="u-fund-body-item-desc">the development effort on Actifit and Actifit DeFi.</div>
                        </div>
                    </div>
                    <div className="u-fund-body-item">
                        <div className="u-fund-body-item-num u-flex-around">10%</div>
                        <div>
                            <div className="u-fund-body-item-title">ALLOCATING REWARDS</div>
                            <div className="u-fund-body-item-desc"></div>
                        </div>
                    </div>
                    <div className="u-fund-body-item">
                        <div className="u-fund-body-item-num u-flex-around">10%</div>
                        <div>
                            <div className="u-fund-body-item-title">BUYING HIVE TOKEN</div>
                            <div className="u-fund-body-item-desc"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
