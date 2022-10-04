import React from 'react';
import ProductRoute from "../Components/ProductRoute";
import ProductSlider from "../Components/ProductSlider";
import ProductForm from "../Components/ProductForm";

const Product = () => {
    return (
        <div className='Product'>
            <ProductRoute/>
            <div style={{display:'flex', gap: 24}}>
                <ProductSlider/>
                <ProductForm/>
            </div>
        </div>
    );
};

export default Product;