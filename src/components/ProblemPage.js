import React, {useState} from 'react';
import CodeEditor from "./CodeEditor";
import ProblemDescription from "./Course/ProblemDescription";
import {Snackbar, Alert} from "@mui/material";


const ProblemPage = () => {
    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setOpen(false);
    };
    const handleClick = () => {
        setOpen(true);
    };
    const [open, setOpen] = useState(false)
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
                <CodeEditor/>
            </div>

            <div className={"submit-button-wrapper"}>
                <button> 题目列表 </button>
                <button onClick={handleClick}> 提交代码 </button>
            </div>
        </div>
    );
}

export default ProblemPage;
