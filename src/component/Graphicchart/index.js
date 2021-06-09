import React, { useState } from 'react';
import './style.css';
export default function Landing() {

    return (
        <div className="u-graphicchart u-flex-around u-responsive">
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
            <div className="zero_line first_line u-flex-between u-flex-column" style={{left:"45%"}}>
                <div>$ 30,000</div>
                <div></div>
                <div className="u-flex-around"><img src="/assets/img/dotes.svg" /></div>
                <div>$ 500,000<br></br><br></br>6%</div>
            </div>
            <div className="zero_line first_line u-flex-between u-flex-column" style={{left:"60%"}}>
                <div>$ 80,000</div>
                <div></div>
                <div className="u-flex-around"><img src="/assets/img/dotes.svg" /></div>
                <div>$ 1,000,000<br></br><br></br>8%</div>
            </div>
            <div className="zero_line first_line u-flex-between u-flex-column" style={{left:"75%"}}>
                <div>$ 135,000</div>
                <div></div>
                <div className="u-flex-around"><img src="/assets/img/dotes.svg" /></div>
                <div>$ 1,500,000<br></br><br></br>9%</div>
            </div>
            <div className="zero_line first_line u-flex-between u-flex-column" style={{left:"90%"}}>
                <div>$ 200,000</div>
                <div></div>
                <div className="u-flex-around"><img src="/assets/img/dotes.svg" /></div>
                <div>$ 2,000,000<br></br><br></br>10%</div>
            </div>
        </div>
    );
}
