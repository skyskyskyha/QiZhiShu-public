import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';

const getClass = (str) => {
    switch (str){
        case "永恒钻石":
            return 10000;
        case "尊贵铂金":
            return 1000;
        case "荣耀黄金":
            return 100;
        case "秩序白银":
            return 10;
        case "不屈青铜":
            return 1;
        default:
            return 0;
    }
}

const classComparator = (s1,s2)=>{
    const class1 = getClass(s1);
    const class2 = getClass(s2);
    return class1-class2;
}

const columns = [
    { field: 'id', headerName: '排名', width: 100 },
    { field: 'class', headerName: '段位', width: 130, sortComparator: classComparator},
    { field: 'name', headerName: '真实姓名', width: 130 },
    { field: 'submitTimes', headerName: '提交次数', width: 130,},
    { field: 'lastSubmitTime', headerName: '最后提交时间', width: 200 },
    { field: 'score', headerName: '积分', width: 100 },
]

const temprows = [
    {id: 1, class: "尊贵铂金", name: "张三", submitTimes:100, lastSubmitTime:"2023-03-07 19:01:38", score:200,},
    {id: 2, class: "荣耀黄金", name: "李四", submitTimes:120, lastSubmitTime:"2023-01-07 19:01:38", score:100,},
    {id: 3, class: "秩序白银", name: "王五", submitTimes:30, lastSubmitTime:"2022-03-07 19:01:38", score:50,},
    {id: 4, class: "倔强青铜", name: "昴六", submitTimes:10, lastSubmitTime:"2021-03-07 19:01:38", score:10,},
];

const rows=temprows;

export default function RankingPage() {
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
