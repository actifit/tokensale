/* eslint-disable */


import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import './style.css';

import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import ReactDOM from 'react-dom';
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';

//connectors to BSC for querying purposes
import Web3 from 'web3';

import { afitAbi, afitxAbi, tsAbi } from 'abi/abis';

let tsStartDate = 1632153600000;
let tsEndDate = 1635717600000;
let minBnBAFIT, minBnBAFITX, maxBnBAFIT, maxBnBAFITX, pricePerAFIT, pricePerAFITX, hardCapBnbAmountAFIT, hardCapBnbAmountAFITX, totalDepositedBnbAFIT = 0, totalDepositedBnbAFITX = 0, fundsClaimableAFIT, fundsClaimableAFITX, tokensLeftAFIT, tokensLeftAFITX, totalTokensAFIT, totalTokensAFITX, investedBnBAFIT, investedBnBAFITX, claimableAFIT = 0, claimableAFITX = 0, claimedAFIT, claimedAFITX;

const testNet = false;
//mainnet
let tsAfitContract = '0x910c88A15738D16d48FF3696D6cc82bbbaF64809';
let tsAfitxContract = '0x7DbAc451F65a969d507C78F6e471a257Ef45E10e';
//testnet
if (testNet){
	tsAfitContract = '0xa69ab8dd573daa5aebb3831da74d82461ba89c7b';
	tsAfitxContract = '0xb7A5E6e9e53518882f1E887F93cD3fD07806391E';
}


async function launch(){
	await window.ethereum.send('eth_requestAccounts')	
}

const web3 = new Web3(window.ethereum);
let contractAFIT, contractAFITX;

if (window.ethereum){

	launch();

//let tokenAbi = parsed;
//const tgtAddress = "0x4Bd6571495913cE075dA637B300774e129c67CBE";
//console.log(afitxAbi);
	contractAFIT = new web3.eth.Contract(tsAbi, tsAfitContract);
	contractAFITX = new web3.eth.Contract(tsAbi, tsAfitxContract);


//grab smart contract params AFIT
contractAFIT.methods.minimumDepositBnbAmount().call().then(function (res){
	(!isNaN(res)?minBnBAFIT = Web3.utils.fromWei(res):'');
	//console.log('minimumDepositBnbAmount:'+minBnBAFIT);
});
contractAFIT.methods.maximumDepositBnbAmount().call().then(function (res){
	(!isNaN(res)?maxBnBAFIT = Web3.utils.fromWei(res):'');
	//console.log('maximumDepositBnbAmount:'+maxBnBAFIT);
});
contractAFIT.methods.presaleStartTimestamp().call().then(function (res){
	//console.log('start time stamp:'+res);
	tsStartDate = res * 1000;
});
contractAFIT.methods.presaleEndTimestamp().call().then(function (res){
	//console.log('end time stamp:'+res);
	tsEndDate = res * 1000;
});
contractAFIT.methods.rewardTokenPrice().call().then(function (res){
	(!isNaN(res)?pricePerAFIT = Web3.utils.fromWei(res):'');
	//console.log('rewardTokenPrice:'+pricePerAFIT);
});
contractAFIT.methods.hardCapBnbAmount().call().then(function (res){
	(!isNaN(res)?hardCapBnbAmountAFIT = Web3.utils.fromWei(res):'');
	//console.log('hardCapBnbAmount:'+hardCapBnbAmountAFIT);
});
contractAFIT.methods.totalDepositedBnbBalance().call().then(function (res){
	(!isNaN(res)?totalDepositedBnbAFIT = Web3.utils.fromWei(res):'');
	//console.log('totalDepositedBnbBalance:'+totalDepositedBnbAFIT);
});
contractAFIT.methods.fundsClaimable().call().then(function (res){
	//console.log('fundsClaimable:'+res);
	fundsClaimableAFIT = res;
});
contractAFIT.methods.tokensLeft().call().then(function (res){
	(!isNaN(res)?tokensLeftAFIT = Web3.utils.fromWei(res):'');
	//console.log('tokensLeft:'+tokensLeftAFIT);
});
contractAFIT.methods.totalTokens().call().then(function (res){
	(!isNaN(res)?totalTokensAFIT = Web3.utils.fromWei(res):'');
	//console.log('totalTokens:'+totalTokensAFIT);
});


//grab smart contract params AFITX
contractAFITX.methods.minimumDepositBnbAmount().call().then(function (res){
	(!isNaN(res)?minBnBAFITX = Web3.utils.fromWei(res):'');
	//console.log(minBnBAFITX);
	//console.log('minimumDepositBnbAmount:'+minBnBAFITX);
});
contractAFITX.methods.maximumDepositBnbAmount().call().then(function (res){
	(!isNaN(res)?maxBnBAFITX = Web3.utils.fromWei(res):'');
	//console.log(maxBnBAFITX);
	//console.log('maximumDepositBnbAmount:'+maxBnBAFITX);
});
/*contractAFIT.methods.presaleStartTimestamp().call().then(function (res){
	console.log('start time stamp:'+res);
	tsStartDate = res * 1000;
});
contractAFIT.methods.presaleEndTimestamp().call().then(function (res){
	console.log('end time stamp:'+res);
	tsEndDate = res * 1000;
});*/
contractAFITX.methods.rewardTokenPrice().call().then(function (res){
	(!isNaN(res)?pricePerAFITX = Web3.utils.fromWei(res):'');
	//console.log('rewardTokenPrice:'+pricePerAFITX);
});
contractAFITX.methods.hardCapBnbAmount().call().then(function (res){
	(!isNaN(res)?hardCapBnbAmountAFITX = Web3.utils.fromWei(res):'');
	//console.log('hardCapBnbAmount:'+hardCapBnbAmountAFITX);
});
contractAFITX.methods.totalDepositedBnbBalance().call().then(function (res){
	(!isNaN(res)?totalDepositedBnbAFITX = Web3.utils.fromWei(res):'');
	//console.log('totalDepositedBnbBalance:'+totalDepositedBnbAFITX);
});
contractAFITX.methods.fundsClaimable().call().then(function (res){
	//console.log('fundsClaimable:'+res);
	fundsClaimableAFITX = res;
})
contractAFITX.methods.tokensLeft().call().then(function (res){
	(!isNaN(res)?tokensLeftAFITX = Web3.utils.fromWei(res):'');
	//console.log('tokensLeft:'+tokensLeftAFITX);
});
contractAFITX.methods.totalTokens().call().then(function (res){
	(!isNaN(res)?totalTokensAFITX = Web3.utils.fromWei(res):'');
	//console.log('totalTokens:'+totalTokensAFITX);
});

}

// completion text
const Completionist = () => <div className="token-div-top">Token Sale is <span>LIVE!</span></div>;



// Renderer callback with condition
const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (Date.now() >= tsEndDate){
	return '';
  }else if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
	return <div><div className="token-div-top">Token Sale <span>STARTS</span> in</div><div className="token-div-down">{zeroPad(days)}:{zeroPad(hours)}:{zeroPad(minutes)}:{zeroPad(seconds)}</div></div>;
  }
};

export default function Landing(props) {
	
	const { account, connect, reset } = useWallet()
	//const { onPresentAccountModal } = useWalletModal(connect, reset, account)
	
	const { onPresentConnectModal, onPresentAccountModal } = useWalletModal(connect, reset, account);
	const accountEllipsis = account ? `${account.substring(0, 4)}...${account.substring(account.length - 4)}` : null;	
	//load up account investments
	//console.log(account);
	const [count, setCount] = useState(0);
	
	if (account && window.ethereum){
		contractAFIT.methods.investments(account).call().then(function (res){
			(!isNaN(res)?investedBnBAFIT = Web3.utils.fromWei(res):'');
			//console.log('investments AFIT:'+investedBnBAFIT);
			
			if (investedBnBAFIT > 0){
				
				setCount(count + 1);
			//check if funds were claimed already
			contractAFIT.methods.claimed(account).call().then(function (res){
				claimedAFIT = res;
				//console.log('claimedAFIT:'+claimedAFIT);
				if (!claimedAFIT){
					contractAFIT.methods.claimableAmount().call({from:account}).then(function (res){
						(!isNaN(res)?claimableAFIT = Web3.utils.fromWei(res):'');
						//console.log('claimableAFIT:'+claimableAFIT);
					}).catch(function(err){console.log(err); claimableAFIT = 0;});
				}
				
			});
			}
			
		}).catch(function(err){console.log(err)});
		
		contractAFITX.methods.investments(account).call().then(function (res){
			(!isNaN(res)?investedBnBAFITX = Web3.utils.fromWei(res):'');
			//console.log('investments AFITX:'+investedBnBAFITX);
			
			if (investedBnBAFITX > 0){
				setCount(count + 1);
			//check if funds were claimed already
			contractAFITX.methods.claimed(account).call().then(function (res){
				
				claimedAFITX = res;
				//console.log('claimedAFITX:'+claimedAFITX);
				if (!claimedAFITX){
					contractAFITX.methods.claimableAmount().call({from:account}).then(function (res){
						(!isNaN(res)?claimableAFITX = Web3.utils.fromWei(res):'');
						//console.log('claimableAFITX:'+claimableAFITX);
					}).catch(function(err){console.log(err); claimableAFITX = 0;});
				}
				
			});
			}
		}).catch(function(err){console.log(err)});
		
	}
	
	//sendData = () => {
	let containerObj = new Object();
	containerObj.investedBnBAFIT = investedBnBAFIT;
	containerObj.investedBnBAFITX = investedBnBAFITX;
	containerObj.claimableAFIT = claimableAFIT;
	containerObj.claimableAFITX = claimableAFITX;
	containerObj.fundsClaimableAFIT = fundsClaimableAFIT;
	containerObj.fundsClaimableAFITX = fundsClaimableAFITX;
	containerObj.contractAFIT = contractAFIT;
	containerObj.contractAFITX = contractAFITX;
	containerObj.claimedAFIT = claimedAFIT;
	containerObj.claimedAFITX = claimedAFITX;
	containerObj.totalDepositedBnbAFIT = totalDepositedBnbAFIT;
	containerObj.totalDepositedBnbAFITX = totalDepositedBnbAFITX;
	containerObj.account = account;
	containerObj.minBnBAFIT = minBnBAFIT;
	containerObj.minBnBAFITX =  minBnBAFITX;
	containerObj.maxBnBAFIT = maxBnBAFIT; 
	containerObj.maxBnBAFITX = maxBnBAFITX;
	containerObj.web3 = web3;
	containerObj.pricePerAFIT = pricePerAFIT;
	containerObj.pricePerAFITX = pricePerAFITX;
	//console.log(containerObj);
	props.parentCallback(containerObj);
    //},
	

    return (
        <div className="navbars">
            <div className="navbars-top u-flex-between">
                <a href="https://actifit.io" className="Actifit-btn u-flex-around u-btn u-responsive-before" target="_blank">Actifit.io</a>
                <div className="social-icons u-flex-between u-responsive-before">
                    <a href="https://www.facebook.com/Actifit.fitness/" target="_blank"><img src="/images/facebook.svg" /></a>
                    <a href="https://www.instagram.com/actifit.fitness/" target="_blank"><img src="/images/instagram.svg" /></a>
                    <a href="https://discord.gg/aHtcA6r" target="_blank"><img src="/images/cartoon.svg" /></a>
                    <a href="https://www.twitter.com/Actifit_fitness" target="_blank"><img src="/images/twitter.svg" /></a>
                    <a href="https://t.me/actifit" target="_blank"><img src="/images/ariplane.svg" /></a>
                </div>
                <div className="u-flex-around u-responsive-after">
                    <a href="https://actifit.io/#team" className="Connect-btn-a u-flex-around" target="_blank">Team</a>
                    <a href="https://docs.actifit.io" className="Connect-btn-a u-flex-around" target="_blank">Docs</a>
                    <div>
						  {account ? (
							<a href="#"
							  className="Connect-btn u-flex-around u-btn" 
							  size="sm"
							  variant="tertiary"
							  onClick={() => {
								onPresentAccountModal();
							  }}
							>
							  {accountEllipsis}
							</a>
						  ) : (
							<a href="#"
							  className="Connect-btn u-flex-around u-btn" 
							  size="sm"
							  onClick={() => {
								onPresentConnectModal();
							  }}
							>
							  Connect
							</a>
						  )}
						</div>
                </div>
            </div>
            <div className="navbars-down u-flex-between u-flex-column">
                <div className="u-flex-between navbars-down-top u-responsive">
                    <a className="logo-div u-flex-around u-flex-column">
                        <img src="/images/logo.svg" />
                        <div>From the Creators of Actifit</div>
                    </a>
                    <Zoom>
                        <div className="token-div u-flex-around u-flex-column">
							<Countdown date={tsStartDate} renderer={renderer}/>
                        </div>
                    </Zoom>
                    <div className="u-flex-around u-responsive-before">
                        <a href="https://actifit.io/#team" className="Connect-btn-a u-flex-around" target="_blank">Team</a>
                        <a href="https://docs.actifit.io" className="Connect-btn-a u-flex-around" target="_blank">Docs</a>
						
						<div>
						  {account ? (
							<a href="#"
							  className="Connect-btn u-flex-around u-btn" 
							  size="sm"
							  variant="tertiary"
							  onClick={() => {
								onPresentAccountModal();
							  }}
							>
							  {accountEllipsis}
							</a>
						  ) : (
							<a href="#"
							  className="Connect-btn u-flex-around u-btn" 
							  size="sm"
							  onClick={() => {
								onPresentConnectModal();
							  }}
							>
							  Connect
							</a>
						  )}
						</div>
						
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
