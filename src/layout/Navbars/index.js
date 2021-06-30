/* eslint-disable */


import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import './style.css';

import { Button, useWalletModal } from '@pancakeswap-libs/uikit'
import { useWallet } from '@binance-chain/bsc-use-wallet'

import ReactDOM from 'react-dom';
import Countdown, { zeroPad, calcTimeDelta, formatTimeDelta } from 'react-countdown';

// Random component
const Completionist = () => <div className="token-div-top">Token Sale is <span>RUNNING!</span></div>;

const tsStartDate = 1627920000000;
const tsEndDate = 1628092800000;

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

    return (
        <div className="navbars">
            <div className="navbars-top u-flex-between">
                <a href="https://actifit.io" className="Actifit-btn u-flex-around u-btn u-responsive-before" target="_blank">Actifit.io</a>
                <div className="social-icons u-flex-between u-responsive-before">
                    <a href="https://www.facebook.com/Actifit.fitness/" target="_blank"><img src="/assets/img/facebook.svg" /></a>
                    <a href="https://www.instagram.com/actifit.fitness/" target="_blank"><img src="/assets/img/instagram.svg" /></a>
                    <a href="https://discord.gg/aHtcA6r" target="_blank"><img src="/assets/img/cartoon.svg" /></a>
                    <a href="https://www.twitter.com/Actifit_fitness" target="_blank"><img src="/assets/img/twitter.svg" /></a>
                    <a href="https://t.me/actifit" target="_blank"><img src="/assets/img/ariplane.svg" /></a>
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
                        <img src="/assets/img/logo.svg" />
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
