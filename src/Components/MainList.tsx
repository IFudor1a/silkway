import React from 'react';
import '../Styles/MainList.scss';
import {ArrowSVG, NavigationArrowSVG} from "../Materials/SVG";
// @ts-ignore
import avatar from '../Materials/Images/Avatar.png';
// @ts-ignore
import avatar2 from '../Materials/Images/Avatar (1).png';
// @ts-ignore
import avatar3 from '../Materials/Images/Avatar (2).png';
const data = [
    {id: 1, img:avatar, name:'Option 1'},
    {id: 2, img:avatar2, name:'Option 1'},
    {id: 3, img:avatar3, name:'Option 1'},
    {id: 4, img:avatar, name:'Option 1'},
    {id: 5, img:avatar2, name:'Option 1'},
    {id: 6, img:avatar3, name:'Option 1'},
    {id: 7, img:avatar, name:'Option 1'}
]
const MainListProductList = () => {
    return (
        <div className='MainList_ProductList'>
            {
              data && data.map(({id, img, name}) => (
                  <div className='product' key={id}>
                      <div className='img'>
                          <img src={img} alt={name}/>
                      </div>
                      <div className='description'>
                          <div className='title'>{name}</div>
                          <div className='vector'>{ArrowSVG}</div>
                      </div>
                  </div>
              ))
            }
        </div>
    )
}

const SalesCard = () => {
    return (
        <div className='MainList_SalesCard'>
            <div className='SalesCard_Header'>
                Sale Card
            </div>
            <div className='SalesCard_Description'>
                Дает -20% на любой товар плошадки SilkWay
            </div>
            <div className='SalesCard_Navigation'>
                <a href='#'>
                    <div>Read more</div>
                    <div>{NavigationArrowSVG}</div>
                </a>
            </div>
        </div>
    )
}
const MainList = () => {
    return (
        <div className='MainList'>
            <div className='MainList_HeaderList'>
                Частые товары
            </div>
            <MainListProductList/>
            <SalesCard/>
        </div>
    );
};

export default MainList;