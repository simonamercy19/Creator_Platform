import React from 'react';
import { Image } from 'react-bootstrap';
import CreatorProfileMenu from '../src/components/CreatorProfileMenu';

export default class CreatorProfile extends React.Component {
    render() {
        return(
            <div className="creator-profile-holder">
                <div className="profile-carousel-holder">
                    <Image alt="" src="https://images.pexels.com/photos/413971/pexels-photo-413971.jpeg" />
                </div>
                <CreatorProfileMenu />
            </div>
        )
    }
}