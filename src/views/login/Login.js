import React, { Component } from 'react'
import { Flex, List, InputItem, WhiteSpace, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form'

import { userLogin } from '../../api/sign'

import cookie from 'react-cookies'

class LoginModule extends Component {

    constructor(props) {
        super(props)
        this.state = {

        }
    }

    handleLogin = () => {

        const params = this.props.form.getFieldsValue()

        userLogin(params).then(res => {
            if (res.code === 0) {
                cookie.save('token', res.token)
                cookie.save('userId', res.result._id)
                Toast.info('登录成功')
                // 延迟跳转
                setTimeout(() => {
                    this.props.history.push('/personal')
                }, 1000);
            } else {
                Toast.info(res.message)
            }
        })

    }

    render() {
        const { getFieldProps } = this.props.form;
        return (
            <Flex direction="column" align="stretch" justify="between" style={{ margin: '20px' }}>
                <div className="logo">
                    <img src={[require('../../assets/imgs/logo.png')]} alt="logo" className="logo-img" />
                    <div className="welcome">即将打开新世界的大门</div>
                </div>
                <WhiteSpace />
                <List>
                    <InputItem
                        placeholder="请输入用户名"
                        clear
                        {...getFieldProps('account')}
                    ></InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        type="password"
                        {...getFieldProps('password')}
                    ></InputItem>
                </List>
                <WhiteSpace />
                <Button type="primary" onClick={this.handleLogin}>登录</Button>
                <WhiteSpace />
                <Button onClick={() => this.props.history.push('/register')}>注册</Button>
            </Flex>
        )
    }
}
const Login = createForm()(LoginModule);

export default Login
