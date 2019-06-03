import React, { Component } from 'react'

import { Flex, List, InputItem, WhiteSpace, Button } from 'antd-mobile';
import { createForm } from 'rc-form'

export default class Register extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleRegister = () => {
        console.log(this)
        this.props.history.push('/login')
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
                        type="password"
                        ref={el => this.inputRef = el}
                    ></InputItem>
                    <InputItem
                        placeholder="请确认密码"
                        type="password"
                        ref={el => this.inputRef = el}
                    ></InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.handleRegister}>注册</Button>
            </Flex>
        )
    }
}
