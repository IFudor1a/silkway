import React from 'react';
import MainList from "./MainList";
import MainSlider from "./MainSlider";
import '../Styles/MainIntroduction.scss';

const MainIntroduction = () => {
    return (
        <div className='MainIntroduction'>
            <MainList/>
            <MainSlider/>
        </div>
    );
};

export default MainIntroduction;