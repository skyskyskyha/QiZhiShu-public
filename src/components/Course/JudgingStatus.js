import * as React from 'react';
import {useEffect, useState} from 'react';
import {DataGrid, GridCellParams} from '@mui/x-data-grid';
import clsx from "clsx";
import {GetTokenData} from "../../util";
import {getSubmissionListById} from "../../api/Submission";


const columns = [
    { field: 'id', headerName: '提交编号', width: 100 },
    { field: 'problemId', headerName: '问题ID', width: 100},
    { field: 'name', headerName: '用户', width: 130 },
    { field: 'result', headerName: '结果', width: 100,
        cellClassName: (params: GridCellParams<number>) =>
            clsx('super-app', {
                correct: params.value === "答案正确" || params.value === "正确",
                incorrect: params.value !== "答案正确" && params.value !== "正确"
            }),
    },
    { field: 'score', headerName: '得分', width: 100 },
    { field: 'memory', headerName: '内存(KB)', width: 100 },
    { field: 'time', headerName: '耗时(MS)', width: 100 },
    { field: 'language', headerName: '语言', width: 100 },
    { field: 'codeLength', headerName: '代码长度', width: 100 },
    { field: 'submitTime', headerName: '提交时间', width: 200 },
    { field: 'judger', headerName: '判题机', width: 100 },
]

const temprows = [
    {id: 1668906, problemId: 9915, name: "张三", result:"答案正确",
        score:100, memory:14095,time:14,language:"Python",codeLength:40,submitTime:"2023-03-07 19:01:38",judger:"judger1"},
    {id: 3364916, problemId: 9925, name: "李四", result:"答案正确",
        score:100, memory:195,time:30,language:"Java",codeLength:330,submitTime:"2023-03-09 09:00:00",judger:"judger1"},
    {id: 4854906, problemId: 101, name: "王五", result:"答案错误",
        score:5, memory:12015,time:44,language:"C++",codeLength:550,submitTime:"2023-03-07 19:01:38",judger:"judger1"},
    {id: 1668908, problemId: 9915, name: "张三", result:"答案错误",
        score:0, memory:14095,time:14,language:"Python",codeLength:30,submitTime:"2023-03-07 18:01:38",judger:"judger1"},
];



function switchDataToRows(data) {
    /*
    BackendID:2977
    ContestID:null
    CreateTime:"2023-04-03T01:42:43.000Z"
    ExecutionTime:"4 ms"
    ID:8
    LastPing:"2023-04-04 5:40:27"
    Memory:"1304 KB"
    Platform:"caoweninfo"
    ProblemID:1
    ProblemName:"【基本语句】C语言程序设计教程（第三版）课后习题1.5"
    ProgrammingLanguage:"C++"
    Score:"0"
    SubmissionStatus:"答案错误"
    UserID:19
    UserName:"sky"

     */
    let result = data.map((item)=>({
        id:item.ID,
        problemId: item.ProblemID,
        name: item.UserName,
        result: item.SubmissionStatus,
        score: item.Score,
        memory: item.Memory,
        time: item.ExecutionTime,
        language: item.ProgrammingLanguage,
        codeLength: "N/A",
        submitTime: item.CreateTime,
        judger: "N/A",
    }))
    return result
}

export default function JudgingStatus() {
    const [rows, setRows] = useState({})
    useEffect(() => {
        GetTokenData()
            .then(data => {
                const id = data.Id
                return getSubmissionListById(id)
            }).then(data=>{
                setRows(switchDataToRows(data.data))
        })
    }, [])

    return (
        <div style={{ height: 800, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                sx={{
                    width: '100%',
                    '& .super-app-theme--cell': {
                        backgroundColor: 'rgba(224, 183, 60, 0.55)',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .super-app.correct': {
                        backgroundColor: 'rgba(157, 255, 118, 0.49)',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .super-app.incorrect': {
                        backgroundColor: '#d47483',
                        color: '#1a3e72',
                        fontWeight: '600',
                    },
                    '& .MuiDataGrid-cell:hover': {
                        color: "blueviolet",
                    }
                }}
            />
        </div>
    );
}
