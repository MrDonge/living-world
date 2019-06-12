import React, { Component } from 'react'

import cookie from 'react-cookies'

export default class Comment extends Component {
    render() {
        const userId = cookie.load('userId')

        return (
            <div className="comment-container">
                <div className="comment-title">全部评论</div>
                <div className="comment-wrapper">
                    <div className="comment-list">
                        {
                            this.props.list.map(item => {
                                const likesUserId = item.likesUser.find(user => {
                                    return userId === user.id
                                })
                                return (
                                    <div className="comment-item" key={item._id}>
                                        <div
                                            className="like"
                                            onClick={this.props.like.bind(this, item._id)}
                                            style={likesUserId ? { color: '#00a4ff' } : {}}
                                        >
                                            <i className="iconfont icon-zan11"></i>
                                            <span>{item.likes || 0}</span>
                                        </div>
                                        <div className="comment-user">
                                            <img src="" alt="" className="avatar" />
                                            <span>{item.user.account}</span>
                                        </div>
                                        <div className="comment">{item.content}</div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
        )
    }
}
