import React from 'react';
import { Card, Col } from 'react-bootstrap';


const pageOverViewData = {
    'PO' : [{
        'pageTitle':'Profile Preview and Management',
        'pageData': [
            {
                Icon: 'icon-home-new',
                SubTitle: 'Edit profile1',
                Decs: 'Upload a custom profile image and edit your profile description',
                type: 'profile'
            },
            {
                Icon: 'icon-home-new',
                SubTitle: 'Edit profile2',
                Decs: 'Upload a custom profile image and edit your profile description',
                type: 'profile'
            },
            {
                Icon: 'icon-home-new',
                SubTitle: 'Edit profile3',
                Decs: 'Upload a custom profile image and edit your profile description',
                type: 'profile'
            },
            {
                Icon: 'icon-home-new',
                SubTitle: 'Edit profile',
                Decs: 'Upload a custom profile image and edit your profile description',
                type: 'profile'
            }
        ]
    }
        
    ],
    'EP' : [{
        'pageTitle':'xyz',
        'pageData': [
            {
                Icon: 'icon-home-new',
                SubTitle: 'Edit profile1',
                Decs: 'Upload a custom profile image and edit your profile description',
                type: 'profile'
            },
            {
                Icon: 'icon-home-new',
                SubTitle: 'Edit profile2',
                Decs: 'Upload a custom profile image and edit your profile description',
                type: 'profile'
            },
            {
                Icon: 'icon-home-new',
                SubTitle: 'Edit profile3',
                Decs: 'Upload a custom profile image and edit your profile description',
                type: 'profile'
            },
            {
                Icon: 'icon-home-new',
                SubTitle: 'Edit profile',
                Decs: 'Upload a custom profile image and edit your profile description',
                type: 'profile'
            }
        ]
    }
        
    ]
}

const PanelOverviewCard = (props)=> {

    let pageId = props.selectedTab || 'PO';
    let page = {};
    
    page = {
        'pageTitle': pageOverViewData[pageId][0].pageTitle,
        'pageData': [...pageOverViewData[pageId][0].pageData]
    };

    let rend = page.pageData.map((val,key)=>{
        return[
            <Col key = {key} xs={12} md={6}>
            <div className="icon-handler d-inline-block">
                <span class={val.Icon}></span>
            </div>
            <div className="content-hander">
                <h6 class="sub-text-title">{val.SubTitle}</h6>
                <p>{val.Decs}</p>
            </div>
            </Col>
        ];
        
    });

    return(
        <div className="overview-card-holder">
            <div className="title mb-4">{ page.pageTitle }</div>
            <Card className="flex-row flex-wrap">
                {rend}
            </Card>
        </div>
    )
    
}

export default PanelOverviewCard;
