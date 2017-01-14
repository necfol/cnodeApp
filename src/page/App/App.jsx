import React from 'react';
import Tab from '../../component/tab/tab.jsx';
import { NavBar, Icon, Toast } from 'antd-mobile';
import AppStyle from './App.css';
export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
      };
  }
  render() {
      return (
        <div className="app">
            <NavBar iconName="false" mode="light" className="nav-img">
                <img src="https://o4j806krb.qnssl.com/public/images/cnodejs_light.svg" alt=""/>
            </NavBar>
            <div className="main">
                {this.props.children}
            </div>
            <Tab></Tab>
        </div>
      );
  }
}
