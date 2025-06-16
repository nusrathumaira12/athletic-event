import axios from "axios";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:3000',
    withCredentials: true,
})

axiosSecure.interceptors.response.use(
    response => response,
    error => {
        const status = error?.response?.status;

        if(status === 401 || status === 403){
            Swal.fire({
               icon: 'warning' ,
               title: 'Unauthorized Access',
               text: 'Session expired or you are not allowed to do this action.',
            })
        }
        return Promise.reject(error)
    }

)
export default axiosSecure;