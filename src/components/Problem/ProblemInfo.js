import * as React from "react";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
    { field: 'id', headerName: '题目编号', width: 100 ,
        // renderCell: (params) => {
        //     return <a href='${params.id}'>${params.id}</a>
        // }
    },

    {  field: 'title',
        headerName: '标题',
        renderCell: (params) => {
        return <a href={`problem/${params.id}`}>{params.formattedValue.toString()}</a>
        },
        width: 1500
    },
    { field: 'tags', headerName: '分类', width: 300},
]

export const ProblemInfo = (prop)=> {

    return (
        <div style={{ height: 800, width: '100%' }}>
            <DataGrid
                rows={prop.problems}
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
                    '& .MuiDataGrid-cell:hover': {
                        color: "blueviolet",
                    }
                }}
            />
        </div>
    );
}
