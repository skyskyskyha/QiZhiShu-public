import React, {useEffect, useState} from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import {getCourseDetail} from "../../api/Course";
import {useNavigate} from "react-router-dom";
import competitionExample from "../../assets/img/competitionExample.jpg"


const CompetitionDisplayCard = (props) => {

    const [state, setState] = useState({
        competitionName: "这是一个比赛",
        competitionTime: "2023-03-03 19:00:00",
        entryFee: 100,
        titlePicture:"",
        competitionImage: competitionExample,
        competitionLink: "https://www.qizhishu.com/codeadmin/front/clientbs/detail.zhtml?ID=2522"
    })
    const navigate = useNavigate()
    {/*
    useEffect(() => {
        getCourseDetail(props.courseId)
            .then(data => {
                const info = data.data.ClassInfo
                setState({
                    name: info.ClassName,
                    desc: info.Description,
                    id: info.ID,
                    maxStudent: info.MaxStudent,
                    teachers: info.TeacherInfo
                })
            })
            .catch(err => {})
    }, [])
    */}
    return (
        <div className={'display-card-main'} onClick={() => {
            // eslint-disable-next-line no-restricted-globals
            window.open(state.competitionLink)
        }}>
            <div className={'display-card-preview'}>
                <img src={state.competitionImage} style={{width:"100%",height:"100%"}}/>
            </div>
            <div className={'display-card-content'}>
                <h4> {state.competitionName} </h4>
                <p className={'ellipse-2'}>
                    <span><b>比赛时间: </b></span>
                    {state.competitionTime}
                </p>
                <div className={'display-card-detail'}>


                </div>

            </div>
        </div>
    );
}

export default CompetitionDisplayCard;
