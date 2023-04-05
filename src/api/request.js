import axios from 'axios'
import qs from 'qs'
import {Base64} from 'js-base64'


const request = (config) => {
    const axiosInstance = axios.create({

    })

    function _encode(){
        const token = localStorage.getItem("token")
        const encoded = Base64.encode(`${token}:`)
        return `Basic ${encoded}`
    }

    axiosInstance.interceptors.request.use(config => {
        axios.defaults.headers.post['Content-Type'] = 'application/json';
        if (config.method === 'post') {
            // console.log(config.data)
            // config.data = JSON.stringify(config.data)
            // console.log(config.data)
        }
        return config
    }, error => {})

    return axiosInstance(config)

}
export default request
