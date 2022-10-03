import React from 'react';
import '../Styles/Header.scss';
// @ts-ignore
import Logo from '../Materials/Images/Logo full.png';
import {BasketIconSVG, BottomArrowSVG, CameraIconSVG, OrderIconSVG, RegIconSVG, SearchIconSVG} from "../Materials/SVG";

const TopHeader = () => {
    return (
        <div className='TopHeader'>
            <div className='Logo'>
                <img src={Logo} alt='SilkWay'/>
            </div>
            <div className='Search'>
                <div className='Search_dropdown'>
                    <div>Продукты</div>
                    <div>{BottomArrowSVG}</div>
                </div>

                <div className='Search_Input'>
                    <div className='Input_Holder'>
                        {SearchIconSVG}
                        <input placeholder='Что вы ищите'/>
                    </div>
                    {CameraIconSVG}
                </div>
            </div>
            <div className='Futures'>
                <div className='Futures_Item'>
                    {OrderIconSVG}
                    Заказы
                </div>
                <div className='Futures_Item'>
                    {BasketIconSVG}
                    Корзина
                </div>
                <div className='Futures_Item'>
                    {RegIconSVG}
                    <a href='#'>Вход</a> / <a href='#'>Регистрация</a>
                </div>

            </div>
        </div>
    )
}

const BottomHeader = () => {
    return (
        <div className='BottomHeader'>
            <div className='Dropdown_group'>
                <div className="dropdown">
                    <span>Категории <span>{BottomArrowSVG}</span></span>
                    <div className="dropdown_content">
                        <p>Hello World!</p>
                    </div>
                </div>
                <div className="dropdown">
                    <span>Помошь <span>{BottomArrowSVG}</span></span>
                    <div className="dropdown_content">
                        <p>Hello World!</p>
                    </div>
                </div>
                <div className="dropdown">
                    <span>Продать на SilkWay <span>{BottomArrowSVG}</span></span>
                    <div className="dropdown_content">
                        <p>Hello World!</p>
                    </div>
                </div>
            </div>
            <div className='Dropdown_group'>
                <div className="dropdown">
                    <span>Готово к отправке</span>
                    <div className="dropdown_content">
                        <p>Hello World!</p>
                    </div>
                </div>
                <div className="dropdown">
                    <span>Доставка до: <span>{BottomArrowSVG}</span></span>
                    <div className="dropdown_content">
                        <p>Hello World!</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

const Header = () => {
    return (
        <div className='Header'>
            <TopHeader/>
            <BottomHeader/>
        </div>
    );
};

export default Header;