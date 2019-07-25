import React from 'react';
import { Image, Button } from 'react-bootstrap';
import MerchTimeline from '../MerchTimeline';

const CreatorLastSectionTimeline = () => {
    return(
        <div>
            <div className="search-holder">
                <input type="text" placeholder="Search for Posts" />
                <button type="button" className="filter-search-btn" onclick="">
                    <span className="icon-search"></span>
                </button>
                <button type="button" className="filter-btn" onclick="">
                    <i className="icon-filter filter-btn-icon"></i>
                </button>
            </div>
            <div className="request-section">
                <Image src="../../static/images/request-img.svg" />
                <Button type="button" >Request Subscription</Button>
            </div>
            <MerchTimeline />
        </div>
    )
}

export default CreatorLastSectionTimeline;