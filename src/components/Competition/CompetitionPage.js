import React, {useEffect} from 'react';
import '../../assets/style/CoursePage.scss'
import CompetitionDisplay from "./CompetitionDisplay";
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

const CompetitionPage = () => {

    return (
        <div className={"course-wrap flex-all-center"}>
            <CompetitionDisplay/>
        </div>
    );
}

export default CompetitionPage;
