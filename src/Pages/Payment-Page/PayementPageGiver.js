import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import WrapperGiver from '../../component/Wrapper-Box/WrapperGiver';
import ContextObj from '../../Context-Api/ContextFile';
import "./PaymentPageGiver.css";

function PayementPageGiver() {
    const tickSymbol = <i class="far fa-check-square"></i>;
    const [orderedState , setOrderedState] = useState(false);
    const history = useHistory();
    function GoBackToBillPage() {
        history.push("/Your-Cart-page");
    }
    function onFormSubmit(event) {
        event.preventDefault();
        setOrderedState(true);

        setTimeout(() => {
            contextValue.ClearAll();
            history.push("/E-commerce-main-app-page");
        } , 2000);
    }
    const contextValue = useContext(ContextObj);
    return (
        <WrapperGiver className = "paymentGateWay__mainContainer">
            <form className = "mainForm">
                <WrapperGiver className = "MainForm__TitleSection">
                    <h4>Payment Gateway</h4>
                </WrapperGiver>
                <WrapperGiver className = "mainForm__userName">
                    <label htmlFor="orderedUserName">Name</label><br></br>
                    <input type="text" name="" id="orderedUserName" defaultValue = {contextValue.userInfo.givenName} />
                </WrapperGiver>
                <WrapperGiver className = "mainForm__userAddress">
                    <label htmlFor="orderedUserAddress">Address Line 1</label><br></br>
                    <input type="text" name="" id="orderedUserAddress" />
                </WrapperGiver>

                <WrapperGiver className = "mainForm__StateWithCountry">
                    <WrapperGiver className = "orderedUserState">
                        <label htmlFor="orderedUserState_Id">State</label><br></br>
                        <input type="text" name="" id="orderedUserState_Id" />
                    </WrapperGiver>

                    <WrapperGiver className = "orderedUserCountry">
                        <label htmlFor="orderedUserCountry_Id">Country</label><br></br>
                        <input type="text" name="" id="orderedUserCountry_Id" />
                    </WrapperGiver>
                </WrapperGiver>

                <WrapperGiver className = "mainForm__PinCode">
                    <label htmlFor="orderedUserPincode_Id">Pincode</label><br></br>
                    <input type="text" name="" id="orderedUserPincode_Id" />
                </WrapperGiver>

                <WrapperGiver className = "mainForm__CardInfo_number">
                   <WrapperGiver className = "CardInfo_innerContainer_number">
                        <label htmlFor="userCardInfo__cardNumber">Card Number</label><br></br>
                        <input type="text" name="" id="userCardInfo__cardNumber" />
                   </WrapperGiver>

                   <WrapperGiver className = "CardInfo_innerContainer_Date">
                        <label htmlFor="userCardInfo__cardValideDate">Validity</label><br></br>
                        <input type="month" name="" id="userCardInfo__cardValideDate" />
                    </WrapperGiver>

                    <WrapperGiver className = "CardInfo_innerContainer_CVV">
                        <label htmlFor="userCardInfo__cardCVV">CVV</label><br></br>
                        <input type="text" name="" id="userCardInfo__cardCVV" maxLength = "3" minLength = "3" />
                    </WrapperGiver>
                </WrapperGiver>

                <WrapperGiver className = "PayementMainSubmitSection">
                    <button type = "button" className = "GoBackFromFinal" onClick = {GoBackToBillPage}>Go back</button>
                    <button type = "submit" className = {orderedState ? "payFinalBtn active" : "payFinalBtn"} onClick = {onFormSubmit}>{orderedState ? tickSymbol : "Pay"}</button>
                </WrapperGiver>

            </form>
        </WrapperGiver>
    )
}

export default PayementPageGiver;
