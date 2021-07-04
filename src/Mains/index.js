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

let data;
function callbackFunction (childData) {
	data = childData;
};

function App() {
    return (
        <div className="App">
            <Navbars parentCallback = {callbackFunction}/>
            <Header />
            <Invest data={data}/>
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