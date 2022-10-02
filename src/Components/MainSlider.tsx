import React, {useEffect, useRef, useState} from 'react';
import '../Styles/MainSlider.scss';
// @ts-ignore
import SliderImg from '../Materials/Images/News card.png';
import {fchmod} from "fs";

const pictures = [
    SliderImg,
    "https://s12.stc.all.kpcdn.net/family/wp-content/uploads/2022/01/repchatiy_luk_polza_i_vred_oblogka-960x540.jpg",
    "https://baron.kz/image/cache/catalog/catalog/milk_egg/foodmaster/fm_moloko3-1200x800.jpg",
    "https://baron.kz/image/cache/catalog/catalog/milk_egg/yajca-fermerskie-1200x800.jpg",
    "https://povarixa.ru/images/content/medium/6dcbe8dbe8a40ba10371dc8d9154bdae.jpg",
    'https://it4profit.com/share/common/201230/image.jpg'
];

const SliderDots:React.FunctionComponent<{index: number, setIndex: Function}> = ({index, setIndex}) => {
    return (
        <div className='SliderDots'>
            {pictures && pictures.map((_, idx) => (
                <div key={idx} className={`SliderDots_Dots${index === idx ? ' active': ''}`} onClick={() => {
                    setIndex(idx);
                }}>

                </div>
            ))}
        </div>
    )
}

const MainSlider = () => {

    const [index, setIndex] = useState(0);
    const timeOutRef = useRef(null);

    const resetTimeOut = () => {
        timeOutRef.current && clearTimeout(timeOutRef.current)
    }

    useEffect(() => {
        resetTimeOut();
        // @ts-ignore
        timeOutRef.current = setTimeout(() => setIndex((prevIndex) => prevIndex === pictures.length - 1 ? 0 : prevIndex + 1), 2500)
        return () => {
            resetTimeOut()
        }
    }, [index])

    return (
        <div className='MainSlider'>
            <div className='MainSlider_Container'>
                <div className='MainSlider_Slider'>
                    {pictures && pictures.map((imgPath, idx) => (
                        <div style={{transform: `translate3d(${-index * 100}%,0,0)`}} className='slide'>
                            <img  alt='Slider img' src={imgPath} />
                        </div>
                    ))}
                </div>
            </div>
            <SliderDots index = {index} setIndex={setIndex}/>
        </div>
    );
};

export default MainSlider;