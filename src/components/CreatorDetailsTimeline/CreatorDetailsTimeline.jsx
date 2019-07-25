import React from 'react';
import { Image, Button } from 'react-bootstrap';

const CreatorDetailsTimeline = () => {
    return(
        <div className="creator-details-holder">
            <div>
                <div className="img-holder">
                    <Image src="https://i.pinimg.com/originals/7d/7b/eb/7d7beb95030a5a6ae4817b79ebb856d2.jpg" alt="Creator Profile" />
                    <div className="actions-holder">
                        <Button><span className="icon-shareIcon"></span></Button>
                        <Button><span className="icon-favoriteOutline"></span></Button>
                        <Button><span className="icon-feedmessage"></span></Button>
                    </div>
                </div>
                <h3 className="title-name font-weight-bold">Holland Roden</h3>
                <p className="decs">
                    Hi Guys! Lets Video Chat on the Meet&Greet App on May 16 to Raise Money for Children Mending Hearts.
                </p>
            </div>
        </div>
    )
}

export default CreatorDetailsTimeline;