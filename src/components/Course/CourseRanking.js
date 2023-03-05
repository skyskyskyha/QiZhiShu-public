import React from 'react';
import {CircularProgress} from "@mui/material";


const CourseRanking = () => {
    return (
        <div className={'course-info-sidecard'}>
            <h4>排位等级</h4>
            <div className={'sidecard-row'}>
                <img src={require('../../assets/img/ranking-0.png')} alt=""/>
                <div>
                    <span className={'ranking-desc'}> <strong>114</strong> / 514 </span>
                    <CircularProgress value={70} variant={"determinate"} className={'ranking-svg'}/>
                </div>

            </div>

        </div>
    );
}

export default CourseRanking;
