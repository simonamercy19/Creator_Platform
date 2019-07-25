import React from 'react';
import { Card, Image } from 'react-bootstrap';

const MerchTimeline = () => {
    let merchCards=[];
    for(let i=0; i<3; i++){
        merchCards.push(
            <Card className="flex-row p-2">
                <Image className="pr-1" src="../../static/images/merch-mock.png" />
                <div className="text-content pl-1">
                    <div className="product-name font-weight-bold">STYDIA by Holland Roden Ladies' Shirttail Tank</div>
                    <div className="price mt-1 mb-1 font-weight-bold">$87</div>
                    <p className="decs m-0">Limited Edition STYDIA Women's short sleeve t-shirt only available on Meet&amp;Greet.  $5.00 from every purchase will be donated to an organization Holland Roden is passionate about, Children Mending Hearts.</p>
                </div>
            </Card>
        )
    }
    return(
        <div className="merch-holder">
            <div className="title">TOP SELLING MERCHANDISE</div>
            <div className="top-merch-cards">
                {merchCards}
            </div>
        </div>
    )
}

export default MerchTimeline;