import React, {useEffect} from 'react';
import {Pagination} from "@mui/material";
import {Tabs} from "@mui/material";
import {Tab} from "@mui/material";
import DisplayCard from "./DisplayCard";
import {SUM_COURSE} from "../../constant";


const coursePerPage = 6

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    const [page, setPage] = React.useState(1)
    const [courseIds, setCourseIds] = React.useState([])
    const handleChange =(event, value)=>{
        setPage(value)
    }
    useEffect(()=>{
        const tmpCourseIds = []
        for (let i=0;i<coursePerPage;i++) {
            tmpCourseIds[i] = coursePerPage * (page - 1) + i + 1;
            if (tmpCourseIds[i]>SUM_COURSE)
                tmpCourseIds[i]=0
        }
            setCourseIds(tmpCourseIds)
        },
        [page])

    return (
        <div
            role="tabpanel"
            id={`simple-tabpanel-${index}`}
            {...other}
        >
            <ul className={'course-display-ul'}>
                {courseIds.map((id,index) =>
                    <li key={index}><DisplayCard courseId={id<=SUM_COURSE?id:0}/></li>)}
            </ul>
            <Pagination count={Math.ceil(SUM_COURSE / coursePerPage)} onChange={handleChange}/>
        </div>
    );
}


const CourseDisplay = () => {
    const [value, setValue] = React.useState(0)

    const handleChange = (e, newValue) => {
        setValue(newValue)
    }
    return (
        <div className={'card-display-main'}>
            {/*<ul className={'card-display-wrap'}>*/}
            {/*    <li>Yes</li>*/}

            {/*</ul>*/}
            <Tabs value={value} onChange={handleChange}>
                <Tab label="全部课程"/>
                {/*<Tab label="正在开课"/>*/}
                {/*<Tab label="已结束"/>*/}
            </Tabs>
            <TabPanel value={value} index={0} className={"course-display-tab-panel flex-all-center"}>
            </TabPanel>
            {/*<TabPanel value={value} index={1}>*/}
            {/*    <Pagination count={11}></Pagination>*/}
            {/*</TabPanel>*/}
            {/*<TabPanel value={value} index={2}>*/}
            {/*    <Pagination count={12}></Pagination>*/}
            {/*</TabPanel>*/}
        </div>
    );
}

export default CourseDisplay;
