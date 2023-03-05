import axios from 'axios'
import qs from 'qs'

const request = (config) => {
    const axiosInstance = axios.create({

    })
    axiosInstance.interceptors.request.use(config => {
        if (config.method === 'post') {
            config.data = qs.stringify(config.data)
        }
        return config
    }, error => {})

    return axiosInstance(config)

}
export default request