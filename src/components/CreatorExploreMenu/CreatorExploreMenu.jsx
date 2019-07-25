import React from 'react';
import { Container } from 'react-bootstrap';
import Link from 'next/link';
import {withRouter} from 'next/router';
import CreatorCatogories from '../CreatorCatogories';
import CreatorCardDetails from '../CreatorCardDetails';
import EventCard from '../EventCard';


const CreatorExploreMenu = ({ router }) => {
    let state = {
        CarouselData : [
            {backgroundImg: 'https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg',
            creatorName: 'Holland Roden',
            creatorDecs: 'Hi Guys! Lets Video Chat on the Meet&Greet App on May 16 to Raise Money for Children Mending Hearts.',
            creatorProfileImg: 'https://images.pexels.com/photos/266958/pexels-photo-266958.jpeg'},
            {backgroundImg: 'https://images.pexels.com/photos/920220/pexels-photo-920220.jpeg',
            creatorName: 'Allen',
            creatorDecs: "Hey! It's been great chatting with you all on Meet & Greet! I'll be jumping on more often so be sure to come and say hi!",
            creatorProfileImg: 'https://images.pexels.com/photos/2480798/pexels-photo-2480798.jpeg'},
            {backgroundImg: 'https://images.pexels.com/photos/266958/pexels-photo-266958.jpeg',
            creatorName: 'Sasha Pieterse',
            creatorDecs: "Hey guys I'm Sasha Pieterse and I'm going live on Meet & Greet with my friend Ian Harding and a few special guests to help",
            creatorProfileImg: 'https://images.pexels.com/photos/478544/pexels-photo-478544.jpeg'}
        ],
        CreatorCatogories: [
            'GAMING',
            'HOME & FAMILY',
            'FASHION',
            'COMEDY',
            'MUSIC',
            'BEAUTY',
            'HEALTH & FITNESS',
            'ENTERTAINMENT',
            'LIFESTYLE',
            'FILM & ANIMATION',
            'DIY',
            'TECHNOLOGY',
            'COOKING',
            'POP-CULTURE'
        ]
    }
    
    const { query: {tab} } = router;
    const isTabHome = tab === "Home" || tab == null;
    const isTabFreaturedCreators = tab === "FreaturedCreators";
    const isTabCreators = tab === "Creators";
    const isTabEvents = tab === "Events";
    
    let allCreators=[];
    for(let i=0; i<6 ;i++) {
       allCreators.push(<CreatorCardDetails data={state.CarouselData} key ={i}/>);
    }

    return(
        <div className="creator-explore-menu-section">
            <Container>
                <div className="tabHead">
                    <div className="tab" data-selected={isTabHome}>
                        <Link href={{ pathname: '', query: { tab: "Home"} }}>
                            <a>
                                <span className="icon-home-new"></span>
                                Home
                            </a>
                        </Link>
                    </div>
                    <div className="tab" data-selected={isTabFreaturedCreators}>
                        <Link href={{ pathname: '', query: { tab: "FreaturedCreators" } }}>
                            <a>
                                <span className="icon-Featured-Creators"></span>
                                Featured Creators
                            </a>
                        </Link>
                    </div>
                    <div className="tab" data-selected={isTabCreators}>
                        <Link href={{ pathname: '', query: { tab: "Creators" } }}>
                            <a>
                                <span className="icon-subscribers"></span>
                                All Creators
                            </a>
                        </Link>
                    </div>
                    <div className="tab" data-selected={isTabEvents}>
                        <Link href={{ pathname: "", query: { tab: "Events"} }}>
                            <a>
                                <span className="icon-Upcoming-Events"></span>
                                Upcoming Events
                            </a>
                        </Link>
                    </div>
                </div>
            </Container>
            <div className="TabBody" data-tabType={tab}>
                {isTabHome && 
                <React.Fragment>
                    <CreatorCatogories data={state.CreatorCatogories} />
                    <CreatorCardDetails data={state.CarouselData}/>
                </React.Fragment>
                }
                {isTabFreaturedCreators && 
                <React.Fragment>
                     <div className="title">Explore our Creators</div>
                    <CreatorCardDetails data={state.CarouselData}/>
                </React.Fragment>
                }
                {isTabCreators && 
                <React.Fragment>
                    {allCreators}
                </React.Fragment>}
                {isTabEvents && 
                <React.Fragment>
                    <Container>
                        <div class="title">Upcoming Events</div>
                        <div className="d-flex justify-content-center">
                            <EventCard />
                        </div>
                    </Container>
                </React.Fragment>}
            </div>
        </div>
    )
} 

export default withRouter(CreatorExploreMenu);