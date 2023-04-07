import React, {useState} from 'react';
import {Dialog, TextField, Button, Tooltip} from '@mui/material';
import {WechatOutlined} from '@ant-design/icons'
import "../../assets/style/SignInSignUp.scss"
import md5 from 'js-md5'
import { registerUser } from '../../api/User';
import {useSelector, useDispatch} from 'react-redux'
import {signIn} from '../../redux/SignInSlice'
import { raiseError } from '../../redux/ErrorSlice';
import {LoadingOutlined, CheckOutlined} from '@ant-design/icons'

export default function SignUpPage(props) {
    const toggleSignMenu = props.toggleSignMenu;
    const dispatch = useDispatch()
    useSelector(state => state.SignInStatus);
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
        confirmPassword: true,
        requestPending: false,
        signUpSuccess: false
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
            case "username":
                newStatus = !!value.username
                break
            default:
                break
        }
        changeStatus(prop, newStatus)
    }
    const handleSubmit = () => {
        validateInput('phoneNumber')
        validateInput('confirmPassword')
        validateInput('password')
        validateInput('username')
        if (!status.phoneNumber || !value.phoneNumber)
            return false
        if (!status.password || !value.password)
            return false
        if (!status.confirmPassword)
            return false
        if (!status.username)
            return false
        const passwordMd5 = md5(value.password)
        changeStatus('requestPending', true)
        registerUser({
            UserName: value.username,
            Mobile: value.phoneNumber,
            Password: value.password,
            Birthday: "2000-11-11",
            Avatar: "string",
            InstitutionID: 1
        }).then(res => {
            const token = res.data.token
            dispatch(signIn({
                token,
                phoneNumber: value.phoneNumber
            }))
            changeStatus('signInSuccess', true)
            setTimeout(() => {
                changeStatus('signInSuccess', false)
                changeStatus('requestPending', false)
                props.handleClose()
            }, 1000)
        }).catch(err => {
            changeStatus('requestPending', false)
        })
    }
    return (
            <Dialog open={props.open} onClose={props.handleClose}>
                <div className={'sign-in-dialog'}>
                    <h2>创建账户</h2>
                    <ul className='sign-in-alt'>
                        <li>
                            <Tooltip title='使用微信登录' placement='top' onClick={() => dispatch(raiseError("Service Unavailable"))}>
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
                        已经有账户？<a onClick={toggleSignMenu}>登录</a>
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
                            error={!status.username}
                            onBlur={validateInput("username")}
                            label="姓名"
                            helperText={!status.username? "用户名不能为空": " "}
                        />
                    </div>
                    <div className={'dialog-input-container'}>
                        <TextField
                            type="password"
                            value={value.password}
                            error={!status.password}
                            onBlur={validateInput("password")}
                            onChange={handleChange("password")}
                            label="密码"
                            helperText="8-16位密码(同时包含字母和数字)"
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
                        <Button variant="outlined" onClick={handleSubmit}>
                            {status.requestPending && !status.signInSuccess ? <div><LoadingOutlined/>提交中</div> :
                                status.signInSuccess ? <div><CheckOutlined/>注册成功</div> :
                                "确认注册"}
                        </Button>
                    </div>
                </div>
            </Dialog>
    );
}
