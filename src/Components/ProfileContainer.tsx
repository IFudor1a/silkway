import React from 'react';
import '../Styles/ProfileContainer.scss';
import ProfileAccount from "./ProfileAccount";
import ProfileProducts from "./ProfileProducts";
import ProfileUpload from "./ProfileUpload";
import ProfileStorage from "./ProfileStorage";

const ProfileContainer = () => {
    return (
        <div className='ProfileContainer'>
           <ProfileAccount/>
            <ProfileStorage/>
        </div>
    );
};

export default ProfileContainer;