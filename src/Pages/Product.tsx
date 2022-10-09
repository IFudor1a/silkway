import React from 'react';
import ProductRoute from "../Components/ProductRoute";
import ProductSlider from "../Components/ProductSlider";
import ProductForm from "../Components/ProductForm";
import MainProducts from "../Components/MainProducts";

const Product = () => {
    return (
        <div className='Product'>
            <ProductRoute/>
            <div style={{display:'flex', gap: 24, marginBottom:36}}>
                <ProductSlider/>
                <ProductForm/>
            </div>
            <MainProducts/>
        </div>
    );
};

export default Product;