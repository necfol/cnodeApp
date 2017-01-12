import React from 'react';
import { Button } from 'antd-mobile';
require('./App.css');

// export default () => <h1>こんにちは世界</h1>;


export default class App extends React.Component {
  render() {
    return (
        <Button className="btn" loading>loading 按钮</Button>
    );
  }
}
