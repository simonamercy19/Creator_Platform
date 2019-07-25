import React, { Fragment } from 'react';
import CreatorCarousel from '../src/components/CreatorCarousel';
import CreatorExploreMenu from '../src/components/CreatorExploreMenu';
// import CreatorCatogories from '../src/components/CreatorCatogories';
// import CreatorCardDetails from '../src/components/CreatorCardDetails';


export default class ExpoloreCreator extends React.Component {
    state = {
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
        ]
        // ,
        // CreatorCatogories: [
        //     'GAMING',
        //     'HOME & FAMILY',
        //     'FASHION',
        //     'COMEDY',
        //     'MUSIC',
        //     'BEAUTY',
        //     'HEALTH & FITNESS',
        //     'ENTERTAINMENT',
        //     'LIFESTYLE',
        //     'FILM & ANIMATION',
        //     'DIY',
        //     'TECHNOLOGY',
        //     'COOKING',
        //     'POP-CULTURE'
        // ]
    }
    componentDidUpdate(prevProps) {
        window.scrollTo(0, 1000);
        console.log("hi");
    }
    
    render() {
        return(
            <Fragment>
                <CreatorCarousel data={this.state.CarouselData} />
                <div>
                    <CreatorExploreMenu />
                </div>
                {/* <CreatorCatogories data={this.state.CreatorCatogories} />
                <CreatorCardDetails data={this.state.CarouselData}/> */}
            </Fragment>
        )
    }
}
