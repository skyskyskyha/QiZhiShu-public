import * as React from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';



const columns = [
    { field: 'id', headerName: '位次', width: 100 },
    { field: 'name', headerName: '姓名', width: 130 },
    { field: 'submits', headerName: '提交数', type:'number', width: 200 },
    { field: 'corrects', headerName: '正确数', type:'number', width: 200 },
    {
        field: 'fullName',
        headerName: '正确率',
        width: 160,
        sortable: false,
        valueGetter: (params: GridValueGetterParams) =>
            Number(params.row.corrects/params.row.submits*100).toFixed(2)+"%"
    },
]

const temprows = [
    {id: 1, name: "张三", submits:"100", corrects:"100"},
    {id: 2, name: "李四", submits:"100", corrects:"80"},
    {id: 3, name: "王五", submits:"10", corrects:"1"}
];

const rows=temprows;

export default function BasicTable() {
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
