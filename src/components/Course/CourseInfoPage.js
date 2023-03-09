import React, {useState, useEffect} from 'react';
import {useParams} from "react-router-dom";
import '../../assets/style/CourseInfoPage.scss'
import CourseOverview from "./CourseOverview";
import CourseRanking from "./CourseRanking";
import {Tabs, Tab} from "@mui/material"
import CourseContent from "./CourseContent";
import PracticeIndex from "./PracticeIndex";
import JudgingStatus from "./JudgingStatus";
import {getCourseDetail} from "../../api/Course";

const TabPanel = (props) => {
    const {children, option, index, ...other} = props
    return (<div hidden={option !== index}>
        {children}
    </div>)
}

const CourseInfoPage = (props) => {
    const [option, setOption] = useState(0)
    const [state, setState] = useState({
    })
    const id = useParams().id

    useEffect(() => {
        getCourseDetail(id)
            .then(data => {
                const info = data.data.ClassInfo
                setState({
                    name: info.ClassName,
                    desc: info.Description,
                    teachers: info.TeacherInfo,
                    id,
                    owner: info.Owner,
                    maxStudent: info.MaxStudent,
                    difficulty: "L1"
                })
            })
    }, [])
    const handleTabChange = (e, newOption) => {
        setOption(newOption)
    }
    return (
        <div className={"course-wrap flex-all-center course-info"}>
            <section className={'course-info-sidebar flex-all-center'}>
                <CourseOverview finished={64}
                                total={114}
                                info={state}
                />
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
                    <TabPanel option={option} index={0}><CourseContent/></TabPanel>
                    <TabPanel option={option} index={1}><PracticeIndex/></TabPanel>
                    <TabPanel option={option} index={2}><JudgingStatus/></TabPanel>
                    <TabPanel option={option} index={3}>4</TabPanel>
                </div>
            </section>
        </div>
    );
}

export default CourseInfoPage;
