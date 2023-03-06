import React from 'react';
import {Typography, Accordion, AccordionSummary, FormControlLabel} from "@mui/material";
import {} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import "../../assets/style/CourseContent.scss"
import Stepper from "./CourseCodingProgress"
import IOSSwitch from "../IOSSwitch";
import {NavLink} from "react-router-dom";
import {getProblemInfo} from "../../api/Course";
import problemInfo from "../../static/problemInfo.json"


const SingleCourse = (props) => {
    const [expanded, setExpanded] = React.useState([]);
    const handleChange = (panel) => (event, newExpanded) => {
        setExpanded(newExpanded ? panel : false);
    };
    return (
        <section className={"course-content-wrapper"}>
            <Accordion expanded={expanded === 0} onChange={handleChange(0)}>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1bh-content"
                    id="panel1bh-header"
                    sx={{backgroundColor: "#f3f3f3"}}
                >
                    <Typography sx={{ width: '33%', flexShrink: 0 }}>
                        {props.title}
                    </Typography>
                    <ul className={"course-content-interact"}>
                        <FormControlLabel
                            onClick={e => e.stopPropagation()}
                            control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
                            label="开启课程"
                        />
                        <li style={{backgroundColor: "#0703FC"}}>课件PPT</li>
                        <li style={{backgroundColor: "mediumpurple"}}>章节排名</li>
                        <li style={{backgroundColor: "violet"}}>在线编程</li>
                    </ul>
                </AccordionSummary>
                <ul className={'accordion-detail'}>
                    {
                        props.courses.map(course => <li key={course.name}>
                            <NavLink to={`/problem/${course.problemId}`}>
                                {problemInfo[course.problemId].title}
                            </NavLink>
                            <Stepper step={course.step}/>
                        </li>)
                    }
                </ul>
            </Accordion>
        </section>
    );
}

export default SingleCourse;
