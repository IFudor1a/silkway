import React from 'react';
import '../Styles/Header.scss';
const TopHeader = () => {
    return (
        <div className='TopHeader'>

        </div>
    )
}

const BottomHeader = () => {
    return (
        <div className='BottomHeader'>

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