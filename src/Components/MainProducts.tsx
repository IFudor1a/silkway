import React from 'react';

const Product = () => {
    return (
        <div className='Product'>
            <div className='Product_ImgHolder'>

            </div>
            <div className='Product_Description'>

            </div>
            <div className='Product_Cost'>

            </div>
            <div className='Product_Footer'>

            </div>
        </div>
    )
}

const MainProducts = () => {
    return (
        <div className='MainProducts'>
            <div className='MainProducts_Header'>

            </div>
            <div className='MainProducts_Container'>
                <Product/>
            </div>
        </div>
    );
};

export default MainProducts;