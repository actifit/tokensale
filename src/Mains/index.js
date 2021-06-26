/* eslint-disable */


import React from 'react';
import Navbars from '../layout/Navbars';
import Header from '../component/Header';
import Invest from '../component/Invest';
import Graphicchart from '../component/Graphicchart';
import Reward from '../component/Reward';
import Fund from '../component/Fund';
import About from '../component/About';
import Aboutitem from '../component/Aboutitem';
import Company from '../component/Company';
import Footer from '../layout/Footer';
import './style.css';
function App() {
    return (
        <div className="App">
            <Navbars />
            <Header />
            <Invest />
            <Graphicchart />
            <Reward />
            <Fund />
            <About />
            <Aboutitem />
            <Company />
            <Footer />
        </div>
    );
}

export default App;