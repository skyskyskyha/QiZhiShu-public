import {Dialog} from "@mui/material";
import {getUserInfo} from "../../api/User";
import {useEffect, useState} from "react";
import {GetTokenData} from "../../util";
import {useDispatch, useSelector} from "react-redux";

const UserProfilePage = (props)=>{
    let user_id = 1;
    let dispatch = useDispatch()
    const signInStatus = useSelector(state => state.SignInStatus)
    const [userInfo, setUserInfo] = useState(
        {
            userName: "",
            mobile: 0,
            birthday: new Date(),
        }
    );

    useEffect(()=>{
        GetTokenData()
            .then((data)=>{
                user_id = data.Id
            })
            .then(()=> {
                getUserInfo({
                    id: user_id
                }).then(res => {
                    let data = res.data;
                    console.log(data)
                    if (data !== undefined)
                        setUserInfo({
                            userName: data.UserName,
                            mobile: data.Mobile,
                            birthday: data.Birthday.substr(0, 10),
                        })
                })
            })
            .catch((e)=>{

            })
    },[user_id, signInStatus])

    return <Dialog open={props.open} onClose={props.handleClose}>
        <div style={{width: "500px", height: "600px"}}>
            <h1>用户信息</h1>
            <h2>用户名：{userInfo&&userInfo.userName}</h2>
            <h2>电话：{userInfo&&userInfo.mobile}</h2>
            <h2>生日：{userInfo&&userInfo.birthday}</h2>
        </div>
    </Dialog>
}

export default UserProfilePage
