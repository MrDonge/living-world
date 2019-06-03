import React, { Component } from 'react'

import { Flex, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form'

export default class Login extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleLogin = () => {
        console.log(this)
        this.props.history.push('/homepage')
    }

    render() {
        // const { getFieldProps } = this.props.form;
        return (
            <Flex direction="column" align="stretch" justify="between" style={{ margin: '200px 10px' }}>
                <List>
                    <InputItem
                        placeholder="请输入用户名"
                        ref={el => this.autoFocusInst = el}
                    ></InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        ref={el => this.inputRef = el}
                    ></InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.handleLogin}>登录</Button>
            </Flex>
        )
    }
}
