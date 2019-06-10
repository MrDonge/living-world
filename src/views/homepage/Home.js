import React, { Component } from 'react'

// import BlogHeader from '../../components/header/BlogHeader';

import Scroll from '../../components/scroll/Scroll';

import { articleList } from '../../api/article';

import './home.scss'
import Loading from '../../components/loading/Loading';

export default class Home extends Component {

    constructor(props) {
        super(props)

        this.state = {
            list: [],
            showLoading: true,
            refreshScroll: false
        }
    }

    componentDidMount() {
        articleList().then(res => {
            this.setState({
                list: res.result,
                showLoading: false
            }, () => {
                this.setState({
                    refreshScroll: true
                });
            });
        })
    }

    goDetail = (id) => {
        this.props.history.push('/article/' + id)
    }

    render() {
        const defaultUserImg = require('../../assets/imgs/head-img.png')
        return (
            <div className="blog-container">
                <div className="blog-view">
                    {/* <BlogHeader title="标题" /> */}
                    <Scroll refresh={this.state.refreshScroll}>
                        <div className="blog-list">
                            {
                                this.state.list.map(item => {
                                    return (
                                        <div className="blog-post-wrap" key={item._id}>
                                            <div className="blog-post" onClick={() => this.goDetail(item._id)}>
                                                <div className="post-user">
                                                    <img src={item.avatar ? item.avatar : defaultUserImg} alt={item.username} className="avatar" />
                                                    <span>{item.author}</span>
                                                </div>
                                                <div className="post-title">{item.title}</div>
                                                <div className="post-content">{item.content}</div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </Scroll>
                    <Loading show={this.state.showLoading} />
                </div>
            </div >
        )
    }
}
