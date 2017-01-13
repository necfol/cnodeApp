import React from 'react';
import {  TabBar } from 'antd-mobile';
require('./tab.less');
export default class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            selectedTab: 'new'
        };
    }
    render() {
        return (
            <TabBar
                unselectedTintColor="#949494"
                tintColor="#33A3F4"
                barTintColor="white"
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
