import request from "./request";

export const registerUser = (prop) => {
    return request({
        url: `/user/RegisterUser`,
        method: 'post',
        data: prop
    })

}
export const signInUser = (prop) => {
    return request({
        url: `/user/UserLogin`,
        method: 'post',
        data: prop
    })
}

export const getUserInfo = (prop) => {
    return request({
        url: `/user/${prop.id}`,
        method: 'get',
        data: prop
    })
}
