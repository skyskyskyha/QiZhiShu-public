import React from 'react';
import {} from "@mui/material";
import "../../assets/style/CourseContent.scss"
import SingleCourse from "./SingleCourse";

const testCourse1 = {
    title: "第一课",
    problems: [
        {
            name: "1068 拼接",
            step: 2,
            problemId: 1,
        },
        {
            name: "1069 傻瓜电梯",
            step: 0,
            problemId: 2,
        },
        {
            name: "认识python",
            step: 1,
            problemId: 3,
        }]
}

const testCourse2 = {
    title: "第二课",
    problems: [
        {
            name: "1068 拼接",
            step: 2,
            problemId: 4,
        },
        {
            name: "认识python",
            step: 1,
            problemId: 5,
        }]
}

const testCourses = [testCourse1, testCourse2]

const CourseContent = () => {
    return (
        <div>
            {
                testCourses.map((singleCourse) =>
                   <SingleCourse title={singleCourse.title} courses={singleCourse.problems}/>
                )
            }
        </div>
    );
}

export default CourseContent;
