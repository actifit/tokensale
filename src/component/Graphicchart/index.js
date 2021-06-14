import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';
export default function Landing() {

    return (
        <div>
            <Fade up>
                <div className="u-graphicchart u-flex-around u-responsive-before">
                    <div className="u-graphicchart-line"></div>
                    <div className="u-graphicchart-red-line"></div>
                    <div className="u-graphicchart-coin u-flex-around">
                        <img src="/assets/img/coin.svg" />
                    </div>
                    <div className="zero_line u-flex-between u-flex-column">
                        <div>Reward Amount $</div>
                        <div>Funds Raised $<br></br><br></br>Rewards %</div>
                    </div>
                    <div className="zero_line first_line u-flex-between u-flex-column">
                        <div>$ 4,000</div>
                        <div></div>
                        <div className="u-flex-around"><img src="/assets/img/dotes.svg" /></div>
                        <div>$ 100,000<br></br><br></br>4%</div>
                    </div>
                    <div className="zero_line first_line u-flex-between u-flex-column" style={{ left: "45%" }}>
                        <div>$ 30,000</div>
                        <div></div>
                        <div className="u-flex-around"><img src="/assets/img/dotes.svg" /></div>
                        <div>$ 500,000<br></br><br></br>6%</div>
                    </div>
                    <div className="zero_line first_line u-flex-between u-flex-column" style={{ left: "60%" }}>
                        <div>$ 80,000</div>
                        <div></div>
                        <div className="u-flex-around"><img src="/assets/img/dotes.svg" /></div>
                        <div>$ 1,000,000<br></br><br></br>8%</div>
                    </div>
                    <div className="zero_line first_line u-flex-between u-flex-column" style={{ left: "75%" }}>
                        <div>$ 135,000</div>
                        <div></div>
                        <div className="u-flex-around"><img src="/assets/img/dotes.svg" /></div>
                        <div>$ 1,500,000<br></br><br></br>9%</div>
                    </div>
                    <div className="zero_line first_line u-flex-between u-flex-column" style={{ left: "90%" }}>
                        <div>$ 200,000</div>
                        <div></div>
                        <div className="u-flex-around"><img src="/assets/img/dotes.svg" /></div>
                        <div>$ 2,000,000<br></br><br></br>10%</div>
                    </div>
                </div>
            </Fade>
            <div class="u-graphicchart-res u-responsive-after u-flex-column">
                <div className="u-graphicchart-res-line">
                    <div className="u-graphicchart-res-red-line"></div>
                    <div className="u-graphicchart-res-coin u-flex-around">
                        <img src="/assets/img/coin.svg" />
                    </div>
                    <div className="u-flex-around"><img src="/assets/img/dotes.svg" style={{ marginTop: "50px" }} /></div>
                    <div className="u-flex-around"><img src="/assets/img/dotes.svg" style={{ marginTop: "71px" }} /></div>
                    <div className="u-flex-around"><img src="/assets/img/dotes.svg" style={{ marginTop: "71px" }} /></div>
                    <div className="u-flex-around"><img src="/assets/img/dotes.svg" style={{ marginTop: "71px" }} /></div>
                    <div className="u-flex-around"><img src="/assets/img/dotes.svg" style={{ marginTop: "71px" }} /></div>
                </div>
                <div className="u-graphicchart-res-item u-flex-between">
                    <div>Reward&nbsp;&nbsp;&nbsp;&nbsp;<br></br>Amount $</div>
                    <div>Funds Raised $<br></br><br></br>Rewards %</div>
                </div>
                <div className="u-graphicchart-res-item u-flex-between" style={{ marginTop: "50px" }}>
                    <div>$ 4,000</div>
                    <div>$ 100,000<br></br><br></br>4%</div>
                </div>
                <div className="u-graphicchart-res-item u-flex-between" style={{ marginTop: "50px" }}>
                    <div>$ 30,000</div>
                    <div>$ 500,000<br></br><br></br>6%</div>
                </div>
                <div className="u-graphicchart-res-item u-flex-between" style={{ marginTop: "50px" }}>
                    <div>$ 80,000</div>
                    <div>$ 1,000,000<br></br><br></br>8%</div>
                </div>
                <div className="u-graphicchart-res-item u-flex-between" style={{ marginTop: "50px" }}>
                    <div>$ 135,000</div>
                    <div>$ 1,500,000<br></br><br></br>9%</div>
                </div>
                <div className="u-graphicchart-res-item u-flex-between" style={{ marginTop: "50px" }}>
                    <div>$ 200,000</div>
                    <div>$ 2,000,000<br></br><br></br>10%</div>
                </div>
            </div>
        </div>
    );
}
