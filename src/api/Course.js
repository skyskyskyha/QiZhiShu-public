
import request from "./request";

export const getCourseDetail = (id) => {
    return request({
        url: `/class/detail/${id}`,
        method: 'get'
    })
}

