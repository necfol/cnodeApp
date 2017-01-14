import React from 'react';
import { NavBar, Icon, Toast } from 'antd-mobile';
import List from '../../component/list/list.jsx';
import Api from '../../api.js'
require('./index.css');
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            getIndexListData: Api.getListData
        };
    }
    render() {
        return (
            <div className="list-page">
                <List url={this.state.getIndexListData}></List>
            </div>
        );
    }
}
