/* eslint-disable */


import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';
import Navbars from '../../layout/Navbars';
let glbprops;

function claimAFITRewards(){
	console.log('claiming AFIT');
	console.log(glbprops.data.account);
	glbprops.data.contractAFIT.methods.claimTokens().send({from: glbprops.data.account}).then(function(res){
		console.log(res);
	});
}

function claimAFITXRewards(){
	console.log('claiming AFITX');
	//console.log(glbprops.data.account);
	//console.log(glbprops.data.contractAFITX.methods);
	
	glbprops.data.contractAFITX.methods.claimTokens().send({from: glbprops.data.account}).then(function(res){
		console.log(res);
	});
}
//console.log('ETHHHH');
//console.log(window.ethereum);

export default function Landing(props) {
	glbprops = props;
	//console.log('invest');
	//console.log(props.data);

    return (
        <div className="u-invest u-flex-around u-flex-column">
            <Zoom>
                <div className="u-invest-var">
                    <div className="u-flex-between">
                        <div>Total Contributed:</div>
                        <div>Total Rewards: $200,000</div>
                    </div>
                    <div className="u-invest-var-main">
                        <div>
                            <img className="u-invest-var-main-color" src="/assets/img/bar_back.png" style={{ width: "70%" }} />
                            <div className="u-invest-var-main-num" style={{ left: "70%" }}>70%</div>
                        </div>
                    </div>
                </div>
                <div className="u-invest-title">INVEST NOW TO WIN UP TO</div>
                <div className="u-invest-2000 u-flex-around">$ 200,000</div>
            </Zoom>
            <div className="u-invest-items u-responsive">
                <Fade left>
                    <div id="buy" className="u-invest-item">
                        <div className="u-invest-item-title1 u-flex-around u-flex-column">
                            AFITX
                            <img src="/assets/img/afitx_small.png" />
                        </div>
                        <div className="u-invest-item-title2 u-flex-column">
                            Governance Token
                        </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Core DeFi token </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Further Decentralize Actifit </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Voting </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Fit Loans</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Increase User Rank</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Core DeFi token </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Yield Farms, Pools & Vaults (Workouts & Shakes) </div>
                        <div className="u-flex-around invest-btn u-btn u-responsive-after">BUY AFITX </div>
						
						<div>{props.data && !isNaN(props.data.investedBnBAFITX) && props.data.investedBnBAFITX > 0 ? ( <div className="u-flex-around invest-btn u-responsive-after">Invested BNB {props.data.investedBnBAFITX}</div>):(<span />)}</div>
						<div>{props.data && !isNaN(props.data.claimableAFITX) && props.data.claimableAFITX > 0 ? ( 
							<div>
								<div className="u-flex-around invest-btn u-responsive-after">Claimable AFITX {props.data.claimableAFITX}</div>
								<div>
									{props.data.fundsClaimableAFITX && ! props.data.claimedAFITX ? (
										<div className="u-flex-around invest-btn u-btn u-responsive-after" onClick={() => {claimAFITXRewards()}}>CLAIM AFITX</div>
									):(<span />)
									}
								</div>
							</div>
						):(<span />)}</div>
						<div>{props.data && props.data.fundsClaimableAFITX && props.data.claimedAFITX ? (<div className="u-flex-around invest-btn u-responsive-after">AFITX Claimed!</div>):(<span />)}</div>
						
                    </div>
                </Fade>
                <Fade right>
                    <div className="u-invest-item">
                        <div className="u-invest-item-title1 u-flex-around u-flex-column">
                            AFIT
                            <img src="/assets/img/afit_small.png" />
                        </div>
                        <div className="u-invest-item-title2 u-flex-column">
                            Utility Token
                        </div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Buy fitness products</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Challenge your friends</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Gamification</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Participate in contests</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Increase User Rank</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Reward friends for tracking fitness activity</div>
                        <div className="u-invest-item-list"> <img src="/assets/img/list.svg" />&nbsp;&nbsp;Yield Farms, Pools & Vaults (Workouts & Shakes) </div>
                        <div className="u-flex-around invest-btn u-btn u-responsive-after">BUY AFIT</div>
						
						<div>{props.data && !isNaN(props.data.investedBnBAFIT) && props.data.investedBnBAFIT > 0 ? ( <div className="u-flex-around invest-btn u-responsive-after">Invested BNB {props.data.investedBnBAFIT}</div>):(<span />)}</div>
						<div>{props.data && !isNaN(props.data.claimableAFIT) && props.data.claimableAFIT > 0 ? ( 
							<div>
								<div className="u-flex-around invest-btn u-responsive-after">Claimable AFIT {props.data.claimableAFIT}</div>
								<div>
									{props.data.fundsClaimableAFIT && ! props.data.claimedAFIT ? (
										<div className="u-flex-around invest-btn u-btn" onClick={() => {claimAFITRewards()}}>CLAIM AFIT</div>
									):(<span />)
									}
								</div>
							</div>
						):(<span />)}</div>
						
						<div>{props.data && props.data.fundsClaimableAFIT && props.data.claimedAFIT ? (<div className="u-flex-around invest-btn u-responsive-after">AFIT Claimed!</div>):(<span />)}</div>
						
                    </div>
                </Fade>
            </div>
            <div id="buy" className="u-invest-items u-responsive-before" style={{ marginTop: "0" }}>
                <Zoom>
                    <div className="u-invest-item">
                        <div className="u-flex-around invest-btn u-btn">BUY AFITX</div>
						
						<div>{props.data && !isNaN(props.data.investedBnBAFITX) && props.data.investedBnBAFITX > 0 ? ( <div className="u-flex-around invest-btn">Invested BNB {props.data.investedBnBAFITX}</div>):(<span />)}</div>
						<div>{props.data && !isNaN(props.data.claimableAFITX) && props.data.claimableAFITX > 0 ? ( 
							<div>
								<div className="u-flex-around invest-btn">Claimable AFITX {props.data.claimableAFITX}</div>
								<div>
									{props.data.fundsClaimableAFITX && ! props.data.claimedAFITX ? (
										<div className="u-flex-around invest-btn u-btn" onClick={() => {claimAFITXRewards()}}>CLAIM AFITX</div>
									):(<span />)
									}
								</div>
							</div>
						):(<span />)}</div>
						<div>{props.data && props.data.fundsClaimableAFITX && props.data.claimedAFITX ? (<div className="u-flex-around invest-btn">AFITX Claimed!</div>):(<span />)}</div>
                    </div>
					
                </Zoom>
                <Zoom>
                    <div className="u-invest-item">
                        <div className="u-flex-around invest-btn u-btn">BUY AFIT</div>
						<div>{props.data && !isNaN(props.data.investedBnBAFIT) && props.data.investedBnBAFIT > 0 ? ( <div className="u-flex-around invest-btn">Invested BNB {props.data.investedBnBAFIT}</div>):(<span />)}</div>
						<div>{props.data && !isNaN(props.data.claimableAFIT) && props.data.claimableAFIT > 0 ? ( 
							<div>
								<div className="u-flex-around invest-btn">Claimable AFIT {props.data.claimableAFIT}</div>
								<div>
									{props.data.fundsClaimableAFIT && ! props.data.claimedAFIT ? (
										<div className="u-flex-around invest-btn u-btn u-responsive-after" onClick={() => {claimAFITRewards()}}>CLAIM AFIT</div>
									):(<span />)
									}
								</div>
							</div>
						):(<span />)}</div>
						
						<div>{props.data && props.data.fundsClaimableAFIT && props.data.claimedAFIT ? (<div className="u-flex-around invest-btn">AFIT Claimed!</div>):(<span />)}</div>
						
                    </div>
					
                </Zoom>
            </div>
            <img className="invest_money" src="/assets/img/money1.png" />
        </div>
    );
}
