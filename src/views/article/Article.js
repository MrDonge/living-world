import React, { Component } from 'react'

import TopBar from '../../components/header/Topbar';
import Scroll from '../../components/scroll/Scroll';
import Loading from '../../components/loading/Loading';
import Part from '../../components/comment/Part';
import Comment from '../../components/comment/Comment'

// import ArticleBase from '../../components/articleBase/ArticleBase';

import { getArticleById, changeLikeStatus } from '../../api/article'
import { createComment, changeCommentLike } from '../../api/comment'

// import { WhiteSpace } from 'antd-mobile'

import './article.scss'
export default class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            showLoading: true,
            refreshScroll: false,
            articleDetail: {},
            comments: [],
            commentContent: ""
        }
    }

    componentDidMount() {
        this.getData()
    }

    getData() {
        const { id } = this.props.match.params
        getArticleById(id).then(res => {
            if (res.code === 0) {
                this.setState({
                    articleDetail: res.result.article,
                    comments: res.result.comment
                }, () => {
                    this.setState({
                        refreshScroll: true,
                        showLoading: false
                    })
                });
            }
        })
    }

    commitComment(val) {
        const params = {
            content: val,
            articleId: this.state.articleDetail._id
        }
        createComment(params).then(res => {
            if (res.code === 0) {
                this.getData()
            }
        })
    }

    /**
     * 文章點讚
     */
    handleLike(id) {
        changeLikeStatus(id).then(res => {
            if (res.code === 0) {
                this.getData()
            }
        })
    }

    /**
     * 評論點讚
     */
    handleCommentLike(id) {
        changeCommentLike(id).then(res => {
            if (res.code === 0) {
                this.getData()
            }
        })
    }

    /**
     * 监听滚动实现上划显示标题到顶部导航
     * @param {scroll} 滚动位置
     */
    scroll(scroll) {
        // 如果上划
        if (scroll.y < 0) {

        }
    }

    render() {

        const detail = this.state.articleDetail
        const comments = this.state.comments

        return (
            <div className="article-container">
                <TopBar title="文章详情" showBack={true} onLeft={() => this.props.history.goBack()} />
                <div className="article-view">
                    <Scroll refresh={this.state.refreshScroll} onScroll={this.scroll}>
                        <div style={{ paddingBottom: '10px' }}>
                            <div className="article-title">
                                <div className="title">{detail.title}</div>
                            </div>
                            <div className="article-content">{detail.content}</div>
                            <Comment list={comments} like={this.handleCommentLike.bind(this)} />
                        </div>
                        <Part
                            article={this.state.articleDetail}
                            content={this.state.commentContent}
                            commit={this.commitComment.bind(this)}
                            like={this.handleLike.bind(this, detail._id)}
                        />
                    </Scroll>
                </div>
                <Loading show={this.state.showLoading} />
            </div>
        )
    }
}
