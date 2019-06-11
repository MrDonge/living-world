import React, { Component } from 'react'

// import BlogHeader from '../../components/header/BlogHeader';
import cookie from 'react-cookies'

import Scroll from '../../components/scroll/Scroll';

import { articleList, changeLikeStatus } from '../../api/article';

import './home.scss'
import Loading from '../../components/loading/Loading';
import ArticleBase from '../../components/articleBase/ArticleBase';

export default class Home extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [],
      showLoading: true,
      refreshScroll: false,
      selectedArticle: '',
      likeStyle: {},
      commentStyle: {}
    }
  }

  componentDidMount() {
    this.getList()
  }

  getList() {
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

  handleLike(id) {
    // console.log(id);
    changeLikeStatus(id).then(res => {
      console.log(res)
      if (res.code === 0) {
        this.getList()
      }
    })
  }

  goDetail = (id) => {
    this.props.history.push('/article/' + id)
  }

  render() {
    const defaultUserImg = require('../../assets/imgs/head-img.png')
    const userId = cookie.load('userId')
    return (
      <div className="blog-container">
        <div className="blog-view">
          {/* <BlogHeader title="标题" /> */}
          <Scroll refresh={this.state.refreshScroll}>
            <div className="blog-list">
              {
                this.state.list.map(item => {
                  const likesUserId = item.likesUser.find(user => {
                    return userId === user.id
                  })
                  return (
                    <div className="blog-post-wrap" key={item._id}>
                      <div className="blog-post" onClick={() => this.goDetail(item._id)}>
                        <div className="post-user">
                          <img src={item.avatar ? item.avatar : defaultUserImg} alt={item.author} className="avatar" />
                          <span>{item.author}</span>
                        </div>
                        <div className="post-title">{item.title}</div>
                        <div className="post-content">{item.content}</div>
                      </div>
                      <ArticleBase
                        likeStyle={likesUserId ? { color: '#00a4ff' } : {}}
                        like={this.handleLike.bind(this, item._id)}
                        pv={item.meta.pv || 0}
                        likes={item.meta.likes}
                      />
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
