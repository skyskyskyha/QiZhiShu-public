import React from 'react';
import '../assets/style/CoursePage.scss'
import CourseNavMenu from "./Course/CourseNavMenu";
import Button from "./Button";
import CourseDisplay from "./Course/CourseDisplay";
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
            <div className={'course-banner'}>
                <div className={'flex-all-center banner-container'}>
                    <h2> 课程中心 </h2>
                    <h3> Elit, sed do eiusmod tempor incididunt </h3>
                    <p> Vector illustration Freepik. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus.</p>
                    <div className={'banner-button-container'}>
                        <Button> 了解详情 </Button>
                        <Button highlight> 联系我们 </Button>
                    </div>
                </div>
            </div>
            <CourseNavMenu options={options}/>
            <CourseDisplay/>
        </div>
    );
}

export default CoursePage;
