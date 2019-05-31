import React, { Component } from 'react'
import './header.scss'

export default class BlogHeader extends Component {
    render() {
        return (
            <header className="navbar-header">
                <div className="header-title">{this.props.title}</div>
            </header>
        )
    }
}
