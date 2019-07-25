import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CreatorPostCard from '../CreatorPostCard';
import CreatorDetailsTimeline from '../CreatorDetailsTimeline';

const CreatorForum = () => {
    let cards=[];
    for (let i = 0; i < 5; i++) {
        cards.push(<CreatorPostCard key={i} />); 
    }
    return(
        <Container className="mt-5">
            <Row>
                <Col xs={12} md={3}><CreatorDetailsTimeline /></Col>
                <Col xs={12} md={6} >{cards}</Col>
                <Col xs={12} md={3}></Col>
            </Row>
        </Container>
    )
}

export default CreatorForum;