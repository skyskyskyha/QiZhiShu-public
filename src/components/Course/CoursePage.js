import React, {useEffect} from 'react';
import '../../assets/style/CoursePage.scss'
import CourseNavMenu from "./CourseNavMenu";
import Button from "../Button";
import CourseDisplay from "./CourseDisplay";
import {Routes, Route} from "react-router-dom";
import axios from 'axios'
const options = [
    {
        name: 'C++',
        path: "/cpp"
    },
    {
        name: "Scratch",
        path: "/scratch"
    },
    {
        name: "Python",
        path: "/python"
    }
]

const CoursePage = () => {

    return (
        <div className={"course-wrap flex-all-center"}>
            <CourseNavMenu options={options}/>
            <CourseDisplay/>
        </div>
    );
}

export default CoursePage;
