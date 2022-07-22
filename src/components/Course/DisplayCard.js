import React from 'react';
import AddTaskIcon from '@mui/icons-material/AddTask';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
const DisplayCard = () => {
    return (
        <div className={'display-card-main'}>
            <div className={'display-card-preview'}
                 style={{backgroundImage: `url('${'https://coursera_assets.s3.amazonaws.com/images/d62bf424793de088e2a09ff1ce4519ad.jpg'}')`}}>
            </div>
            <div className={'display-card-content'}>
                <h4> scratch图形化编程L1 </h4>
                <p className={'ellipse-2'}>
                    <span><b>服务: </b></span>
                    互动直播 / 精选视频 / 及时答疑 / 随时回看
                </p>
                <div className={'display-card-detail'}>
                    <span><AddTaskIcon color="success" size="small"></AddTaskIcon> 人数14/20 </span>
                    <span><LiveHelpOutlinedIcon color="primary" size="small"></LiveHelpOutlinedIcon> 周二周四16:00-17:30(12次课） </span>

                </div>

            </div>
        </div>
    );
}
export default DisplayCard;
