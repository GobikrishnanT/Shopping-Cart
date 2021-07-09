import React from 'react';
import EcommercePageGiver from './Pages/E-commerce-Box/EcommercePageGiver';
import {Redirect, Route , Switch} from "react-router-dom";
import ProductDetailGiver from './Pages/ProductDetail-Page/ProductDetailGiver';
import CartPageGiver from "./Pages/Cart-Page/CartPageGiver";
import LoginPageGiver from "./Pages/Login-Page/LoginPageGiver";
import PayementPageGiver from './Pages/Payment-Page/PayementPageGiver';
import { useContext } from 'react';
import ContextObj from './Context-Api/ContextFile';
import WelcomePageGiver from './Pages/WelcomePage-Box/WelcomePageGiver';



function App() {
  const contextValue = useContext(ContextObj);
  
  return (


      <Switch>

        <Route path = "/" exact>
          <WelcomePageGiver />
        </Route>

        <Route path = "/E-commerce-main-app-page">
          <EcommercePageGiver />
        </Route>

        <Route path="/ProductDetail/:ProductId">
          <ProductDetailGiver />
        </Route>

        <Route path = "/Your-Cart-page">
          <CartPageGiver />
        </Route>

        <Route path = "/paymentGateway">
          <PayementPageGiver />
        </Route>

      </Switch>

  )
};
  

export default App;