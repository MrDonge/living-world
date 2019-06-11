import React, { Component } from 'react'

import TopBar from '../../components/header/Topbar';
import Scroll from '../../components/scroll/Scroll';
import ArticleBase from '../../components/articleBase/ArticleBase';

import { getArticleById } from '../../api/article'

import './article.scss'
export default class Article extends Component {

    constructor(props) {
        super(props)
        this.state = {
            refreshScroll: false,
            articleDetail: {}
        }
    }

    componentDidMount() {
        const { id } = this.props.match.params
        getArticleById(id).then(res => {
            if (res.code === 0) {
                this.setState({
                    articleDetail: res.result
                }, () => {
                    this.setState({
                        refreshScroll: true
                    })
                });
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

        return (
            <div className="article-container">
                <TopBar title="文章详情" showBack={true} onLeft={() => this.props.history.goBack()} />
                <div className="article-view">
                    <Scroll refresh={this.state.refreshScroll} onScroll={this.scroll}>
                        <div>
                            <div className="article-title">
                                <div className="title">{detail.title}</div>
                            </div>
                            <div className="article-content">{detail.content}</div>
                        </div>
                    </Scroll>
                </div>
            </div>
        )
    }
}
