import React from 'react';
import Link from 'next/link';
import { withRouter } from "next/router";
import { Container, Row, Col } from 'react-bootstrap';
import CreatorTimeline from '../CreatorTimeline';
import CreatorShop from '../CreatorShop';
import CreatorForum from '../CreatorForum';

const CreatorProfileMenu = ({ router }) => {
    const {
      query: { tab }
    } = router
    
    const isTabOne = tab === "1" || tab == null;
    const isTabTwo = tab === "2";
    const isTabThree = tab === "3";
    // let selectedColor = {
    //     background: (selected ? "grey" : "black")
    // }
    return (
        <div className="creator-profile-menu-holder">
            <div className="creator-profile-menu">
                <Container>
                    <div className="tabHead">
                    <div className="tab" data-selected={isTabOne}>
                        <Link href={{ pathname: "", query: { tab: "1" } }}>
                        <a><span className="icon-patron"></span> Timeline</a>
                        </Link>
                    </div>
                    <div className="tab" data-selected={isTabTwo}>
                        <Link href={{ pathname: "", query: { tab: "2" } }}>
                        <a><span className="icon-gift"></span> Shop</a>
                        </Link>
                    </div>
                    <div className="tab" data-selected={isTabThree}>
                        <Link href={{ pathname: "", query: { tab: "3" } }}>
                        <a><span className="icon-forum"></span> Forum</a>
                        </Link>
                    </div>
                    </div>
                </Container>
            </div>
            <div className="tabBody">
                {isTabOne && <CreatorTimeline />}
                {isTabTwo && <CreatorShop />}
                {isTabThree && <CreatorForum />}
            </div>
        </div>
      
    )
}



export default withRouter(CreatorProfileMenu);
