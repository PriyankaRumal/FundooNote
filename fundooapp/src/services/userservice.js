import axios from 'axios'
export const SignInApi = (data) => {
    console.log("before")
    const response = axios.post('https://localhost:44335/api/User/UserLogin',data)
    console.log("after")
    return response
}
export const SignUpApi = (data1) => {
    console.log("before")
    const response = axios.post('https://localhost:44335/api/User/UserRegistration',data1)
    console.log("after")
    return response
}