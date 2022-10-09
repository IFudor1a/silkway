import React from 'react';
import '../Styles/ProfileContainer.scss';
import ProfileAccount from "./ProfileAccount";
import ProfileProducts from "./ProfileProducts";

const ProfileContainer = () => {
    return (
        <div className='ProfileContainer'>
           <ProfileAccount/>
            <ProfileProducts/>
        </div>
    );
};

export default ProfileContainer;