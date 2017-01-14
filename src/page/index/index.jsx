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
            <div className="index-main">
                <NavBar iconName="false" mode="light" className="nav-img">
                    <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""/>
                </NavBar>
                <div className="list-page">
                    <List url={this.state.getIndexListData}></List>
                </div>
            </div>
        );
    }
}
