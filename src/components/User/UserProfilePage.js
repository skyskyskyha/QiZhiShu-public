import {Dialog} from "@mui/material";
import {getUserInfo} from "../../api/User";
import {useEffect, useState} from "react";

const UserProfilePage = (props)=>{
    let user_id = 1;
    const [userInfo, setUserInfo] = useState(
        {
            userName: "",
            mobile: 0,
            birthday: new Date(),
        }
    );
    // useEffect(() => {
    //     getCourseDetail(id)
    //         .then(data => {
    useEffect(()=>{
        getUserInfo({
            id: user_id
        }).then(res=>{
            let data = res.data;
            if (data!==undefined)
                setUserInfo({
                    userName: data.UserName,
                    mobile: data.Mobile,
                    birthday: data.Birthday.substr(0,10),
                })
        })
    },[user_id])
    return <Dialog open={props.open} onClose={props.handleClose}>
        <div style={{width: "500px", height: "600px"}}>
            <h1>用户信息</h1>
            <h2>用户名：{userInfo.userName}</h2>
            <h2>电话：{userInfo.mobile}</h2>
            <h2>生日：{userInfo.birthday}</h2>
        </div>
    </Dialog>
}

export default UserProfilePage
