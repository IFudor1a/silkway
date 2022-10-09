import React from 'react';
import '../Styles/ProductForm.scss';
import {MinusIcon, PlusIcon, Product_BasketIcon, ProductStarIcon} from "../Materials/SVG";
import {useDispatch} from "react-redux";

const ProductForm = () => {
    return (
        <div className='ProductForm'>
            <HeaderLabel/>
            <AdditionalInfo/>
            <OptionsTake/>
        </div>
    );
};

const HeaderLabel = () => {
    return (
        <div className='HeaderLabel'>
            <div className='Header'>
                Private label best strong skin bleaching lightening cream foot full body glutathione kojic acid
                whitening cream for black skin
            </div>
            <div className='Category'>
                Категория: Косметика
            </div>
            <div className='Rating'>
                <div className='star'>
                    {ProductStarIcon}
                    {ProductStarIcon}
                    {ProductStarIcon}
                    {ProductStarIcon}
                    {ProductStarIcon}
                    5.0
                </div>
                <div>
                    12 отзывов
                </div>
                <div>
                    24 покупателя
                </div>
            </div>
            <p>
                Идейные соображения высшего порядка, а также перспективное планирование в значительной степени
                обусловливает важность экспериментов, поражающих по своей масштабности и грандиозности. Для современного
                мира социально-экономическое развитие в значительной степени обусловливает важность переосмысления
                внешнеэкономических политик.
            </p>
            <hr/>
        </div>
    )
}

const AdditionalInfo = () => {
    return (
        <div className='AdditionalInfo'>
            <div className='CountRule'>
                <div className='Rule'>
                    <div className='Count'>
                        10-999 Штук
                    </div>
                    <div className='Price' style={{color: '#70BF73'}}>
                        $65 - $80
                    </div>
                </div>
                <div className='Rule'>
                    <div className='Count'>
                        1000-4999 Штук
                    </div>
                    <div className='Price'>
                        $55 - $70
                    </div>
                </div>
                <div className='Rule'>
                    <div className='Count'>
                        Больше 4999 Штук
                    </div>
                    <div className='Price'>
                        $35 - $50
                    </div>
                </div>
            </div>
            <hr/>
            <div className='Colors'>
                <div className='color'>
                    <div>Цвет 1:</div>
                    <div className='colorbox' style={{backgroundColor: '#76777E'}}/>
                </div>
                <div className='color'>
                    <div>Цвет 2:</div>
                    <div className='colorbox' style={{backgroundColor: '#FF9B9B'}}/>
                </div>
                <div className='color'>
                    <div>Цвет 3:</div>
                    <div className='colorbox' style={{backgroundColor: '#FFD699'}}/>
                </div>
            </div>
            <div className='Addition'>
                <h3>Дополнительная информация</h3>
                <div className='address'>
                    Казахстан, г.Нур-султан, Малайсары 37
                </div>
                <div className='number'>
                    +7 (777) 777-77-77
                </div>
                <div className='email'>
                    tooNuras@gmail.com
                </div>
            </div>
        </div>
    )
}

const OptionsTake = () => {
    const dispatch = useDispatch();

    return (
        <div className='OptionsTake'>
            <div className='CounterContainer'>
                <div className='Counter'>
                    <button>
                        {MinusIcon}
                    </button>
                    <span>
                         0
                    </span>
                    <button>
                        {PlusIcon}
                    </button>
                </div>
                <div className='Price'>
                    1572 ₸
                </div>
            </div>
            <div className='AddButtons'>
                <button><span>{Product_BasketIcon}</span> В корзину</button>
                <button>Купить</button>
            </div>
        </div>
    )
}

export default ProductForm;