import React from 'react';
import { NavBar, Icon, Toast } from 'antd-mobile';
import List from '../../component/list/list.jsx';
import $ from 'jquery';
import Api from '../../api.js'
require('./index.css');
export default class Index extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            listData: []
        };
        this.getListData = this.getListData.bind(this);
    }
    componentWillMount() {
        this.getListData();
    }
    getListData() {
        var that = this;
        $.get(Api.getListData, {
            page: 0,
            limit: 10
        }).done(function(val) {
            if(val.success) {
                that.setState({listData: val.data})
            } else {
                Toast.fail('加载失败!!!', 1);
            }
        }).fail(function(jqXhr) {
            Toast.fail('加载失败!!!', 1);
        });
    }
    render() {
        return (
            <div className="index-main">
                <NavBar iconName="false" mode="light" className="nav-img">
                    <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""/>
                </NavBar>
                <div className="list-page">
                    {
                        this.state.listData.map((item, index) => {
                            return <List key={index} title={item.title} time={item.last_reply_at} author={item.author} top={item.top} good={item.good} tab={item.tab}></List>
                        })
                    }
                </div>
            </div>
        );
    }
}
