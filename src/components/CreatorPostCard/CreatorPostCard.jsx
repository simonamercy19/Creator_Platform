import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';


const CreatorPostCard = () => {
    return(
        <div className="creator-post-card">
            <Row>
                <Col xs={10} md={11} className="creator-details">
                    <Image src="https://images.pexels.com/photos/266958/pexels-photo-266958.jpeg" alt="Profile Pic" />
                    <div className="username">Holland Roden</div>
                </Col>
                <Col xs={2} md={1} className="action-section">
                    <span class="icon-more"></span>
                </Col>
            </Row>
            <div className="post-details-holder">
                <Image src="https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg" />
                <div className="text-holder">
                    Praesent ut ligula non mi varius sagittis. Sed libero. Fusce egestas elit eget lorem. Mauris turpis nunc, blandit et, volutpat molestie, porta ut, ligula. Cras ultricies mi eu turpis hendrerit fringilla.
                </div>
                <div className="like-comment-section">
                    
                </div>
            </div>
        </div>
    )
}

export default CreatorPostCard;