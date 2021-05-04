import axios from './../axios.config'

export const GET_SCREENS = 'GET_SCREENS'
export const GET_SCREEN = 'GET_SCREEN'
export const REQUEST_SCREENS = 'REQUEST_SCREENS'
export const ERROR_SCREENS = 'ERROR_SCREENS'
export const DELETE_SCREEN = 'DELETE_SCREEN'

export const getScreens = () => async(dispatch, getState) => {
    try{
        dispatch({type: REQUEST_SCREENS})
        const url = getState().auth?.token ? '/api/attachments' : '/attachments'
        const {data} = await axios.get(url)
        dispatch({type: GET_SCREENS, payload: data})
    }catch (e) {
        console.log(e)
        dispatch({type: ERROR_SCREENS})
    }
}

export const getScreen = (id) => async(dispatch, getState) => {
    try{
        dispatch({type: REQUEST_SCREENS})
        const url = getState().auth?.token ? '/api/attachments/' : '/attachments/'
        const {data} = await axios.get(url + id)
        dispatch({type: GET_SCREEN, payload: data})
    }catch (e) {
        console.log(e)
        dispatch({type: ERROR_SCREENS})
    }
}

export const deleteScreen = (id) => async(dispatch, getState) => {
    try{
        dispatch({type: REQUEST_SCREENS})
        const url = getState().auth?.token ? '/api/attachments/' : '/attachments/'
        await axios.delete(url + id)
        dispatch({type: DELETE_SCREEN, payload: id})
    }catch (e) {
        console.log(e)
        dispatch({type: ERROR_SCREENS})
    }
}
