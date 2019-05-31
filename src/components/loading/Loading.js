import React, { Component } from 'react'
import './loading.scss'

export default class Loading extends Component {
    render() {
        const Loading = this.props.show ? { display: "" } : { display: "none" }
        return (
            <div className="loading-container" style={Loading}>
                <div className="loading-icon">
                    <i className="iconfont icon-loading"></i>
                    <span className="loading-title">{this.props.title || '加载中...'}</span>
                </div>
            </div>
        )
    }
}
