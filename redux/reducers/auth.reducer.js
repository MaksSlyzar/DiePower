import {AUTH_ERROR, AUTH_REQUEST, LOG_OUT, SET_TOKEN, SIGN_IN, SIGN_UP} from "../actions/auth.actions";

const initialState = {
    loading: false,
    error: null
}

export const AuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case AUTH_REQUEST:
            return {...state, loading: true, error: null}
        case SIGN_IN:
            return {...state, loading: false, error: null, token: action.payload}
        case SIGN_UP:
            return {...state, loading: false, error: null, token: action.payload}
        case AUTH_ERROR:
            return {...state, loading: false, error: action.payload}
        case LOG_OUT:
            return {loading: false, error: null, token: null}
        case SET_TOKEN:
            return {loading: false, error: null, token: action.payload}
        default:
            return state
    }
}
