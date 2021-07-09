import React, { useContext } from 'react';
import WrapperGiver from '../../component/Wrapper-Box/WrapperGiver';
import ContextObj from '../../Context-Api/ContextFile';
import CartBillCard from './Cart-Bill-Page/CartBillCard';
import "./CartPageGiver.css";
import NotFoundSvg from "../../Image/notFound.svg";
import {Link, useHistory} from "react-router-dom";
import {Elements , CardElement , ElementsConsumer} from "@stripe/react-stripe-js";
import {loadStripe} from "@stripe/stripe-js";

const stripePromise = loadStripe('pk_test_51JAWrySBfEkx6Q1iAkLkbZNc19vGfWf8Gbc6bXOP3KVsZ77KQZzAul9oYls8Fr0gimOuqhFHqNYV3rxzFsbtZxYZ00NvFtQ0mK');

function CartPageGiver() {
    const history = useHistory();


    function payTheBill() {

        history.push("/paymentGateway");
    }

    function handleToken(token ,add) {
        console.log(token , add);
    }
    const contextValue = useContext(ContextObj);
    let contentToShow = "";
    if(contextValue.PurchasedItemcon.length !== 0) {
        contentToShow = <WrapperGiver className = "CartBill__mainContainer">
        <WrapperGiver className = "CartBill__PurcahsedItem">
            <WrapperGiver className = "CartBill__PurchasedItem__Inner_1">
                <h4> Hey! {contextValue.userInfo.givenName} Welcome to Your Cart</h4>
            </WrapperGiver>
            <WrapperGiver className = "carBill__PurchasedItem__Inner2">
                {contextValue.PurchasedItemcon.map((item) => <CartBillCard item = {item} key = {item.id} />)}
            </WrapperGiver>
        </WrapperGiver>

        <WrapperGiver className = "CartBill__PurchasedBill">
            <WrapperGiver className = "PaySection__TitleSection">
                Total Bill
            </WrapperGiver>

            <WrapperGiver className = "TotalBill_WithPaySection">
                <h4>Purchased Item : {contextValue.PurchasedTotalQuantity}</h4>
                <h4>Total Amount: {(contextValue.PurchasedTotalAmount).toFixed(2)} INR</h4>
            </WrapperGiver>
            <WrapperGiver className = "paySection_PayButton">
                <button type = "button" className = "paySection__mainPayButtton" onClick = {payTheBill}>Pay Rs. {contextValue.PurchasedTotalAmount}</button>
            </WrapperGiver>
        </WrapperGiver>
    </WrapperGiver>;

    }
    else {
        contentToShow = 
            <WrapperGiver className = "PageWhenNoSecledtedItem">
                <h3>It seems like Your cart is Empty</h3>
                <img src={NotFoundSvg} alt="Not Found" width = "100" height = "100" />

                <Link to = "/E-commerce-main-app-page">Explore</Link>
            </WrapperGiver>;
        
    }
    return (
        contentToShow
    )
}

export default CartPageGiver;
