import React from 'react';
import '../Styles/Footer.scss';
// @ts-ignore
import Logo from '../Materials/Images/Footer Logo.png';
import {FacebookIcon, GoogleIcon, InstagramIcon, TelegramIcon} from "../Materials/SVG";
const Footer = () => {
    return (
        <div className='Footer'>
            <div className='Footer_Container'>
                <div className='Feature'>
                    <div className='Header_Logo'>
                        <img src={Logo} alt='Silkway'/>
                    </div>
                    <div className='Features'>
                        <div>
                            SilkWay
                        </div>
                        <div>
                            <a href='#'>Вакансии</a>
                        </div>
                        <div className='Copyright'>Copyright © 2022 All rights reserved.</div>
                    </div>
                </div>
                <div className='Feature'>
                    <div className='Header'>
                        Адрес
                    </div>
                    <div className='Features'>
                        <div>
                            Мангилик Ел, 55, блок С4.2, офис 265
                            Нур-Султан, Казахстан
                        </div>
                        <div className='Links'>
                            <a href='#'>+77001780018</a>
                            <a href="#">info@SilkWay.kz</a>
                        </div>
                    </div>
                </div>
                <div className='Feature'>
                    <div className='Header'>
                        Социальные сети
                    </div>
                    <div className='Features'>
                        <div className='Social_Icons'>
                            {FacebookIcon}
                            {TelegramIcon}
                            {GoogleIcon}
                            {InstagramIcon}
                        </div>
                        <div>
                            Статус лицензии и ее действительность могут быть проверены на сайте <span><a>AFSA</a></span>
                        </div>
                    </div>
                </div>
            </div>
            <div className='Bottom_Footer'>
                Дизайн от <span> s3nse</span>
            </div>
        </div>
    );
};

export default Footer;