import React from 'react';
import { Col, Card, Image } from 'react-bootstrap';

const EventCard = () => {
    return(
        <Col className="event-card-holder" xs={12} sm={6}>
            <Card className="p-0">
                <div className="creator-details p-3 pb-0">
                    <Image src="https://images.pexels.com/photos/266958/pexels-photo-266958.jpeg" alt="Profile Pic" />
                    <div className="username">Holland Roden</div>
                </div>
                <div className="event-details-holder">
                <Image src="https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg" />
                <div className="text-holder">
                    Praesent ut ligula non mi varius sagittis. Sed libero. Fusce egestas elit eget lorem. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Cras ultricies mi eu turpis hendrerit fringilla.
                </div>
                <div className="like-comment-section">
                    
                </div>
            </div>
            </Card>
        </Col>
    )
}

export default EventCard;