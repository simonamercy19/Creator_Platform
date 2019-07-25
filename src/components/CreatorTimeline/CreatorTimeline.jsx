import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CreatorPostCard from '../CreatorPostCard';
import CreatorDetailsTimeline from '../CreatorDetailsTimeline';
import CreatorLastSectionTimeline from '../CreatorLastSectionTimeline';

const CreatorTime = () => {
    let cards=[];
    for (let i = 0; i < 5; i++) {
        cards.push(<CreatorPostCard key={i} />); 
    }
    return(
        <Container className="creator-profile-container">
            <Row>
                <Col xs={12} md={3}>
                    <CreatorDetailsTimeline />
                </Col>
                <Col xs={12} md={6}>
                    {cards}
                </Col>
                <Col xs={12} md={3}>
                    <CreatorLastSectionTimeline />
                </Col>
            </Row>
        </Container>
    )
}

export default CreatorTime;