import React from 'react';
import Link from 'next/link';
import { withRouter } from "next/router";
import {Container } from 'react-bootstrap';
import PanelOverviewCard from '../PanelOverviewCard';

const ControlPanelTabs = ({ router }) => {
    const { query: { tab } } = router
     console.log('tab',tab);
      const selectedTab = tab;
      const isTabPO = tab === "PO" || tab == null;
      const isTabEP = tab === "EP";
      const isTabPC = tab === "PC";
      const isTabUP = tab === "UP";
      const isTabTP = tab === "TP";

    return(
        <div className="control-panel-tabs-holder d-flex">
            <div className="tabs-section"> 
                <div className="tab" data-selected={isTabPO}>
                    <Link href={{ pathname: "", query: { tab: "PO" } }}>
                        Profile Overview
                    </Link>
                </div>
                <div className="tab" data-selected={isTabEP}>
                    <Link href={{ pathname: "", query: { tab: "EP" } }}>
                        Edit Profile
                    </Link>
                </div>
                <div className="tab" data-selected={isTabPC}>
                    <Link href={{ pathname: "", query: { tab: "PC" } }}>
                        My Past Calls
                    </Link>
                </div>
                <div className="tab" data-selected={isTabUP}>
                    <Link href={{ pathname: "", query: { tab: "UP" } }}>
                        My Unlocked Posts
                    </Link>
                </div>
                <div className="tab" data-selected={isTabTP}>
                    <Link href={{ pathname: "", query: { tab: "TP" } }}>
                        My Tickets And Passes
                    </Link>
                </div>
            </div>
            <Container className="w-50">
                <div className="tabBody w-100">
                    {isTabPO && <PanelOverviewCard  selectedTab = { selectedTab }/>
                    }
                    {isTabEP && <PanelOverviewCard  selectedTab = { selectedTab }/>}
                    {isTabPC && <div>ddd</div>}
                    {isTabUP && <div>ddd</div>}
                    {isTabTP && <div>ddd</div>}
                </div>
            </Container>
        </div>
    )
}

export default withRouter(ControlPanelTabs);