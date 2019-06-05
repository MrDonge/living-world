import React, { Component } from 'react'

import { Flex, List, InputItem, WhiteSpace, Button, Toast } from 'antd-mobile';
import { createForm } from 'rc-form'

import { userRegister } from '../../api/sign'
class RegisterModule extends Component {

    constructor(props) {
        super(props)
        this.state = {
            name: ""
        }
    }

    handleRegister = () => {


        // 表单参数
        const params = this.props.form.getFieldsValue()

        if (!params.account) {
            Toast.info('请输入用户名')
        } else if (!params.password) {
            Toast.info('请输入密码')
        } else if (params.password !== params.rePassword) {
            Toast.info('密码输入不一致')
        } else {

            userRegister(params).then(res => {
                if (res.code === 0) {
                    // 延迟跳转
                    setTimeout(() => {
                        this.props.history.push('/login')
                    }, 1000);
                    Toast.info('注册成功,前往登录')
                } else {
                    Toast.info(res.message)
                }
            })

        }

    }

    render() {
        const { getFieldProps } = this.props.form
        return (
            <Flex direction="column" align="stretch" justify="between" style={{ margin: ' 20px' }}>
                <div className="logo">
                    <img src={[require('../../assets/imgs/logo.png')]} alt="logo" className="logo-img" />
                    <div className="welcome">欢迎注册 LIVI</div>
                </div>
                <List>
                    <InputItem
                        placeholder="请输入用户名"
                        {...getFieldProps('account')}
                        clear
                    ></InputItem>
                    <InputItem
                        placeholder="请输入密码"
                        type="password"
                        clear
                        {...getFieldProps('password')}
                    ></InputItem>
                    <InputItem
                        placeholder="请确认密码"
                        type="password"
                        clear
                        {...getFieldProps('rePassword')}
                    ></InputItem>
                </List>
                <WhiteSpace />
                <Button onClick={this.handleRegister}>立即注册</Button>
                <WhiteSpace />
                <Button type="primary" onClick={() => this.props.history.push('/login')}>去登录</Button>
            </Flex>
        )
    }
}

const Register = createForm()(RegisterModule);
export default Register
