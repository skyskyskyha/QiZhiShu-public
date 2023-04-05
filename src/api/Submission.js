import request from "./request";

export const SubmitProblem = (prop) => {
    return request({
        url: `/problem/submit`,
        method: 'post',
        data: prop
    })
}

export const getSubmissionListById = (id) => {
    return request({
        url: `/problem/SubmissionList?UserID=${id}`,
        method: 'get',
    })
}
