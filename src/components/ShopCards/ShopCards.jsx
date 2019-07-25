import React from 'react';
import { Col, Card, Image, Button } from 'react-bootstrap';

const ShopCards = () => {
    return(
        <Col className="shop-cards-holder" xs={12} md={6}>
            <Card className="flex-column">
                <div className="creator-details">
                    <Image src="https://images.pexels.com/photos/266958/pexels-photo-266958.jpeg" alt="Profile Pic" />
                    <div className="username">Holland Roden</div>
                </div>
                <div className="product-details text-center">
                    <Image src="../../static/images/shop-item1.jpg" />
                    <div className="product-name flex-row font-weight-bold">
                        B26 Ian Harding Women's V-Neck T-shirt - Limited Edition
                    </div>
                    <div className="price">
                        $65
                    </div>
                    <Button type="button">BUY NOW</Button>
                    <div className="decs">
                    A 7-time Teen Choice Award Winner on Freeform's most watched series, Little Liars A social media influencer with over 7 million followers. An avid birdwatcher? Yes, you read that correctly. Ian Harding is all of these things, and so much more. In this memoir, explore the unexpected world of a young celebrity through the lens of his favorite pastime ― birding.
                    </div>
                </div>
            </Card>
        </Col>
    )
}

export default ShopCards;