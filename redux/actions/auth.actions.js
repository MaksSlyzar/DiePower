import axios from './../axios.config'

export const AUTH_REQUEST = 'AUTH_REQUEST'
export const AUTH_ERROR = 'AUTH_ERROR'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_UP = 'SIGN_UP'
export const LOG_OUT = 'LOG_OUT'
export const SET_TOKEN = 'SET_TOKEN'

export const signIn = (credentials) => async(dispatch) => {
    try{
        dispatch({type: AUTH_REQUEST})
        await axios.get('/sanctum/csrf-cookie')
        const {data} = await axios.post('/api/auth/login', credentials)
        const {token} = data
        if (typeof window !== "undefined") {
            localStorage.setItem('userToken', token)
        }
        dispatch({type: SIGN_IN, payload: token})
    }catch (e) {
        dispatch({type: AUTH_ERROR})
    }
}

export const signUp = (credentials) => async(dispatch) => {
    try{
        dispatch({type: AUTH_REQUEST})
        const {data} = await axios.post('/api/auth/register', credentials)
        const {token} = data
        if (typeof window !== "undefined") {
            localStorage.setItem('userToken', token)
        }
        dispatch({type: SIGN_UP, payload: token})
    }catch (e) {
        dispatch({type: AUTH_ERROR})
    }
}

export const logOut = () => {
    if (typeof window !== "undefined") {
        localStorage.removeItem('userToken')
    }
    return {
        type: LOG_OUT
    }
}

export const setToken = () => {
    const token = typeof window !== "undefined" ? (localStorage.getItem('userToken') || null) : null
    return {type: SET_TOKEN, payload: token}
}
