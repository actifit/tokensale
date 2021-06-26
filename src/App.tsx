import React, { useEffect, Suspense, lazy } from 'react'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { useWallet } from '@binance-chain/bsc-use-wallet'
import { ResetCSS } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js'
import { useFetchPublicData } from 'state/hooks'
import GlobalStyle from './style/Global'
import Menu from './components/Menu'
import PageLoader from './components/PageLoader'

import './App.css';
import Mains from './Mains';

// Route-based code splitting
// Only pool is included in the main bundle because of it's the most visited page'
// const Home = lazy(() => import('./views/Home'))

// This config is required for number formating
BigNumber.config({
  EXPONENTIAL_AT: 1000,
  DECIMAL_PLACES: 80,
})

const App: React.FC = () => {
  const { account, connect } = useWallet()
  useEffect(() => {
    if (!account && window.localStorage.getItem('accountStatus')) {
      connect('injected')
    }
  }, [account, connect])

  useFetchPublicData()

  return (
    <Router>
      <ResetCSS />
      <GlobalStyle />
      
        <Suspense fallback={<PageLoader />}>
          <Switch>
            <Route path="/" exact>
              <Mains />
            </Route>
            
          </Switch>
        </Suspense>
      
    </Router>
  )
}

export default React.memo(App)
