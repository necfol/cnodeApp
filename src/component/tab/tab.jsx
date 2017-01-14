import React from 'react';
import { browserHistory } from 'react-router';
import {  TabBar } from 'antd-mobile';
require('./tab.css');
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'new'
        };
    }
    componentWillMount() {
        this.setState({
            selectedTab: location.pathname.split('/')[1] || 'new',
        });
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="#e8e9ec"
            >
                <TabBar.Item
                    title="最新"
                    key="最新"
                    icon={require('../../img/list.png')}
                    selectedIcon={require('../../img/list_sel.png')}
                    selected={this.state.selectedTab === 'new'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'new',
                        },() => {
                            browserHistory.push('/');
                        });
                    }}
                    data-seed="logId"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={require('../../img/ask.png')}
                    selectedIcon={require('../../img/ask_sel.png')}
                    title="问答"
                    key="问答"
                    selected={this.state.selectedTab === 'ask'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'ask',
                        },() => {
                            browserHistory.push('/ask');
                        });
                    }}
                    data-seed="logId1"
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={require('../../img/job.png')}
                    selectedIcon={require('../../img/job_sel.png')}
                    title="招聘"
                    key="招聘"
                    selected={this.state.selectedTab === 'job'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'job',
                        });
                    }}
                >
                </TabBar.Item>
                <TabBar.Item
                    icon={require('../../img/setting.png')}
                    selectedIcon={require('../../img/setting_sel.png')}
                    title="设置"
                    key="设置"
                    selected={this.state.selectedTab === 'setting'}
                    onPress={() => {
                        this.setState({
                            selectedTab: 'setting',
                        });
                    }}
                >
                </TabBar.Item>
            </TabBar>
        );
    }
}
