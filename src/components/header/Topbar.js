import React, { Component } from 'react'
import './topbar.scss'

export default class TopBar extends Component {

    constructor(props) {
        super(props)
        this.state = {}

    }

    handleLeft() {
        this.props.onLeft()
    }
    handleRight() {
        this.props.onRight()
    }

    render() {
        const isShowBack = this.props.showBack ? { display: 'block' } : { display: 'none' }
        const isShowOperation = this.props.operation ? { display: '' } : { display: 'none' }
        return (
            <header className="navbar-header">
                <div className="header-wrapper">
                    <div className="header-left" style={isShowBack} onClick={this.handleLeft.bind(this)}>
                        <i className="iconfont icon-left"></i>
                    </div>
                    <div className="header-title">
                        <span>{this.props.title}</span>
                    </div>
                    <div className="header-right" style={isShowOperation} onClick={this.handleRight.bind(this)}>
                        <span>{this.props.operation}</span>
                    </div>
                </div>
            </header >
        )
    }
}
