import React from 'react';
import List from '../../component/list/list.jsx';
import Api from '../../api.js'
require('./Job.css');
export default class Job extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getIndexListData: Api.getListData
        };
    }
    render() {
        return (
            <div className="list-page">
                <List url={this.state.getIndexListData} tab="job"></List>
            </div>
        );
    }
}
