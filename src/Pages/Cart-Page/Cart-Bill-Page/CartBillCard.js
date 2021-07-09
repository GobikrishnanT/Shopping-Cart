import React, { useContext } from 'react';
import WrapperGiver from '../../../component/Wrapper-Box/WrapperGiver';
import ContextObj from '../../../Context-Api/ContextFile';
import "./CartBillCard.css";

function CartBillCard(props) {
    const contextValue = useContext(ContextObj);
    console.log(contextValue);

    function IncreaTheItemQuan() {
        let exportItem = {
            ...props.item,
            orderedQuantity : 1,
            orderedPrice : 1 * +props.item.price
        };
        
        contextValue.addItem(exportItem);
    }

    function decreaTheItem() {
        contextValue.removeItem(props.item.id);
    }
    console.log(props);
    return (
        <WrapperGiver className = "CardBill__SepCard">

            <WrapperGiver className = "CardBill__ImageSection">
                <img src={props.item.image} alt="CardBillImage" width = "100" height = "100" />
            </WrapperGiver>

            <WrapperGiver className = "CardBill__ContentSection">
                <WrapperGiver className = "CardBill__Content_ItemName">
                    <h4>{props.item.title}</h4>
                </WrapperGiver>

                <WrapperGiver className = "CardBill__Content__PriceSection">
                    <h4>Rs. {props.item.price}</h4>
                </WrapperGiver>

                <WrapperGiver className = "CardBill_Content__QuanSection">
                    <h4>{props.item.orderedQuantity}</h4>
                </WrapperGiver>

                <WrapperGiver className = "CardBill__Content_ButtonSection">
                    <button type = "button" className = "IncreaButton" onClick = {IncreaTheItemQuan}><i className = "fas fa-plus"></i></button>
                    <button type = "button" className = "DecreaButton" onClick = {decreaTheItem}><i className = "fas fa-minus"></i></button>
                </WrapperGiver>
            </WrapperGiver>

        </WrapperGiver>
    )
}

export default CartBillCard;
