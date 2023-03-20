import React from 'react';
import {} from "@mui/material";
import "../../assets/style/CourseContent.scss"
import SingleCourse from "./SingleCourse";
import {randomNumberBetween} from "@mui/x-data-grid/utils/utils";

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
// "LectureInfo": [
//     {
//         "ID": 1,
//         "LectureName": "第一节",
//         "CreateTime": "2022-08-16T00:00:00.000Z",
//         "OwnerID": 1,
//         "Slide": "string",
//         "Vedio": "string",
//         "Description": "string",
//         "Trainings": [
//             {
//                 "ID": 1,
//                 "ProblemTitle": "【基本语句】C语言程序设计教程（第三版）课后习题1.5",
//                 "Tags": "初级A",
//                 "AlgorithmTags": [],
//                 "Link": "https://www.caoweninfo.com/problem.php?id=1001",
//                 "OwnerID": 1,
//                 "Difficulty": 1,
//                 "CreateTime": "2022-11-30T00:00:00.000Z"
//             },
//             {
//                 "ID": 2,
//                 "ProblemTitle": "【选择语句】C语言程序设计教程（第三版）课后习题1.6",
//                 "Tags": "初级A",
//                 "AlgorithmTags": [],
//                 "Link": "https://www.caoweninfo.com/problem.php?id=1002",
//                 "OwnerID": 1,
//                 "Difficulty": 1,
//                 "CreateTime": "2022-11-30T00:00:00.000Z"
//             }
//         ],
//         "Owner": {
//             "ID": 1,
//             "UserName": "用户1",
//             "Avatar": "string"
//         }
//     },
//     {
//         "ID": 2,
//         "LectureName": "第2节",
//         "CreateTime": "2022-08-16T00:00:00.000Z",
//         "OwnerID": 1,
//         "Slide": "string",
//         "Vedio": "string",
//         "Description": "string",
//         "Trainings": [
//             {
//                 "ID": 1,
//                 "ProblemTitle": "【基本语句】C语言程序设计教程（第三版）课后习题1.5",
//                 "Tags": "初级A",
//                 "AlgorithmTags": [],
//                 "Link": "https://www.caoweninfo.com/problem.php?id=1001",
//                 "OwnerID": 1,
//                 "Difficulty": 1,
//                 "CreateTime": "2022-11-30T00:00:00.000Z"
//             },
//             {
//                 "ID": 2,
//                 "ProblemTitle": "【选择语句】C语言程序设计教程（第三版）课后习题1.6",
//                 "Tags": "初级A",
//                 "AlgorithmTags": [],
//                 "Link": "https://www.caoweninfo.com/problem.php?id=1002",
//                 "OwnerID": 1,
//                 "Difficulty": 1,
//                 "CreateTime": "2022-11-30T00:00:00.000Z"
//             }
//         ],
//         "Owner": {
//             "ID": 1,
//             "UserName": "用户1",
//             "Avatar": "string"
//         }
//     },
//     {
//         "ID": 3,
//         "LectureName": "第3节",
//         "CreateTime": "2022-08-16T00:00:00.000Z",
//         "OwnerID": 1,
//         "Slide": "string",
//         "Vedio": "string",
//         "Description": "string",
//         "Trainings": [
//             {
//                 "ID": 1,
//                 "ProblemTitle": "【基本语句】C语言程序设计教程（第三版）课后习题1.5",
//                 "Tags": "初级A",
//                 "AlgorithmTags": [],
//                 "Link": "https://www.caoweninfo.com/problem.php?id=1001",
//                 "OwnerID": 1,
//                 "Difficulty": 1,
//                 "CreateTime": "2022-11-30T00:00:00.000Z"
//             },
//             {
//                 "ID": 2,
//                 "ProblemTitle": "【选择语句】C语言程序设计教程（第三版）课后习题1.6",
//                 "Tags": "初级A",
//                 "AlgorithmTags": [],
//                 "Link": "https://www.caoweninfo.com/problem.php?id=1002",
//                 "OwnerID": 1,
//                 "Difficulty": 1,
//                 "CreateTime": "2022-11-30T00:00:00.000Z"
//             }
//         ],
//         "Owner": {
//             "ID": 1,
//             "UserName": "用户1",
//             "Avatar": "string"
//         }
//     },
//     {
//         "ID": 4,
//         "LectureName": "第4节",
//         "CreateTime": "2022-08-16T00:00:00.000Z",
//         "OwnerID": 1,
//         "Slide": "string",
//         "Vedio": "string",
//         "Description": "string",
//         "Trainings": [
//             {
//                 "ID": 1,
//                 "ProblemTitle": "【基本语句】C语言程序设计教程（第三版）课后习题1.5",
//                 "Tags": "初级A",
//                 "AlgorithmTags": [],
//                 "Link": "https://www.caoweninfo.com/problem.php?id=1001",
//                 "OwnerID": 1,
//                 "Difficulty": 1,
//                 "CreateTime": "2022-11-30T00:00:00.000Z"
//             },
//             {
//                 "ID": 2,
//                 "ProblemTitle": "【选择语句】C语言程序设计教程（第三版）课后习题1.6",
//                 "Tags": "初级A",
//                 "AlgorithmTags": [],
//                 "Link": "https://www.caoweninfo.com/problem.php?id=1002",
//                 "OwnerID": 1,
//                 "Difficulty": 1,
//                 "CreateTime": "2022-11-30T00:00:00.000Z"
//             }
//         ],
const CourseContent = (props) => {
    const lectureInfo = props.lectureInfo;
    let courses = [];
    if (lectureInfo!==undefined) {
        for (let i = 0; i < lectureInfo.length; i++) {
            let courseInfo =
                {
                    title: "",
                    problems: [],
                };
            courseInfo.title = lectureInfo[i].LectureName;
            let trainings = lectureInfo[i].Trainings;
            //console.log(trainings)
            for (let j = 0; j < trainings.length; j++)
                courseInfo.problems.push(
                    {
                        problemId: trainings[j].ID,
                        name: trainings[j].ProblemTitle,
                        step: 2,
                    }
                )
            courses.push(courseInfo)
        }
    }
    return (
        <div>
            {
                courses.map((singleCourse) =>
                   <SingleCourse title={singleCourse.title} courses={singleCourse.problems}/>
                )
            }
        </div>
    );
}

export default CourseContent;
