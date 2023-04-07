import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useEffect} from "react";
import {getProblemInfo} from "../../api/Course";
import {ProblemInfo} from "./ProblemInfo"
import {PROBLEM_PER_PAGE, SUM_PROBLEM} from "../../constant";


export default function ProblemList() {
    const [page, setPage] = React.useState(1);
    const [problems, setProblems] = React.useState([]);
    const handleChange = (e, value) => {
        setPage(value);
    };
    useEffect(()=>{
        const res = [], promises  = []
        for (let i=1;i<=PROBLEM_PER_PAGE;i++) {
            let id = (page - 1) * PROBLEM_PER_PAGE + i
            if (id>SUM_PROBLEM)
                break;
            promises[i-1] = getProblemInfo(id)
                .then(data=>{
                    res[i-1]={
                        id,
                        title: data.data.ProblemTitle,
                        tags: data.data.Tags
                    }
                })
        }
        Promise.all(promises).then(
            ()=>{
                setProblems(res)
            }
        )
    },[page])

    return (
        <div>
            <ProblemInfo problems={problems===undefined?[]:problems}/>
            <Stack spacing={2}>
                <Typography>第{page}页</Typography>
                <Pagination style={{margin:"auto"}} count={Math.ceil(SUM_PROBLEM/PROBLEM_PER_PAGE)} page={page} onChange={handleChange} />
            </Stack>
        </div>
    );
}
