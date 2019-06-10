import React, { Component } from 'react'

import Topbar from '../../components/header/Topbar'
import { InputItem, TextareaItem, WhiteSpace, Toast } from 'antd-mobile'

import { createArticle } from '../../api/article'

import './creation.scss'
export default class Creation extends Component {
    constructor(props) {
        super(props)
        this.state = {
            title: "",
            content: ""
        }
    }
    back() {
        this.props.history.goBack()
    }
    putOn() {

        try {
            if (!this.state.title) {
                throw new Error('标题不能为空')
            }
            if (!this.state.content) {
                throw new Error('内容不能为空')
            }
        } catch (e) {
            Toast.info(e.message, 2, null, false)
            return false
        }

        const params = { ...this.state }

        createArticle(params).then(res => {
            if (res.code === 0) {
                Toast.info('创建成功')
                this.props.history.push('/homepage')
            } else {
                Toast.info(res.message)
                return false
            }
        })

    }

    onTitleChange(e) {
        this.setState({
            title: e
        });
    }

    onContentChange(e) {
        this.setState({
            content: e
        })
    }

    render() {
        return (
            <div className="creation-container">
                <Topbar title="发表文章" operation="发布" showBack={true} onLeft={this.back.bind(this)} onRight={this.putOn.bind(this)} />
                <div className="creation-wrapper">
                    <div className="creation-title">
                        {/* <List> */}
                        <InputItem value={this.state.title} onChange={this.onTitleChange.bind(this)} placeholder="请输入标题" autoFocus />
                        {/* <WhiteSpace /> */}
                        <TextareaItem value={this.state.content} onChange={this.onContentChange.bind(this)} autoHeight placeholder="请详细描述您要表达什么" className="creation-content" />
                        {/* </List> */}
                    </div>
                </div>
            </div>
        )
    }
}
