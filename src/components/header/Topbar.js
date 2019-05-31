import React, { Component } from 'react'
import './topbar.scss'

export default class TopBar extends Component {
    render() {
        return (
            <header className="navbar-header">
                <div className="header-title">{this.props.title}</div>
            </header>
        )
    }
}
