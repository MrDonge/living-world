import React, { Component } from 'react'

import Topbar from '../../components/header/Topbar'

import './personal.scss'
export default class Personal extends Component {

    goto = (path) => {
        this.props.history.push(path)
    }

    render() {
        const defaultUserImg = require('../../assets/imgs/head-img.png')
        return (
            <div className="personal-container">
                <Topbar title="个人中心" />
                <div className="personal-view">
                    <div className="top-header">
                        <div className="top-header-wrapper">
                            <div className="personal-avatar">
                                <img src={defaultUserImg} alt="" className="avatar" />
                            </div>
                            <div className="top-personal">
                                <span>dong</span>
                            </div>
                        </div>
                    </div>
                    <div className="personal-menu">
                        <ul className="menu-list">
                            <li className="menu-item" onClick={() => this.goto('/creation')}>
                                <i className="iconfont icon-createicon"></i>
                                <span className="menu-title">创作</span>
                                <i className="iconfont icon-go"></i>
                            </li>
                            <li className="menu-item">
                                <i className="iconfont icon-zan11"></i>
                                <span className="menu-title">我的点赞</span>
                                <i className="iconfont icon-go"></i>
                            </li>
                            <li className="menu-item">
                                <i className="iconfont icon-collection"></i>
                                <span className="menu-title">我的收藏</span>
                                <i className="iconfont icon-go"></i>
                            </li>
                            <li className="menu-item">
                                <i className="iconfont icon-pinglun"></i>
                                <span className="menu-title">我的评论</span>
                                <i className="iconfont icon-go"></i>
                            </li>
                            <li className="menu-item">
                                <i className="iconfont icon-zuopin"></i>
                                <span className="menu-title">我的作品</span>
                                <i className="iconfont icon-go"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
