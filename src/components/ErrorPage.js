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
                <p> 发生错误，请返回 </p>
                <Button variant="outlined" onClick={closeErrorPage} style={{marginLeft: "50px"}}>
                    返回
                </Button>
            </div>
        </Dialog>
    )
}
