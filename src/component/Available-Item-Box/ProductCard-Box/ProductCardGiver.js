import React, { useContext, useState } from 'react';
import { useHistory, useRouteMatch , Link} from 'react-router-dom';
import ContextObj from '../../../Context-Api/ContextFile';
import WrapperGiver from '../../Wrapper-Box/WrapperGiver';
import "./ProductCardGiver.css";

function ProductCardGiver(props) {
    const contextValue = useContext(ContextObj);
    const [enteredQuan , setQuan] = useState(0);

    const match = useRouteMatch();
    const history = useHistory();
    //console.log(match);
    // function knowMoreHandle() {
    //     history.push(`/User?id=1`);
    // }
    function addToTheCart() {
        //console.log(enteredQuan);
        if(enteredQuan !== 0) {
            let exportItem = {
                ...props.item,
                orderedQuantity : enteredQuan,
                orderedPrice : +enteredQuan * +props.item.price
            };
            setQuan(0);
            contextValue.addItem(exportItem);
        }
        
    }

    function handleQuanChange(event) {
        setQuan(event.target.value);
    }

    return (
        <WrapperGiver className = {`${props.item.id} sepProductCard`}>
            <WrapperGiver className = "sepCard__imageSection">
                <img src={props.item.image} alt="ItemImage" width = "100" height = "100" />
            </WrapperGiver>

            <WrapperGiver className = "sepCard__ProductName">
                <h4>{props.item.title}</h4>
            </WrapperGiver>

            <WrapperGiver className = "sepCard__PriceSection">
                <h4>Rs . {props.item.price}</h4>
            </WrapperGiver>

            <WrapperGiver className = "sepCard__QuantitySection">
                <label htmlFor="userSelectedInput">Quantity</label><br></br>
                <input type="number" name="" id="userSelectedInput" min = "1" max = "10" value = {enteredQuan} onChange = {handleQuanChange}/>
            </WrapperGiver>

            <WrapperGiver className = "sepCard__buttonSection">
                <Link to = {`/ProductDetail/${props.item.id}`} className = "linktoKnowMore">View</Link>
                <button className = "sepCard__AddToCart_button" onClick = {addToTheCart}>Add To Cart</button>
            </WrapperGiver>
        </WrapperGiver>
    )
}

export default ProductCardGiver;

// <button className = "sepCard__knowMore_button" onClick = {knowMoreHandle}>View</button>
