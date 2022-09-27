import React from 'react';
import MainProducts from "../Components/MainProducts";
import MainIntroduction from "../Components/MainIntroduction";

const Main = () => {
    return (
        <div className='Main'>
            <MainIntroduction/>
            <MainProducts/>
            <MainProducts/>
        </div>
    );
};

export default Main;