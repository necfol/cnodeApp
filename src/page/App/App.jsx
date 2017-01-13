import React from 'react';
import Tab from '../../component/tab/tab.jsx';
import AppStyle from './App.less';
export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
      };
  }
  render() {
      return (
        <div className="app">
            {this.props.children}
            <Tab></Tab>
        </div>
      );
  }
}
