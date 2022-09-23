import React, {useState} from 'react'
import {Dialog, TextField, Button, Tooltip} from '@mui/material';
import {WechatOutlined} from '@ant-design/icons'
import "../assets/style/SignInSignUp.scss"
const SignUpPage = (props) => {

    const [value, setValue] = useState({
        phoneNumber: "",
        password: ""
    })
    const [status, setStatus] = useState({
        phoneNumber: true,
        password: true
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
    const handleSignUp = () => {
        if (!value.phoneNumber) {
            changeStatus('phoneNumber', false)
        }
        
    }
    
    return <Dialog open={props.open} onClose={props.handleClose}>
                <div className={'sign-in-dialog'}>
                    <h2>登录</h2>
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
                            使用账号密码登录
                        </p>
                        <span>
                        新用户？<a>注册</a>
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
                            error={status.password === 'error'}
                            onChange={handleChange("password")}
                            label="密码"
                        />
                    </div>
                    <div className={'dialog-buttons'}>
                        <Button variant="outlined" onClick={handleSignUp}>
                            登录
                        </Button>
                    </div>
                </div>

    </Dialog>
}

export default SignUpPage