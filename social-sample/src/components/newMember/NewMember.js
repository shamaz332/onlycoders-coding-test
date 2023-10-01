import React from 'react';
import ProfileCard from './ProfileCard';
import './newMember.css';

// Functional component to display the newest members
const NewMember = () => {
    return (
        <div>
            <div className='global__card'>
                {/* Title for the section */}
                <p className='car__title'>Newest Members</p>
                {/* Profile cards for each new member */}
                <ProfileCard
                    name='User Name'
                    userName='username'
                    mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
                    smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
                />
                <ProfileCard
                    name='User Name'
                    userName='username'
                    mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
                    smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
                />
                <ProfileCard
                    name='User Name'
                    userName='username'
                    mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
                    smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
                />
                <ProfileCard
                    name='User Name'
                    userName='username'
                    mainImage='https://www.pngall.com/wp-content/uploads/12/Avatar-Background-PNG.png'
                    smallImage='https://p7.hiclipart.com/preview/1012/998/539/social-media-logo-computer-icons-clip-art-number-2.jpg'
                />
            </div>
        </div>
    );
}

export default NewMember;
