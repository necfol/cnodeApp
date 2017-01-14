import React from 'react';
import ListItem from '../listitem/listitem.jsx';
import $ from 'jquery';
import InfiniteScroll from 'react-infinite-scroller';
import { ActivityIndicator } from 'antd-mobile';
require('./list.css')
export default class List extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            listData: [],
            hasMoreItems: true
        };
        this.loadItems = this.loadItems.bind(this);
    }
    loadItems(page) {
        var that = this,
            url = this.props.url;
        $.get(url, {
            page,
            limit: 10
        }).done(function (val) {
            if (val.success) {
                if(val.data.length < 10) {
                    that.setState({hasMoreItems: false})
                }
                that.setState({listData: [...that.state.listData,...val.data]})
            } else {
                Toast.fail('加载失败!!!', 1);
            }
        }).fail(function (jqXhr) {
            Toast.fail('加载失败!!!', 1);
        });
    }
    render() {
        return (
            <div className="InfiniteScroll-div">
                <InfiniteScroll
                    pageStart={-1}
                    loadMore={this.loadItems}
                    hasMore={this.state.hasMoreItems}
                    useWindow={false}
                    loader={<div className="indicator-div"><ActivityIndicator animating /></div>}>
                    {
                        this.state.listData.map((item, index) => {
                        return <ListItem key={index} title={item.title} time={item.last_reply_at} author={item.author} top={item.top} good={item.good} tab={item.tab}></ListItem>
                        })
                    }
                </InfiniteScroll>
            </div>
        );
    }
}
