import axios from 'axios'

const token = typeof window !== "undefined" ? (localStorage.getItem('userToken') || null) : null

const instance = axios.create({
    baseURL: 'https://api.screenlink.ru',
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
    }})

if(token){
    instance.defaults.headers.common['Authorization'] = 'Bearer ' + token;
}

instance.interceptors.response.use(function (response) {
    return response;
}, function (error) {
    if (401 === error.response.status) {
        // localStorage.removeItem('userToken')
        // window.location.pathname = "/";
        // swal({
        //     title: "Session Expired",
        //     text: "Your session has expired. Would you like to be redirected to the login page?",
        //     type: "warning",
        //     showCancelButton: true,
        //     confirmButtonColor: "#DD6B55",
        //     confirmButtonText: "Yes",
        //     closeOnConfirm: false
        // }, function(){
        //     window.location = '/login';
        // });
    } else {
        return Promise.reject(error);
    }
});
export default instance
