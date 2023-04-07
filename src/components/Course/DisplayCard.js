import React, {useEffect, useState} from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import {getCourseDetail} from "../../api/Course";
import {useNavigate} from "react-router-dom";
import {SUM_COURSE} from "../../constant";
import forbidden from '../../assets/img/forbidden.png'

const DisplayCard = (props) => {

    let backgroundImage = "https://coursera_assets.s3.amazonaws.com/images/d62bf424793de088e2a09ff1ce4519ad.jpg"
    if (props.courseId===0||props.courseId>SUM_COURSE)
        backgroundImage = forbidden

    const [state, setState] = useState({
        name: "",
        desc: "",
        id: "",
        maxStudent: 0,
        teachers: [],
    })
    const navigate = useNavigate()

    useEffect(() => {
        (props.courseId>0&&props.courseId<=SUM_COURSE) && getCourseDetail(props.courseId)
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
    }, [props.courseId])
    return (
        <div className={'display-card-main'} onClick={() => {
            if (props.courseId>0 && props.courseId<=SUM_COURSE)
                navigate('/course/info/' + props.courseId)
        }}>
            <div className={'display-card-preview'}
                 style={{backgroundImage: `url('${backgroundImage}')`}}>
            </div>
            <div className={'display-card-content'}>
                <h4> {state.name} </h4>
                <p className={'ellipse-2'}>
                    <span><b>服务: </b></span>
                    {state.desc}
                </p>
                <div className={'display-card-detail'}>
                    <span><AddTaskIcon color="success" size="small"></AddTaskIcon> 人数{state.maxStudent} </span>
                    <span><LiveHelpOutlinedIcon color="primary" size="small"></LiveHelpOutlinedIcon> 周二周四16:00-17:30(12次课） </span>

                </div>

            </div>
        </div>
    );
}
export default DisplayCard;
