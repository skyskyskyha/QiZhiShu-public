import React from 'react';
import {AccessTime, InsightsRounded} from "@mui/icons-material";
import {LinearProgress} from "@mui/material";

const CourseOverview = (props) => {
    return (
        <div className={'course-info-sidecard'}>
          <h4> {props.info.name} </h4>
          <div>
            <InsightsRounded color={'secondary'} sx={{
              height: "18px",
              width: "18px"
            }}/><span className={'sidecard-desc'}> <b>难度等级: </b> {props.info.difficulty}</span>
          </div>

          <div>
            <AccessTime color={'primary'} sx={{
              height: "18px",
              width: "18px"
            }}/><span className={'sidecard-desc'}> <b>完成进度: </b> {props.finished} / {props.total} </span>
            <LinearProgress variant="determinate" value={props.finished * 100 / props.total} sx={{
              height: "7px",
              marginTop: "10px",
              borderRadius: "50px"
            }}/>
          </div>
        </div>
    );
}

export default CourseOverview;
