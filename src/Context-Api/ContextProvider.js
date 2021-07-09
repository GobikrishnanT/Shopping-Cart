import React, { useEffect, useState } from 'react';
import ContextObj from './ContextFile';



function ContextProvider(props) {

    //At First We want to fetch the commerce Api :
    //For that we want tone state to be empty at first :
    const [AvailList , setAvailList] = useState([]);
    const [searchedList , setSearchedList] = useState([]);
    const [userLogstatus , setUserLogStatus] = useState(false);
    const [userLogInfo , setuserLogInfo] = useState({});
    const [PurchasedItemState , setPurchasedItem] = useState({
        PurchasedItem : [],
        OrderFoodTotalprice : 0,
        orderFoodTotalQuan : 0
    });
    
    
    useEffect(() => {
        async function fetchTheitem() {
            const responseJson = await fetch("https://fakestoreapi.com/products");
            if(responseJson.ok) {
                const responseObj = await responseJson.json();
                setAvailList(responseObj);
                setSearchedList(responseObj);
            }
            else{
                //here change the url and indimate the user to close and open the page
            }
        }
        fetchTheitem();
    } , []);

    function nativeSearchFunc(searchedValue) {
        // I want to serach this value inside the available lsit :
        let tempArray = AvailList.filter((item) => item.title.toLowerCase().indexOf(searchedValue) > -1 );
        
        setSearchedList(tempArray);
    }

    function homeGoFunc() {
        setSearchedList(AvailList);
    }

    function addItem(newItem) {
       setPurchasedItem((prevState) => {
           let newState = JSON.parse(JSON.stringify(prevState));
           if(newState.PurchasedItem.length === 0) {
               newState.PurchasedItem = newState.PurchasedItem.concat(newItem);
               newState.OrderFoodTotalprice = newState.PurchasedItem.reduce((acc , curVal) => acc + curVal.orderedPrice , 0);
               newState.orderFoodTotalQuan = newState.PurchasedItem.length;
           }
           else{
               let existingIndex = -1;
               existingIndex = newState.PurchasedItem.findIndex((item) => item.id === newItem.id);
              
               if(existingIndex > -1) {
                   
                   newState.PurchasedItem[existingIndex].orderedPrice += newItem.orderedPrice;
                   newState.PurchasedItem[existingIndex].orderedQuantity = +newState.PurchasedItem[existingIndex].orderedQuantity + +newItem.orderedQuantity;
                   newState.OrderFoodTotalprice = newState.PurchasedItem.reduce((acc , curVal) => acc + curVal.orderedPrice , 0);
                   newState.orderFoodTotalQuan = newState.PurchasedItem.length;
                   console.log(newState);
               }
               else{
                newState.PurchasedItem = newState.PurchasedItem.concat(newItem);
                newState.OrderFoodTotalprice = newState.PurchasedItem.reduce((acc , curVal) => acc + curVal.orderedPrice , 0);
                newState.orderFoodTotalQuan = newState.PurchasedItem.length;
               }
           }
           return newState;
       })
    }
    function removeItemFunc(productId) {
        //first find the exisitingQuan
        //If the quan is one means delete it permenently
        //or decrease its quan by one
        setPurchasedItem((prevState) => {
            console.log(prevState);
            let newState = JSON.parse(JSON.stringify(prevState));
            let itemIndex = newState.PurchasedItem.findIndex((item) => +item.id === +productId);
            if(newState.PurchasedItem[itemIndex].orderedQuantity !== 1) {
                newState.PurchasedItem[itemIndex].orderedQuantity--;
                newState.PurchasedItem[itemIndex].orderedPrice -= newState.PurchasedItem[itemIndex].price;
                newState.OrderFoodTotalprice = newState.PurchasedItem.reduce((acc , curVal) => acc + curVal.orderedPrice , 0);
                newState.orderFoodTotalQuan = newState.PurchasedItem.length;
            }
            else {
                newState.PurchasedItem = newState.PurchasedItem.filter((item) => item.id !== productId);
                newState.OrderFoodTotalprice = newState.PurchasedItem.reduce((acc , curVal) => acc + curVal.orderedPrice , 0);
                newState.orderFoodTotalQuan = newState.PurchasedItem.length;
            }
            return newState;
        })
       
    }

    function userLogActivity(status , userInfo) {
        if(status) {
            setUserLogStatus(true);
            setuserLogInfo(userInfo);
        }
        else{
            setUserLogStatus(false);
            setuserLogInfo(userInfo);
        }
    }

    function clearAllFunc() {
        setSearchedList(AvailList);
        setPurchasedItem((prevState) => {
            let newState = JSON.parse(JSON.stringify(prevState));
            newState.PurchasedItem = [];
            newState.OrderFoodTotalprice = 0;
            newState.orderFoodTotalQuan = 0;

            return newState;
        });
        
    }

    return (
        <ContextObj.Provider value = {{

            AvailList : AvailList,
            SelectedItem : searchedList,
            PurchasedItemcon : PurchasedItemState.PurchasedItem,
            PurchasedTotalAmount : PurchasedItemState.OrderFoodTotalprice,
            PurchasedTotalQuantity : PurchasedItemState.orderFoodTotalQuan,
            searchTheItem : nativeSearchFunc,
            homeGo : homeGoFunc,
            addItem : addItem,
            removeItem : removeItemFunc,
            useLoggedIn : userLogstatus,
            userLogHandler : userLogActivity,
            userInfo : userLogInfo,
            ClearAll : clearAllFunc

        }}>
            {props.children}
        </ContextObj.Provider>
    )
}

export default ContextProvider;
