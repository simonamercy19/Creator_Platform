import React from 'react';
import ControlPanelTabs from '../src/components/ControlPanelTabs';

export default class ControlPanel extends React.Component {
    render(){
        return(
            <React.Fragment>
                <div className="control-panel-holder h-100">
                    <ControlPanelTabs />
                </div>
            </React.Fragment>
        )
    }
}