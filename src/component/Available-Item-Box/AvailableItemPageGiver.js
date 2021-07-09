import React, { useContext } from 'react';
import WrapperGiver from '../Wrapper-Box/WrapperGiver';

import "./AvailableItemPageGiver.css";
import ContextObj from "../../Context-Api/ContextFile";
import ProductCardGiver from './ProductCard-Box/ProductCardGiver';
import SearchBoxGiver from '../Search-Box/SearchBoxGiver';
import notFoundSvg from "../../Image/notFound.svg";


function AvailableItemPageGiver() {
    const contextValue = useContext(ContextObj);
    const lengther = contextValue.SelectedItem.length !== contextValue.AvailList.length;

    function giveAllAvailList() {
        contextValue.homeGo();
    }
    
    return (
        <WrapperGiver className = "AvailableList__mainContainer">
            {lengther && <div className = "AvailList__homeBtn" onClick = {giveAllAvailList}>
                <i className = "fas fa-home fa-3x"></i>
            </div>}

            <SearchBoxGiver />

            {contextValue.SelectedItem.length !== 0 ? <WrapperGiver className = "AvailableList__productContainer">
                {contextValue.SelectedItem.map((item) => <ProductCardGiver item = {item} key = {item.id}/>)}
            </WrapperGiver> : ""}

            {contextValue.SelectedItem.length === 0 ? <WrapperGiver className = "noListFoundMsg">
                <h4>No Item Found ! Sry</h4>
                <img src={notFoundSvg} alt="Not FoundImage" width = "100" height = "100" />
            </WrapperGiver> : ""}

        </WrapperGiver>
    )
}

export default AvailableItemPageGiver;
