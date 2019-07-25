import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ShopCards from '../ShopCards/ShopCards';
import CreatorDetailsTimeline from '../CreatorDetailsTimeline';
import MerchTimeline from '../MerchTimeline';

const CreatorShop = () => {
    let shopCards=[];
    for(let i=0; i<3; i++){
        shopCards.push(<ShopCards key="i" />)
    }
    return(
        <div className="creator-shop-holder mt-5">
            <Container>
                
                <Row>
                    <Col xs={12} md={3}>
                        <CreatorDetailsTimeline />
                    </Col>
                    <Col xs={12} md={9}>
                        <MerchTimeline />
                        <div className="title m-0">MERCHANDISE</div>
                        <Row>
                            {shopCards}
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default CreatorShop;