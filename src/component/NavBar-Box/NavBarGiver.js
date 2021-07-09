import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import ContextObj from '../../Context-Api/ContextFile';
import LoginPageGiver from '../../Pages/Login-Page/LoginPageGiver';
import WrapperGiver from '../Wrapper-Box/WrapperGiver';
import "./NavBarGiver.css";

function NavBarGiver() {
    const contextValue = useContext(ContextObj);
    const history = useHistory();

    function goTouserCartPage() {
        history.push("/Your-Cart-page");
    }
    return (
        <WrapperGiver className = "Ecommerce_navBar_mainContainer">

            <WrapperGiver className = "Ecommerce_navBar_forLogo">
                <i className ="fab fa-opencart fa-3x"></i>
            </WrapperGiver>

            <WrapperGiver className = "Ecommerce_navBar_navLinks">

                <WrapperGiver className = "Ecommerce_navLinks_1_userLog">
                    <LoginPageGiver />
                    {contextValue.useLoggedIn === true ? <WrapperGiver className = "userIngo">
                        <img src={contextValue.userInfo["imageUrl"]} alt="owner" width = "15" height = "15" />
                    </WrapperGiver> : ""}
                </WrapperGiver>

                <WrapperGiver className = "Ecommerce_navLinks_2_userCart">
                    <button className = "cartGoBtn" type = "button" onClick = {goTouserCartPage}>
                        Go To Cart
                    </button>
                    <h4 className = "cartGoBtn_noOfItems">{contextValue.PurchasedTotalQuantity}</h4>
                </WrapperGiver>

            </WrapperGiver>
        </WrapperGiver>
    )
}

export default NavBarGiver;
