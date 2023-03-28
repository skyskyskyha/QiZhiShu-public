import {Dialog} from "@mui/material";
import {getUserInfo} from "../../api/User";
import {useState} from "react";
const UserProfilePage = (props)=>{
    let user_id = 1;
    const [userInfo, setUserInfo] = useState();
    // getUserInfo({
    //     id: user_id
    // }).then(res=>{
    //     let data = res.data;
    //     setUserInfo({
    //         userName: data.userName,
    //         mobile: data.mobile,
    //         birthday: data.Birthday,
    //     })
    // })
    return <Dialog open={props.open} onClose={props.handleClose}>
        <div style={{width:"500px",height:"600px"}}>
            <h1>用户信息</h1>
            <h2>用户名：</h2>
            <h2>电话：</h2>
            <h2>生日：</h2>
        </div>
    </Dialog>
}

export default UserProfilePage
