import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


function createData(
    name: string,
    calories: number,
    fat: number,
    carbs: number,
    protein: number,
) {
    return { name, calories, fat, carbs, protein };
}

const columns = [
    { field: 'id', headerName: '提交编号', width: 100 },
    { field: 'problemId', headerName: '问题ID', width: 100 },
    { field: 'name', headerName: '用户', width: 130 },
    { field: 'result', headerName: '结果', width: 100 },
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

const rows=temprows;

export default function JudgingStatus() {
    return (
        <div style={{ height: 800, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
            />
        </div>
    );
}
