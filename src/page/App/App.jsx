import React from 'react';
import Drawer from '../../component/Drawer/Drawer.jsx';
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
            <Drawer></Drawer>
        </div>
      );
  }
}
