import React from 'react';
import AvailableItemPageGiver from '../../component/Available-Item-Box/AvailableItemPageGiver';
import NavBarGiver from '../../component/NavBar-Box/NavBarGiver';
import WrapperGiver from '../../component/Wrapper-Box/WrapperGiver';
import "./EcommercePageGiver.css";




function EcommercePageGiver() {
    return (
        <WrapperGiver className = "EcommercePage__mainContainer">
            <NavBarGiver />
            <AvailableItemPageGiver />
           
        </WrapperGiver>
    )
}

export default EcommercePageGiver;
