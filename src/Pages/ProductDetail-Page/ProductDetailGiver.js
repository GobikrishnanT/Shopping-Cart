import React, { useContext } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import WrapperGiver from '../../component/Wrapper-Box/WrapperGiver';
import ContextObj from '../../Context-Api/ContextFile';
import "./ProductDetailGiver.css";

function ProductDetailGiver() {
    // const location = useLocation();
    // console.log(location);
    let params = useParams();
    console.log(params);
    const contextValue = useContext(ContextObj);
    console.log(contextValue.AvailList);
    const thatItem = contextValue.AvailList.find((item) => item.id === +params.ProductId);
    console.log(thatItem);
    return (
        <WrapperGiver className = "DetailPage__mainContainer">
            <WrapperGiver className = "DetailPage__HeroImage_Section">
                <img src={thatItem["image"]} alt="HeroMainImage" width = "100" height = "100" />
            </WrapperGiver>

            <WrapperGiver className = "DetailPage__subImage">
                <WrapperGiver className = "SubImage_1">
                    <img src={thatItem["image"]} alt="SubItem_1" width = "100" height = "100" />
                </WrapperGiver>

                <WrapperGiver className = "SubImage_2">
                    <img src={thatItem["image"]} alt="SubItem_2" width = "100" height = "100" />
                </WrapperGiver>

                <WrapperGiver className = "SubImage_3">
                    <img src={thatItem["image"]} alt="SubItem_3" width = "100" height = "100" />
                </WrapperGiver>

                <WrapperGiver className = "SubImage_4">
                    <img src={thatItem["image"]} alt="SubItem_4" width = "100" height = "100" />
                </WrapperGiver>
            </WrapperGiver>

            <WrapperGiver className = "DetailPage__ContentSection">
                <WrapperGiver className = "ContentSection__ProductName">
                    <h4>{thatItem["title"]}</h4>
                </WrapperGiver>

                <WrapperGiver className = "ContentSection__PoductPrice">
                    <h4>Price: {thatItem["price"]}</h4>
                </WrapperGiver>

                <WrapperGiver className = "ContentSection__ProductDescription">
                    <h3 className = "h3_for_DetailDescription">Description:</h3>
                    <h4>{thatItem["description"]}</h4>
                </WrapperGiver>
            </WrapperGiver>
        </WrapperGiver>
    )
}

export default ProductDetailGiver;
