import React from "react";

import { Dialog, Button } from "@mui/material";
import "../assets/style/SignInSignUp.scss"
import { raiseError, resolveError } from '../redux/ErrorSlice';
import { useSelector, useDispatch } from 'react-redux';
import { cssClass } from "ace-builds/src-noconflict/theme-monokai";

export default function ErrorPage(props) {
    const errorStatus = useSelector(state => state.ErrorStatus)
    const dispatch = useDispatch()

    const closeErrorPage = () => {
        dispatch(resolveError())
    }
    return (
        <Dialog open={errorStatus.errorOccured} onClose={() => {dispatch(resolveError())}}>
            <div className={'sign-in-dialog'}>
                <h2> Error: {errorStatus.errorType} </h2>
                <p> 发生错误，见到该页面可能意味着服务器暂时出现故障，你可以刷新后重新提交表单。此外，该对话框很可能意味着当前按钮并不是可交互的按钮，开发者比较懒，有一定几率在后续版本中完善，别骂了 </p>
                <Button variant="outlined" onClick={closeErrorPage}>
                    I understand
                </Button>
                <Button variant="outlined" onClick={closeErrorPage} style={{marginLeft: "50px"}}>
                    我明白
                </Button>
            </div>
        </Dialog>
    )
}