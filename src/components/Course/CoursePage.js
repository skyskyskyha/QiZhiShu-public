import React from 'react';
import '../../assets/style/CoursePage.scss'
import CourseNavMenu from "./CourseNavMenu";
import CourseDisplay from "./CourseDisplay";

// eslint-disable-next-line no-unused-vars
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
            {/*<CourseNavMenu options={options}/>*/}
            <CourseDisplay/>
        </div>
    );
}

export default CoursePage;
