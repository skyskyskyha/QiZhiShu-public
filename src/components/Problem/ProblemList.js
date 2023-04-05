import * as React from 'react';
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {useEffect} from "react";

export default function ProblemList() {
    const problemNum = 326;
    const problemPerPage = 20;
    const [page, setPage] = React.useState(1);
    const [problems, setProblems] = React.useState([]);
    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPage(value);
        setProblems(()=>{
            const res = []
            for (let i=1;i<=problemPerPage;i++) {
                if ((page - 1) * problemPerPage + i>problemNum)
                    break;
                res.push((page - 1) * problemPerPage + i)
            }
            return res
        });
    };
    useEffect(()=>{

    },[page])
    return (
        <div>
            <Stack spacing={2}>
                <Typography>Page: {page}</Typography>
                <Pagination count={Math.ceil(problemNum/problemPerPage)} page={page} onChange={handleChange} />
            </Stack>
        </div>
    );
}
