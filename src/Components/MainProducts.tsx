import React, {FC} from 'react';
import '../Styles/MainProducts.scss'
// @ts-ignore
import ImageDef from '../Materials/Images/unsplash_07BEYT2hjGw.png';

import {Product_BasketIcon, StarIcon} from "../Materials/SVG";
export const Products = [
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
    price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'},
    {img: ImageDef, title: 'Sell Well is suitable for 2018 BMW 5 Series G30 G38 car high quality universal rear bumper diffuser',
        price: '65₸ - 80₸', requirement: '1 Штука (Минимальный. Заказ)', rating: '4.7'}
]

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

const Product:FC<IFproduct> = ({key,product}) => {
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

const MainProducts = () => {
    return (
        <div className='MainProducts'>
            <div className='MainProducts_Header'>
                Товары с высоким спросом
            </div>
            <div className='MainProducts_Container'>
                {Products.map((product, idx) => (
                    <Product key={idx} product = {product}/>
                ))}
            </div>
        </div>
    );
};

export default MainProducts;