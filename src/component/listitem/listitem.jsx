import React from 'react';
import fixTime from 'formattime';
require('./listitem.css')
export default class ListItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.fixtime = this.fixtime.bind(this);
    }
    fixtime(val) {
        return fixTime((new Date(val)).getTime(), [{
            separate: -60*60*1000,
            formateStyle: '刚刚'
        }, {
            separate: -24*60*60*1000,
            formateStyle: '#{{hour}}小时前'
        }, {
            separate: -30*24*60*60*1000,
            formateStyle: '#{{day}}天前',
        },{
            separate: -Infinity,
            formateStyle: '#{{YYYY}}-#{{MM}}-#{{DD}}',
        }])
    }
    render() {
        var typeEl,
            mapVal = {
                'ask': '问答',
                'share': '分享',
                'job': '招聘',
                'good': '精华'
            };
        if(this.props.top) {
            typeEl= (
                <span className="type top">置顶</span>
            )
        } else if(this.props.good) {
            typeEl= (
                <span className="type good">精华</span>
            )
        } else {
            typeEl= (
                <span className="type">{mapVal[this.props.tab] || '其他'}</span>
            )
        }

        return (
            <div className="item">
                <div className="title">{this.props.title}</div>
                <div className="info">
                    <div className="type-div">
                        {typeEl}
                        <div className="author">
                            <img className="avatar" src={this.props.author.avatar_url}/>
                            <span className="user">{this.props.author.loginname}</span>
                        </div>
                    </div>
                    <div className="time">{this.fixtime(this.props.time)}</div>
                </div>
            </div>
        );
    }
}
