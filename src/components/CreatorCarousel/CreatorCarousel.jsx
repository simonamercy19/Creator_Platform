import React from 'react';
import Link from 'next/link';
import { Carousel, Row, Col, Button, Container } from 'react-bootstrap';

// let creatorImg1 = 'https://i.pinimg.com/originals/7d/7b/eb/7d7beb95030a5a6ae4817b79ebb856d2.jpg';
// let creatorImg2 = 'http://liverampup.com/uploads/images/Ian%20Harding.jpg';
// let creatorImg3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiDNIojUg_922rOu86XOu3BIHTgZpasl5ypUi0_JXifNmr2F13';


const CreatorCarousel = (props) => {
    const carouselData = props.data.map((value, index) => {
        return [
            <Carousel.Item key={index}>
                <Row className="skew-main-parent">
                    <Col className="skew-holder" xs={{ span: 12, offset: 0 }} md={{ span: 11, offset: 1 }}>
                        <div className="skew-img-holder">
                            <img
                            className="d-block"
                            src={value.backgroundImg}
                            alt="Second slide"
                            />
                        </div>
                        <div className="creator-head-holder d-inline-block">
                            <div className="position-relative">
                                <Link href="/CreatorProfile" >
                                    <div className="creator-head position-relative" style = {{ backgroundImage: 'url(' + value.creatorProfileImg + ')'}}>
                                    </div>
                                </Link>
                                <div className="creator-head-actions-holder">
                                    <Button><span className="icon-shareIcon"></span></Button>
                                    <Button><span className="icon-favoriteOutline"></span></Button>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
                <Container className="carousel-content-holder">
                    <Row>
                        <Col xs={12} md={7}>
                            <div className="title">
                                {value.creatorName}
                            </div>
                            <div className="subtagline">
                                {value.creatorDecs}
                            </div>
                            <Link href="/CreatorProfile" >
                                <Button>View Profile</Button>
                            </Link>
                        </Col>
                    </Row>
                </Container>
            </Carousel.Item>
        ]
    });
    return(
        <Carousel className="creator-carousel-container" >
            { carouselData }
        </Carousel>
    )
}

export default CreatorCarousel;