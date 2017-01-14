import React from 'react';
import InfoStyle from './Info.css';
import { NavBar, Icon, Toast } from 'antd-mobile';
import $ from 'jquery';
import fixTime from 'formattime';
import Api from '../../api.js';
export default class Info extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            info: {},
            replies: []
        };
        this.loadInfo = this.loadInfo.bind(this);
        this.fixtime = this.fixtime.bind(this);
        this.returnGood = this.returnGood.bind(this);
    }
    componentWillMount() {
        this.loadInfo();
    }
    fixtime(val) {
        if(!val)
            return ''
        return fixTime((new Date(val)).getTime(), [{
            separate: -60*60*1000,
            formateStyle: '刚刚'
        }, {
            separate: -24*60*60*1000,
            formateStyle: '#{{hour}}小时前'
        }, {
            separate: -3*24*60*60*1000,
            formateStyle: '#{{day}}天前',
        },{
            separate: -Infinity,
            formateStyle: '#{{YYYY}}-#{{MM}}-#{{DD}}',
        }])
    }
    loadInfo() {
        var self = this;
        $.get(Api.getInfoData + this.props.location.query.id).done(function (val) {
            if (val.success) {
                self.setState({
                    info: val.data,
                    loginname: val.data.author.loginname,
                    time: val.data.create_at,
                    avatar: val.data.author.avatar_url,
                    content: val.data.content,
                    replies: val.data.replies,
                })
            } else {
                Toast.fail('加载失败!!!', 1);
            }
        }).fail(function (jqXhr) {
            Toast.fail('加载失败!!!', 1);
        });
    }
    returnGood(item) {
        if(item && item.length) {
            return <img className="good" src={require('../../img/good_sel.png')} />
        } else {
            return <img className="good" src={require('../../img/good.png')} />
        }
    }
    render() {
        return (
            <div className="info-page">
                <NavBar className="info-header" leftContent="" mode="light" onLeftClick={() => {history.back()}}
                ><span className="title">详情</span></NavBar>
                <div className="main">
                    <div className="title">{this.state.info.title}</div>
                    <div className="time-author">
                        <div className="author-div">
                            <img className="avatar" src={this.state.avatar}/>
                            <span className="author">{this.state.loginname}</span>
                        </div>
                        <span className="time">{this.fixtime(this.state.time)}</span>
                    </div>
                    <div className="content-div">
                        <div dangerouslySetInnerHTML={{__html: this.state.content}}></div>
                    </div>
                    <div className="comment-div">
                        {
                            this.state.replies.map((item, index) => {
                                return (
                                    <div key={index} className="comment-item">
                                        <div className="avatar-time-good">
                                            <div className="user">
                                                <img className="avatar" src={item.author.avatar_url}/>
                                                <span className="author">{item.author.loginname}</span>
                                            </div>
                                            <div className="time-good">
                                                {this.returnGood(item.ups)}
                                                <span className="goodnum">{item.ups.length?item.ups.length:''}</span>
                                                <span className="time">{this.fixtime(item.create_at)}</span>
                                            </div>
                                        </div>
                                        <div className="innercomment" dangerouslySetInnerHTML={{__html: item.content}}></div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        );
    }
}
