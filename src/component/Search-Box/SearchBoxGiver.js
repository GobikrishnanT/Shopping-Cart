import React, { useContext, useState } from 'react';
import ContextObj from '../../Context-Api/ContextFile';
import WrapperGiver from '../Wrapper-Box/WrapperGiver';
import "./SearchBoxGiver.css";

function SearchBoxGiver() {
    const contextValue = useContext(ContextObj);
    const [enteredItem , setEnteredItem] = useState("");

    function listTheSearchedItem() {
        contextValue.searchTheItem(enteredItem);
        setEnteredItem("");
    }

    function handleSearchChange(event) {
        setEnteredItem(event.target.value);
    }
    return (
        <WrapperGiver className = "eCommerCe-SearchBox__mainContainer">
            <WrapperGiver className = "searchInputBox">
                <label htmlFor="searchTheCommerce"></label>
                <input type="text" name="" id="searchTheCommerce" value = {enteredItem} onChange = {handleSearchChange} placeholder = "Search"/>
            </WrapperGiver>
            <WrapperGiver className = "searchButtonSection">
                <button type = "button" className = " searchForItem" onClick = {listTheSearchedItem}><i className="fas fa-search fa-2x"></i></button>
            </WrapperGiver>

        </WrapperGiver>
    )
}

export default SearchBoxGiver;
