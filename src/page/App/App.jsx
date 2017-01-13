import React from 'react';
import Tab from '../../component/tab/tab.jsx';
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
            <div className="main">
                {this.props.children}
            </div>
            <Tab></Tab>
        </div>
      );
  }
}
