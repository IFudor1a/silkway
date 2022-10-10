import React, {FC} from 'react';
import '../Styles/ProfileStorage.scss';
import {CameraIconSVG, SearchIconSVG, StarIcon} from "../Materials/SVG";
import {IFproduct, Products} from "./MainProducts";

const ProfileStorage = () => {
    return (
        <div className='ProfileStorage'>
            <div className='ProfileStorage_Header'>
                <div className='title'>
                    Склад
                </div>
                <button>
                    Добавить товар
                </button>
            </div>
            <StorageRow/>
        </div>
    );
};

const StorageRow = () => {
    return (
        <div className='StorageRow'>
            <StorageStatistic/>
            <StorageSearch/>
            <StorageProducts/>
        </div>
    )
}

const StorageStatistic = () => {
    return (
        <div className='StorageStatistic'>
           <div className='Statistic'>
               <div className='title'>Товары: 34</div>
               <div className='subtitle'>Количество шт. товара: 1200 ( -120 сегодня )</div>
           </div>
            <button>
                Открыть статистику склада
            </button>
        </div>
    )
}

const StorageSearch = () => {
    return (
        <div className='StorageSearch'>
                <div className='Input_Holder'>
                    {SearchIconSVG}
                    <input placeholder='Что вы ищите'/>
                </div>
        </div>
    )
}

const StorageProducts = () => {
    return (
        <div className='StorageProducts'>
            {
                Products.map((product, id) => (
                    <Product key={id} product = {product}/>
                ))
            }
        </div>
    )
}

const Product:FC<IFproduct> = ({key, product}) => {
    return (
        <div key={key} className='Product'>
            <div className='Product_imgHolder'>
                <img src={product.img} alt='product img'/>
            </div>
            <div className='container'>
                <div className='header'>
                    <div className='title'>
                        {product.title}
                    </div>
                    <div className='row'>
                        <div>{product.price}</div>
                        <div className='rating'>{StarIcon}{product.rating}</div>
                    </div>
                </div>
                <div className='body'>
                    <div className='header'>
                        <div className='sales'>
                            Продаж за неделю: 45 (5 сегодня)
                        </div>
                        <div className='count'>
                            Количество товара на складе: 350
                        </div>
                    </div>
                    <button>Открыть статистику товара</button>
                </div>
            </div>
        </div>
    )
}
export default ProfileStorage;