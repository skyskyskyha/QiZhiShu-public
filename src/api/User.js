import request from "./request";

export const registerUser = (prop) => {
    return request({
        url: `/user/RegisterUser`,
        method: 'post',
        data: prop
    })

}