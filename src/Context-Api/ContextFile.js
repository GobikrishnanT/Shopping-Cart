import React from 'react';

const ContextObj = React.createContext({
    AvailList : [],
    SelectedItem : [],
    PurchasedItem : [],
    PurchasedTotalAmount : 0,
    PurchasedTotalQuantity : 0,
    searchTheItem : (searchedValue) => {},
    homeGo : () => {},
    addItem : (newItem) => {},
    removeItem : (id) => {},
    useLoggedIn : false,
    userLogHandler : (status) => {},
    userInfo : {},
    ClearAll : () => {}
});

export default ContextObj;