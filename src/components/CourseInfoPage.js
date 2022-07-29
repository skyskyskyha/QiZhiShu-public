import React, {useState} from 'react';
import {useParams} from "react-router-dom";
import '../assets/style/CourseInfoPage.scss'
import CourseOverview from "./Course/CourseOverview";
import CourseRanking from "./Course/CourseRanking";
import Tabs from "@mui/material/Tabs"
import Tab from "@mui/material/Tab"

const TabPanel = (props) => {
    const {children, option, index, ...other} = props
    return (<div hidden={option !== index}>
        {children}
    </div>)
}

const CourseInfoPage = (props) => {
    const [option, setOption] = useState(0)

    const handleTabChange = (e, newOption) => {
        setOption(newOption)
    }
    return (
        <div className={"course-wrap flex-all-center course-info"}>
            <section className={'course-info-sidebar flex-all-center'}>
                <CourseOverview finished={64} total={114}/>
                <CourseRanking/>
            </section>
            <section className={'course-info-main flex-all-center'}>
                <div className={'course-info-main-card'}>
                    <Tabs value={option} onChange={handleTabChange} textColor={"secondary"} indicatorColor={"secondary"}>
                        <Tab label={"课程内容"}></Tab>
                        <Tab label={"练习指标"}></Tab>
                        <Tab label={"判题状态"}></Tab>
                        <Tab label={"排位"}></Tab>
                    </Tabs>
                    <TabPanel option={option} index={0}>1</TabPanel>
                    <TabPanel option={option} index={1}>2</TabPanel>
                    <TabPanel option={option} index={2}>3</TabPanel>
                    <TabPanel option={option} index={3}>4</TabPanel>
                </div>
            </section>
        </div>
    );
}

export default CourseInfoPage;
