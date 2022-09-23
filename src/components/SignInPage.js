import React, {useState} from 'react';
import {Dialog, TextField, Button, Tooltip} from '@mui/material';
import {WechatOutlined} from '@ant-design/icons'
import "../assets/style/SignInSignUp.scss"
export default function FormDialog(props) {


    const [value, setValue] = useState({
        username: "",
        password: "",
        phoneNumber: "",
        captcha: "",
        confirmPassword: "",
    })
    const [status, setStatus] = useState({
        username: true,
        password: true,
        phoneNumber: true,
        captcha: true,
        confirmPassword: true
    })
    const handleChange = (prop) => (event) => {
        setValue({
            ...value,
            [prop]: event.target.value
        })
    }
    const changeStatus = (prop, value) => {
        setStatus({
            ...status,
            [prop]: value
        })
    }

    const validateInput = (prop) => () => {
        let newStatus
        switch (prop) {
            case "phoneNumber":
                newStatus = !value.phoneNumber || /^1[3|4|5|6|7|8|9][0-9]\d{8}$/.test(value.phoneNumber)
                break
            case "confirmPassword":
                newStatus = !value.password || value.password && (value.password === value.confirmPassword)
                break
            case "password":
                newStatus = value.password && /^(?=.*\d)(?=.*[a-zA-Z]).{8,16}$/.test(value.password)
                break
            default:
                break
        }
        changeStatus(prop, newStatus)
    }

    return (

            <Dialog open={props.open} onClose={props.handleClose}>
                <div className={'sign-in-dialog'}>
                    <span className='sign-in-step'>
                        第1步，共2步
                    </span>
                    <h2>创建账户</h2>
                    <ul className='sign-in-alt'>
                        <li>
                            <Tooltip title='使用微信登录' placement='top'>
                                <WechatOutlined className='position-absolute-centering'/>

                            </Tooltip>

                        </li>
                    </ul>
                    <div className='sign-in-divider'>
                        或者
                    </div>
                    <section className='sign-in-has-account'>
                        <p>
                            使用电话号码注册
                        </p>
                        <span>
                        已经有账户？<a>登录</a>
                        </span>

                    </section>
                    <div className={'dialog-input-container'}>
                        <TextField
                            error={!status.phoneNumber}
                            onBlur={validateInput("phoneNumber")}
                            value={value.phoneNumber}
                            onChange={handleChange("phoneNumber")}
                            label="注册使用电话号码"
                            helperText={!status.phoneNumber? "请输入正确的手机号": " "}
                        />
                        <TextField
                            value={value.username}
                            onChange={handleChange("username")}
                            label="姓名"
                            helperText=" "
                        />
                    </div>
                    <div className={'dialog-input-container'}>
                        <TextField
                            type="password"
                            value={value.password}
                            error={status.password === 'error'}
                            onBlur={validateInput("password")}
                            onChange={handleChange("password")}
                            label="密码"
                            helperText="8-16位密码"
                        />
                        <TextField
                            type="password"
                            error={!status.confirmPassword}
                            onBlur={validateInput("confirmPassword")}
                            value={value.confirmPassword}
                            onChange={handleChange("confirmPassword")}
                            label="确认密码"
                            helperText={!status.confirmPassword? "再次输入密码错误": " "}
                        />
                    </div>
                    <div className={'dialog-buttons'}>
                        <Button variant="outlined">
                            确认注册
                        </Button>
                    </div>
                </div>

            </Dialog>
    );
}