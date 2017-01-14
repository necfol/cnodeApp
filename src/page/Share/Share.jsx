import React from 'react';
import SettingStyle from './Share.css';
import List from '../../component/list/list.jsx';
import Api from '../../api.js'
export default class Share extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getIndexListData: Api.getListData
        };
    }
    render() {
        return (
            <div className="list-page">
                <List url={this.state.getIndexListData} tab="share"></List>
            </div>
        );
    }
}
