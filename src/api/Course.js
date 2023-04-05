
import request from "./request";

export const getCourseDetail = (id) => {
    return request({
        url: `/class/detail/${id}`,
        method: 'get'
    })
}

export const getProblemInfo = (id) => {
    return request({
        url: `/problem/problemInfo/${id}`,
        method: 'get'
    })
}


