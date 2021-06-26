import React, { useState } from 'react';
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import './style.css';

import Navbars from '../layout/Navbars';

import bsc from '@binance-chain/bsc-use-wallet';
import { useWallet, UseWalletProvider } from 'use-wallet';

export default function Landing() {

    return (
        <UseWalletProvider connectors={{ bsc }}>
			<Navbars />
		</UseWalletProvider>
    );
}
