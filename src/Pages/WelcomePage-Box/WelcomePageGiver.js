import React from 'react';
import WrapperGiver from '../../component/Wrapper-Box/WrapperGiver';
import {Link} from "react-router-dom";
import "./WelcomePageGiver.css";

function WelcomePageGiver() {
    return (
        <WrapperGiver className = "welcomePage__mainContainer">
            <h1 className = "h1_WelcomeTag">Welcome</h1>
            <Link to = "/E-commerce-main-app-page">Explore</Link>
        </WrapperGiver>
    )
}

export default WelcomePageGiver;
