import React, {useState} from 'react'
import {Dialog, TextField, Button, Tooltip} from '@mui/material';
import {WechatOutlined} from '@ant-design/icons'
import "../../assets/style/SignInSignUp.scss"
import { signInUser } from '../../api/User';
import md5 from 'js-md5';
import { signIn } from '../../redux/SignInSlice';
import { raiseError } from '../../redux/ErrorSlice';
import { useDispatch } from 'react-redux';
import {LoadingOutlined, CheckOutlined} from '@ant-design/icons'

const SignInPage = (props) => {
    const toggleSignMenu = props.toggleSignMenu
    const dispatch = useDispatch()
    const [value, setValue] = useState({
        phoneNumber: "",
        password: ""
    })
    const [status, setStatus] = useState({
        phoneNumber: true,
        password: true,
        requestPending: false,
        signInSuccess: false
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
    const handleSignIn = () => {
        if (!value.phoneNumber)
            changeStatus('phoneNumber', false)
        if (!value.password)
            changeStatus('password', false)
        if (value.phoneNumber && value.password && !status.requestPending) {
            changeStatus('requestPending', true)
            console.log("登陆中...")
            const passwordMd5 = md5(value.password)
            signInUser({
                Mobile: value.phoneNumber,
                Password: value.password
            })
            .then(res => {
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
            })
            .catch(err => {
                alert("用户名或密码错误！")
                changeStatus('requestPending', false)
            })
        }
    }
    const handleOpenRegisterPage = ()=>{

    }
    return <Dialog open={props.open} onClose={props.handleClose}>
                <div className={'sign-in-dialog'}>
                    <h2>登录</h2>
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
                            使用账号密码登录
                        </p>
                        <span>
                        新用户？<a onClick={toggleSignMenu}>注册</a>
                        </span>

                    </section>
                    <div className={'dialog-input-container'}>
                        <TextField
                            error={!status.phoneNumber}
                            value={value.phoneNumber}
                            onChange={handleChange("phoneNumber")}
                            label="电话号码"
                            helperText={!status.phoneNumber? "请输入正确的手机号": " "}
                        />
                        <TextField
                            type="password"
                            value={value.password}
                            error={!status.password}
                            onChange={handleChange("password")}
                            label="密码"
                            helperText={!status.password? "请输入正确的密码": " "}
                        />
                    </div>
                    <div className={'dialog-buttons'}>
                        <Button variant="outlined" onClick={handleSignIn} >
                            {status.requestPending && !status.signInSuccess ? <div><LoadingOutlined/>提交中</div> :
                            status.signInSuccess ? <div><CheckOutlined/>登陆成功</div> :
                            "确认提交"}
                        </Button>
                    </div>
                </div>
    </Dialog>
}

export default SignInPage
