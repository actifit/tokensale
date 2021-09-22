/* eslint-disable */


import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';
import Navbars from '../../layout/Navbars';
import DOMPurify from 'dompurify'


let glbprops;
let bnbAfit = 0, bnbAfitx = 0;
let buyAfitOn = false;
let buyAfitxOn = false;
let bnbInvestTotal;
let buyAfitProgress = false;
let buyAfitxProgress = false;

function claimAFITRewards(){
	console.log('claiming AFIT');
	//console.log(glbprops.data.account);
	if (glbprops.data.contractAFIT){
	glbprops.data.contractAFIT.methods.claimTokens().send({from: glbprops.data.account}).then(function(res){
		console.log(res);
	});
}
}

function claimAFITXRewards(){
	console.log('claiming AFITX');
	//console.log(glbprops.data.account);
	//console.log(glbprops.data.contractAFITX.methods);
	if (glbprops.data.contractAFITX){
	glbprops.data.contractAFITX.methods.claimTokens().send({from: glbprops.data.account}).then(function(res){
		console.log(res);
	});
}
}

//console.log(window.ethereum);

export default function Landing(props) {
	
	
	const tsStartDate = 1632153600000;
	const tsEndDate = 1633046400000;

	
	
	const afitBuyHandler = () => {
		if (Date.now() < tsStartDate){
			alert('Token Sale has not started yet!\nYou can check upon the Early Bird token sale via Actifit Twitter account.');
			return;
		}
		if (!props.data){
				alert('Please connect your account first');
			return;
		}
		/*if (Date.now() > tsEndDate){
			alert('Token Sale has concluded!');
			return;
		}*/
		buyAfitOn = true; 
		setCount(count + 1)
		//setState({count: state.count + 1})
		//forceUpdateUI();
		//useForceUpdate();
	}

	const afitxBuyHandler = () => {
		if (Date.now() < tsStartDate){
			alert('Token Sale has not started yet!\nYou can check upon the Early Bird token sale via Actifit Twitter account.');
			return;
		}
		if (!props.data){
				alert('Please connect your account first');
			return;
		}
		/*if (Date.now() > tsEndDate){
			alert('Token Sale has concluded!');
			return;
		}*/
		buyAfitxOn = true;
		setCount(count + 1)
		//setState({count: state.count + 1})
		//forceUpdateUI();
	}
	
	
	function buyAfitConfirm(props){
		if (!glbprops.data.account){
				alert('Please connect your account first');
			return;
		}
		let cancelAction = false;
		if (bnbAfit < props.data.minBnBAFIT){ bnbAfit = props.data.minBnBAFIT;cancelAction = true; 
		}
		if (bnbAfit > props.data.maxBnBAFIT){ bnbAfit = props.data.maxBnBAFIT;cancelAction = true;
		}	
		if (cancelAction){
			return;
		}else{
			//console.log(window.web3.toWei(bnbAfit, "ether"));
			if (glbprops.data.contractAFIT){
					buyAfitProgress = true;
					setCount(count + 1);
			glbprops.data.contractAFIT.methods.deposit().send({from: glbprops.data.account, value: glbprops.data.web3.utils.toWei(bnbAfit, "ether")}).then(function(res){
				console.log(res);
						if (res.blockNumber && res.status){
							console.log('success');
							//success
							//refresh data
							setCount(count + 1);
						}
						buyAfitProgress = false;
						setCount(count + 1);
					}).catch(function(err){
						buyAfitProgress = false;
						setCount(count + 1);
						console.log(err);
				});
			}
		}
	}

	function buyAfitxConfirm(props){
		if (!glbprops.data.account){
				alert('Please connect your account first');
			return;
		}
		let cancelAction = false;
		//console.log(bnbAfitx);
		if (bnbAfitx < props.data.minBnBAFITX){ bnbAfitx = props.data.minBnBAFITX;cancelAction = true; 
		}
		if (bnbAfitx > props.data.maxBnBAFITX){ bnbAfitx = props.data.maxBnBAFITX;cancelAction = true;
		}	
		if (cancelAction){
			return;
		}else{
			//console.log(bnbAfitx);
			//console.log(window.web3.toWei(bnbAfitx, "ether"));
			if (glbprops.data.contractAFITX){
					buyAfitxProgress = true;
					setCount(count + 1);
			glbprops.data.contractAFITX.methods.deposit().send({from: glbprops.data.account, value: glbprops.data.web3.utils.toWei(bnbAfitx, "ether")}).then(function(res){
				console.log(res);
						if (res.blockNumber && res.status){
							//success
							//refresh data
							setCount(count + 1);
						}
						buyAfitxProgress = false;
						setCount(count + 1);
					}).catch(function(err){
						buyAfitxProgress = false;
						setCount(count + 1);
						console.log(err);
				});
			}
		}
	}
	
	glbprops = props;
	//console.log('invest');
	//console.log(props.data);

	const [count, setCount] = useState(0);
	
	if (glbprops.data){
		let early_bird_ts_bnb = 10.55 + 14.9205;//address data
		bnbInvestTotal = 'Total BNB Invested: <img src="images/Binance-gold-coin.gif" style="width:40px;height:40px;" />';
		if (parseFloat(glbprops.data.totalDepositedBnbAFIT) > 0 && parseFloat(glbprops.data.totalDepositedBnbAFITX) > 0){
			bnbInvestTotal = 'Total BNB Invested: ';
			bnbInvestTotal += parseFloat(early_bird_ts_bnb) + parseFloat(glbprops.data.totalDepositedBnbAFIT) + parseFloat(glbprops.data.totalDepositedBnbAFITX);
			bnbInvestTotal += ' BNB';
			bnbInvestTotal += '<img src="images/Binance-gold-coin.gif" style="width:40px;height:40px;" />';
		}
	}
    return (
        <div className="u-invest u-flex-around u-flex-column">
            <Zoom>
                <div className="u-invest-title">INVEST NOW TO WIN UP TO</div>
                <div className="u-invest-2000 u-flex-around">200,000 USDT</div>
				 <div className="u-invest-var">
                    <div className="u-flex-between">
                        <div dangerouslySetInnerHTML={{__html: DOMPurify.sanitize(bnbInvestTotal)}}></div>
							{ /* <!-- <div>Total Rewards: $200,000</div> --> */ }
                    </div>
                    { /* <!-- <div className="u-invest-var-main">
                        <div>
                            <img className="u-invest-var-main-color" src="/images/bar_back.png" style={{ width: "70%" }} />
                            <div className="u-invest-var-main-num" style={{ left: "70%" }}>70%</div>
                        </div>
                    </div>--> */ }
                </div>
            </Zoom>
            <div className="u-invest-items u-responsive">
                <Fade left>
                    <div id="buy" className="u-invest-item">
                        <div className="u-invest-item-title1 u-flex-around u-flex-column">
                            AFITX
                            <img src="/images/afitx_small.png" />
                        </div>
                        <div className="u-invest-item-title2 u-flex-column">
                            Governance Token
                        </div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Core DeFi token </div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Decentralization Power</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Voting Rights</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Fit Loans</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;User Rank Boost</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Yield Farms, Pools & Vaults (Workouts & Shakes) </div>
                        <div className="u-flex-around invest-btn u-btn u-responsive-after" onClick={() => {afitxBuyHandler()}}>BUY AFITX </div>
						
						{buyAfitxOn?
							(
							<div>
								<label className="u-flex-around invest-btn u-btn u-responsive-after">
								BNB:
								<input type="number" step="0.001" className="actifit-input" min={props.data.minBnBAFITX} max={props.data.maxBnBAFITX} onChange={(evt) => { 
									if (props.data){
										if (evt.target.value < 0) evt.target.value = props.data.minBnBAFITX; 
										if (evt.target.value > props.data.maxBnBAFITX) evt.target.value = props.data.maxBnBAFITX; 
										bnbAfitx = evt.target.value; 
										setCount(count + 1)
										}
									}
								} 
									
								onBlur={(evt) => {
									if (props.data){
										if (evt.target.value < props.data.minBnBAFITX) evt.target.value = props.data.minBnBAFITX; 
										if (evt.target.value > props.data.maxBnBAFITX) evt.target.value = props.data.maxBnBAFITX; 
										bnbAfitx = evt.target.value; 
										setCount(count + 1)
									}
								}}	
								/></label>
								<span className="u-responsive-after">Matching AFITX: {bnbAfitx / glbprops.data.pricePerAFITX}</span>
								<div className="u-flex-around invest-btn u-btn u-responsive-after" onClick={() => {buyAfitxConfirm(props)}}>Proceed
								{ 
									buyAfitxProgress ?	
									(<img src="/images/Spinner-1s-200px.svg" className="spinner-img"/>)
									:(<span></span>)
								}
								</div>
							</div>
							):(<span></span>)
						}
						<div>{props.data && !isNaN(props.data.investedBnBAFITX) && props.data.investedBnBAFITX > 0 ? ( <div className="claimable claimable-hidden">Invested BNB {props.data.investedBnBAFITX}</div>):(<span />)}</div>
						<div>{props.data && !isNaN(props.data.claimableAFITX) && props.data.claimableAFITX > 0 ? ( 
							<div>
								<div className="claimable claimable-hidden">Claimable AFITX {props.data.claimableAFITX}</div>
								<div>
									{props.data.fundsClaimableAFITX && ! props.data.claimedAFITX ? (
										<div className="u-flex-around invest-btn u-btn u-responsive-after" onClick={() => {claimAFITXRewards()}}>CLAIM AFITX</div>
									):(<span />)
									}
								</div>
							</div>
						):(<span />)}</div>
						<div>{props.data && props.data.fundsClaimableAFITX && props.data.claimedAFITX ? (<div className="claimable claimable-hidden">AFITX Claimed!</div>):(<span />)}</div>
						
                    </div>
                </Fade>
                <Fade right>
                    <div className="u-invest-item">
                        <div className="u-invest-item-title1 u-flex-around u-flex-column">
                            AFIT
                            <img src="/images/afit_small.png" />
                        </div>
                        <div className="u-invest-item-title2 u-flex-column">
                            Utility Token
                        </div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Buy Fitness Products</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Challenge friends</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Gamification Core</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Contest Engine</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;User Rank Boost</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Reward Friends</div>
                        <div className="u-invest-item-list"> <img src="/images/list.svg" />&nbsp;&nbsp;Yield Farms, Pools & Vaults (Workouts & Shakes) </div>
                        <div className="u-flex-around invest-btn u-btn u-responsive-after" onClick={() => {afitBuyHandler()}}>BUY AFIT </div>
						
						{buyAfitOn?
							(
							<div>
								<label className="u-flex-around invest-btn u-btn u-responsive-after">
								BNB:
								<input type="number" step="0.001" className="actifit-input" min={props.data.minBnBAFIT} max={props.data.maxBnBAFIT} onChange={(evt) => { 
									if (props.data){
										if (evt.target.value < 0) evt.target.value = props.data.minBnBAFIT; 
										if (evt.target.value > props.data.maxBnBAFIT) evt.target.value = props.data.maxBnBAFIT; 
										bnbAfit = evt.target.value; 
										setCount(count + 1)
										}
									} 
								}
									
								onBlur={(evt) => {
									if (props.data){
										if (evt.target.value < props.data.minBnBAFIT) evt.target.value = props.data.minBnBAFIT; 
										if (evt.target.value > props.data.maxBnBAFIT) evt.target.value = props.data.maxBnBAFIT; 
										bnbAfit = evt.target.value; 
										setCount(count + 1)
									}
								}}	
								/></label>
								<span className="u-responsive-after">Matching AFIT: {bnbAfit / glbprops.data.pricePerAFIT}</span>
								<div className="u-flex-around invest-btn u-btn u-responsive-after" onClick={() => {buyAfitConfirm(props)}}>Proceed
								{ 
									buyAfitProgress ?	
									(<img src="/images/Spinner-1s-200px.svg" className="spinner-img"/>)
									:(<span></span>)
								}
								</div>
							</div>
							):(<span></span>)
						}
						
						
						<div>{props.data && !isNaN(props.data.investedBnBAFIT) && props.data.investedBnBAFIT > 0 ? ( <div className="claimable claimable-hidden">Invested BNB {props.data.investedBnBAFIT}</div>):(<span />)}</div>
						<div>{props.data && !isNaN(props.data.claimableAFIT) && props.data.claimableAFIT > 0 ? ( 
							<div>
								<div className="claimable claimable-hidden">Claimable AFIT {props.data.claimableAFIT}</div>
								<div>
									{props.data.fundsClaimableAFIT && ! props.data.claimedAFIT ? (
										<div className="u-flex-around invest-btn u-btn" onClick={() => {claimAFITRewards()}}>CLAIM AFIT</div>
									):(<span />)
									}
								</div>
							</div>
						):(<span />)}</div>
						
						<div>{props.data && props.data.fundsClaimableAFIT && props.data.claimedAFIT ? (<div className="claimable claimable-hidden">AFIT Claimed!</div>):(<span />)}</div>
						
                    </div>
                </Fade>
            </div>
            <div id="buy" className="u-invest-items u-responsive-before" style={{ marginTop: "0" }}>
                <Zoom>
                    <div className="u-invest-item">
						<div className="u-flex-around invest-btn u-btn" onClick={() => {afitxBuyHandler()}}>BUY AFITX </div>
						
						{buyAfitxOn?
							(
							<div>
							<label className="u-flex-around invest-btn u-btn">
							BNB:
							<input type="number" step="0.001" className="actifit-input" min={props.data.minBnBAFITX} max={props.data.maxBnBAFITX} onChange={(evt) => { 
								if (props.data){
								if (evt.target.value < 0) evt.target.value = props.data.minBnBAFITX; 
								if (evt.target.value > props.data.maxBnBAFITX) evt.target.value = props.data.maxBnBAFITX; 
								bnbAfitx = evt.target.value; 
								setCount(count + 1)
							}} }
								
							onBlur={(evt) => {
								if (props.data){
								if (evt.target.value < props.data.minBnBAFITX) evt.target.value = props.data.minBnBAFITX; 
								if (evt.target.value > props.data.maxBnBAFITX) evt.target.value = props.data.maxBnBAFITX; 
								bnbAfitx = evt.target.value; 
								setCount(count + 1)
								}
							}}	
							/></label>
							<span>Matching AFITX: {bnbAfitx / glbprops.data.pricePerAFITX}</span>
							<div className="u-flex-around invest-btn u-btn" onClick={() => {buyAfitxConfirm(props)}}>Proceed
							{ 
									buyAfitxProgress ?	
									(<img src="/images/Spinner-1s-200px.svg" className="spinner-img"/>)
									:(<span></span>)
								}
							</div>
							</div>
							):(<span></span>)
						}
						
						<div>{props.data && !isNaN(props.data.investedBnBAFITX) && props.data.investedBnBAFITX > 0 ? ( <div className="claimable">Invested BNB {props.data.investedBnBAFITX}</div>):(<span />)}</div>
						<div>{props.data && !isNaN(props.data.claimableAFITX) && props.data.claimableAFITX > 0 ? ( 
							<div>
								<div className="claimable">Claimable AFITX {props.data.claimableAFITX}</div>
								<div>
									{props.data.fundsClaimableAFITX && ! props.data.claimedAFITX ? (
										<div className="u-flex-around invest-btn u-btn" onClick={() => {claimAFITXRewards()}}>CLAIM AFITX</div>
									):(<span />)
									}
								</div>
							</div>
						):(<span />)}</div>
						<div>{props.data && props.data.fundsClaimableAFITX && props.data.claimedAFITX ? (<div className="claimable">AFITX Claimed!</div>):(<span />)}</div>
                    </div>
					
                </Zoom>
                <Zoom>
                    <div className="u-invest-item">
                        <div className="u-flex-around invest-btn u-btn" onClick={() => {afitBuyHandler()}}>BUY AFIT </div>
						
						{buyAfitOn?
							(
							<div >
								<label className="u-flex-around invest-btn u-btn">
								BNB:
								<input type="number" step="0.001" className="actifit-input" min={props.data.minBnBAFIT} max={props.data.maxBnBAFIT} onChange={(evt) => { 
									if (props.data){
									if (evt.target.value < 0) evt.target.value = props.data.minBnBAFIT; 
									if (evt.target.value > props.data.maxBnBAFIT) evt.target.value = props.data.maxBnBAFIT; 
									bnbAfit = evt.target.value; 
									setCount(count + 1)
									}} 
								}
									
								onBlur={(evt) => {
									if (props.data){
									if (evt.target.value < props.data.minBnBAFIT) evt.target.value = props.data.minBnBAFIT; 
									if (evt.target.value > props.data.maxBnBAFIT) evt.target.value = props.data.maxBnBAFIT; 
									bnbAfit = evt.target.value; 
									setCount(count + 1)
									}
								}}	
								/></label>
								<span>Matching AFIT: {(bnbAfit / glbprops.data.pricePerAFIT)}</span>
								<div className="u-flex-around invest-btn u-btn" onClick={() => {buyAfitConfirm(props)}}>
								Proceed
								{ buyAfitProgress ?	
									(<img src="/images/Spinner-1s-200px.svg" className="spinner-img"/>)
									:(<span></span>)
								}
								</div>
							</div>
							):(<span></span>)
						}
						
						
						<div>{props.data && !isNaN(props.data.investedBnBAFIT) && props.data.investedBnBAFIT > 0 ? ( <div className="claimable">Invested BNB {props.data.investedBnBAFIT}</div>):(<span />)}</div>
						<div>{props.data && !isNaN(props.data.claimableAFIT) && props.data.claimableAFIT > 0 ? ( 
							<div>
								<div className="claimable">Claimable AFIT {props.data.claimableAFIT}</div>
								<div>
									{props.data.fundsClaimableAFIT && ! props.data.claimedAFIT ? (
										<div className="u-flex-around invest-btn u-btn u-responsive-after" onClick={() => {claimAFITRewards()}}>CLAIM AFIT</div>
									):(<span />)
									}
								</div>
							</div>
						):(<span />)}</div>
						
						<div>{props.data && props.data.fundsClaimableAFIT && props.data.claimedAFIT ? (<div className="claimable">AFIT Claimed!</div>):(<span />)}</div>
						
                    </div>
					
                </Zoom>
            </div>
            <img className="invest_money" src="/images/money1.png" />
        </div>
    );
}
