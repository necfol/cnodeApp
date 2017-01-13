import React from 'react';
import {  Drawer, List, NavBar } from 'antd-mobile';
require('./App.less');
export default class App extends React.Component {
  constructor(props){
      super(props);
      this.state = {
          open: false,
          position: 'left'
      };
      this.onOpenChange = this.onOpenChange.bind(this);
  }
  onOpenChange(isOpen) {
      console.log(isOpen, arguments);
      this.setState({ open: !this.state.open });
  }
  render() {
      const sidebar = (<List>
          {[...[1,2,3,4,5].keys()].map((i, index) => {
              if (index === 0) {
                  return (<List.Item key={index}
                                     thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
                                     multipleLine
                  >分类</List.Item>);
              }
              return (<List.Item key={index}
                                 thumb="https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png"
              >分类{index}</List.Item>);
          })}
      </List>);

      const drawerProps = {
          open: this.state.open,
          position: this.state.position,
          onOpenChange: this.onOpenChange,
      };
      return (<div style={{ height: '100%' }} onClick={this.onOpenChange}>
        <NavBar iconName="ellipsis" ></NavBar>
        <Drawer
            className="my-drawer"
            sidebar={sidebar}
            dragHandleStyle={{ display: 'none' }}
            contentStyle={{ color: '#A6A6A6', textAlign: 'center', paddingTop: 42 }}
            {...drawerProps}
        >
          请点击左上角图标
        </Drawer>
      </div>);
  }
}
