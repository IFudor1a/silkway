import React from 'react';
import '../Styles/ProfileAccount.scss';
import {ArrowSVG} from "../Materials/SVG";
// @ts-ignore
import imgDef from '../Materials/Images/90 _ 90.png';
// @ts-ignore
import avatar from '../Materials/Images/Avatar.png';
// @ts-ignore
import avatar2 from '../Materials/Images/Avatar (1).png';
// @ts-ignore
import avatar3 from '../Materials/Images/Avatar (2).png';
const data = [
    {id: 1, img:avatar, name:'Товары'},
    {id: 2, img:avatar2, name:'Склад'},
    {id: 3, img:avatar3, name:'Option 1'},
    {id: 4, img:avatar, name:'Option 1'},

]


const ProfileAccount = () => {
    return (
        <div className='ProfileAccount'>
           <div className='Profile_Holder'>
               <img src={imgDef} alt='Avatar'/>
           </div>
            <div className='Profile_Header'>
                s3nse company
            </div>
            <List/>
        </div>
    );
};

const List = () => {
    return (
        <div className='List'>
            {data.map(({id, img, name}) => (
            <div className='product' key={id}>
                <div className='img'>
                    <img src={img} alt={name}/>
                </div>
                <div className='description'>
                    <div className='title'>{name}</div>
                    <div className='vector'>{ArrowSVG}</div>
                </div>
            </div>
            ))}
        </div>
    )
}

export default ProfileAccount;