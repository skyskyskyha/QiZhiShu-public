import React, {useEffect, useState} from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import {getCourseDetail} from "../../api/Course";
import {useNavigate} from "react-router-dom";

const DisplayCard = (props) => {



    const [state, setState] = useState({
        name: "",
        desc: "",
        id: "",
        maxStudent: 0,
        teachers: [],

    })
    const navigate = useNavigate()

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
    return (
        <div className={'display-card-main'} onClick={() => {
            navigate('/course/info/' + props.courseId)
        }}>
            <div className={'display-card-preview'}
                 style={{backgroundImage: `url('${'https://coursera_assets.s3.amazonaws.com/images/d62bf424793de088e2a09ff1ce4519ad.jpg'}')`}}>
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
