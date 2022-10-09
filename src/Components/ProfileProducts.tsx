import React, {FC} from 'react';
import '../Styles/ProfileProducts.scss';
import {Products} from "./MainProducts";
import {Product_BasketIcon, StarIcon} from "../Materials/SVG";

const ProfileProducts = () => {
    return (
        <div className='ProfileProducts'>
            <div className='ProfileProducts_Header'>
                <div className='title'>
                    Товары
                </div>
                <button>
                    Добавить товар
                </button>
            </div>
            <ProductsRow/>
        </div>
    );
}

const ProductsRow = () => {
    return (
        <div className='ProfileProducts_Body'>
            {
                Products.map((product, idx) => (
                    <Product key={idx} product = {product}/>
                ))
            }
        </div>
    )
}

interface IFproduct {
    key: number,
    product: {
        img: any;
        title: string;
        price: string;
        requirement: string;
        rating: string;
    }
}

export const Product:FC<IFproduct> = ({key,product}) => {
    return (
        <div key = {key} className='Product'>
            <div className='Product_ImgHolder'>
                <span className='BasketICon'>{Product_BasketIcon}</span>
                <img src={product.img} alt='Img'/>
                <span className='Add_Information'>Доп инфо</span>
            </div>
            <div className='Product_Description'>
                <div className='Product_Title'>
                    {product.title}
                </div>
                <div className='Product_Cost'>
                    {product.price}
                    <div>
                        {StarIcon} {product.rating}
                    </div>
                </div>
                <div className='Product_Footer'>
                    {product.requirement}
                </div>
            </div>
        </div>
    )
}

export default ProfileProducts;