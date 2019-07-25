import React from 'react';
import Link from 'next/link';
import { Container, Row, Col, Card, Image, Button } from 'react-bootstrap';

const CreatorCardDetails = (props) => {
    const SingleCreatorCardDetails = props.data.map((value, index) => {
        return(
            <Col className="single-card" key={index} xs={12} md={4}>
                <Card>
                    <Link href="/CreatorProfile">
                        <a>
                            <div className="image-holder">
                                <Image alt="" src={value.creatorProfileImg} />
                            </div>
                            <div className="decs">{value.creatorDecs}</div>
                            <h4 className="name">{value.creatorName}</h4>
                        </a>
                    </Link>
                    <div className="actions">
                        <Button>
                            <span className="icon-shareIcon"></span>
                        </Button>
                        <Button>
                            <span className="icon-favoriteOutline"></span>
                        </Button>
                    </div>
                </Card>
            </Col>
        )
    })
    return (
        <Container className="creator-cards-container">
            {/* <div className="title">Explore our Creators</div> */}
            <Row>
                {SingleCreatorCardDetails}
            </Row>
        </Container>
    )
}

export default CreatorCardDetails;