import React, {useState, useEffect, useRef, createRef} from 'react';
import CodeEditor, {ForwardChild} from "./CodeEditor";
import ProblemDescription from "./ProblemDescription";
import {Snackbar, Alert} from "@mui/material";
import { useNavigate } from "react-router-dom";

const ProblemPage = () => {
    const [code, setCode] = useState("");
    const navigate = useNavigate();
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClick = () => {
        setOpen(true);
        //post the code to judger
        console.log(code);
        setTimeout(()=>{
            console.log("跳转到判题页面中。。。");
            navigate("/judgingStatus");
        },2000);
    };
    const [open, setOpen] = useState(false)
    const problemPageRef = useRef()
    return (
        <div className={"problem-page"}>
            <Snackbar open={open}
                      autoHideDuration={3000}
                      onClose={handleClose}
                      anchorOrigin={{vertical: "bottom", horizontal: "right"}}
            >
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    你已成功提交，等待评测
                </Alert>
            </Snackbar>
            <div className={"problem-wrapper"}>
                <ProblemDescription/>
                {/*<CodeEditor/>*/}
                <ForwardChild ref={problemPageRef} setCode={setCode}/>
            </div>

            <div className={"submit-button-wrapper"}>
                <button> 题目列表 </button>
                <button onClick={handleClick}> 提交代码 </button>
            </div>
        </div>
    );
}

export default ProblemPage;
