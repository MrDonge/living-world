import React, { Component } from 'react'
import ArticleBase from '../articleBase/ArticleBase';

import cookie from 'react-cookies'

import './comment.scss'
export default class Part extends Component {

    handleCommit(e) {
        if (e.keyCode === 13) {
            this.props.commit(this.refs.comment.value)
            this.refs.comment.value = ''
        }
    }

    render() {
        const userId = cookie.load('userId')
        const article = this.props.article

        let likesUserId
        if (article.likesUser && article.likesUser.length) {

            likesUserId = article.likesUser.find(user => {
                return userId === user.id
            })
        }
        return (
            <div className="part-container">
                <div className="part-wrapper">
                    <div className="avatar">
                        <img src="" alt="" />
                    </div>
                    <div className="input-wrapper">
                        <input className="input-inner" placeholder="我有个不成熟的建议。。。" ref="comment" onKeyDown={this.handleCommit.bind(this)} />
                    </div>
                    <ArticleBase
                        like={this.props.like.bind(this)}
                        pvStyle={{ display: 'none' }}
                        likeStyle={likesUserId ? { color: '#00a4ff' } : {}}
                        // pv={article.meta && article.meta.pv}
                        likes={article.meta && article.meta.likes}
                    />
                </div>
            </div>
        )
    }
}
