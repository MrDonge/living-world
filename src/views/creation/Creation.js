import React, { Component } from 'react'

import Topbar from '../../components/header/Topbar'
import { InputItem, TextareaItem, WhiteSpace } from 'antd-mobile'

import './creation.scss'
export default class Creation extends Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    back() {
        this.props.history.goBack()
    }
    putOn() {
        console.log('confirm')
    }

    render() {
        return (
            <div className="creation-container">
                <Topbar title="发表文章" operation="发布" showBack={true} onLeft={this.back.bind(this)} onRight={this.putOn.bind(this)} />
                <div className="creation-wrapper">
                    <div className="creation-title">
                        {/* <List> */}
                        <InputItem placeholder="请输入标题" autoFocus />
                        {/* <WhiteSpace /> */}
                        <TextareaItem autoHeight placeholder="请详细描述您要表达什么" className="creation-content" />
                        {/* </List> */}
                    </div>
                </div>
            </div>
        )
    }
}
