import {USER_INFO} from "./constant";

export const GetTokenData = async () => {
    const jwt = localStorage.getItem("token");
    if (!jwt)
        return
    const jwtParts = jwt.split(".");
    const header = JSON.parse(atob(jwtParts[0]));
    const payload = JSON.parse(atob(jwtParts[1]));
    return payload
};

export const SaveUserInfo = (user_info) => {
    if (typeof user_info === "object")
        user_info = JSON.stringify(user_info)
    localStorage.setItem(USER_INFO, user_info)
}

export const GetUserInfo = () => {
    return JSON.parse(localStorage.getItem(USER_INFO)||'{}')
}

export const DeleteUserInfo = () => {
    localStorage.removeItem(USER_INFO)
}
