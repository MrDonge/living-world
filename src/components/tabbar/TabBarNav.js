import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

export default class TabBarNav extends Component {
    render() {
        return (
            <footer className="nav-tabs">
                <div className="tab-item">
                    <NavLink className="nav-link" to="/homepage" replace>
                        <i className="iconfont icon-home"></i>
                        <span>主页</span>
                    </NavLink>
                </div>
                {/* <div className="tab-item">
                        <NavLink className="nav-link" to="/creation" replace>
                            <i className="iconfont icon-createicon"></i>
                            <span>创作</span>
                        </NavLink>
                    </div> */}
                <div className="tab-item">
                    <NavLink className="nav-link" to="/personal" replace>
                        <i className="iconfont icon-caidaniconwodehui"></i>
                        <span>我的</span>
                    </NavLink>
                </div>
            </footer>
        )
    }
}
