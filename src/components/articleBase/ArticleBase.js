import React, { Component } from 'react'

import './articlebase.scss'
export default class ArticleBase extends Component {

    componentDidMount() {

    }

    like() {
        console.log(123)
    }

    render() {
        return (
            <div className="base-container">
                <div className="base-wrapper">
                    <div className="base-view">
                        <i className="iconfont icon-view"></i>
                        <span>{this.props.pv}</span>
                    </div>
                    <div className="base-operator">
                        <div className="wrap"
                            onClick={this.props.like.bind(this)}
                            style={this.props.likeStyle}
                        >
                            <i className="iconfont icon-zan11"></i>
                            <span>{this.props.likes}</span>
                        </div>
                        {/* <div className="wrap" onClick={this.props.unlike}>
                            <i className="iconfont icon-zan2"></i>
                            <span>{this.props.bad}</span>
                        </div> */}
                        <div className="wrap"
                            onClick={this.props.comment}
                            style={this.props.commentStyle}
                        >
                            <i className="iconfont icon-pinglun"></i>
                            <span>{this.props.comment}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
