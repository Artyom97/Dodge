import React from 'react';
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import './App.scss';
import MainArea from "./components/Main/MainArea/MainArea";
import CardHistories from "./components/Main/CardHistories/CardHistories";
import BrothersInfo from "./components/Main/BrothersInfo/BrothersInfo";

export default function App() {
    return (
        <div className="App">
            <Header/>
            <CardHistories />
            <MainArea />
            <CardHistories />
            <BrothersInfo />
            <Footer/>
       </div> //changed 
    );
}

