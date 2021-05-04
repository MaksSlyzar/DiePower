import {DELETE_SCREEN, ERROR_SCREENS, GET_SCREEN, GET_SCREENS, REQUEST_SCREENS} from "../actions/screen.actions";

const initialState = {
    data: [],
    loading: false,
    error: null,
    screen: null
}

// const images = [
//     {src: 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg', id: 1},
//     {src: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png', id: 2},
//     {src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', id: 3},
//     {src: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg', id: 4},
//     {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5z8-3WshCsE_BWkuj0CSCR3MVTC1WsA8RfA&usqp=CAU', id: 5},
//     {src: 'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg', id: 6},
//     {src: 'https://media.sproutsocial.com/uploads/2017/02/10x-featured-social-media-image-size.png', id: 7},
//     {src: 'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg', id: 8},
//     {src: 'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg', id: 9},
//     {src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5z8-3WshCsE_BWkuj0CSCR3MVTC1WsA8RfA&usqp=CAU', id: 10},
// ]

export const ScreenReducer = (state = initialState, action) => {
    switch (action.type) {
        case REQUEST_SCREENS:
            return {...state, loading: true, error: null}
        case GET_SCREENS:
            return {...state, loading: false, error: null, data: action.payload}
        case ERROR_SCREENS:
            return {...state, loading: false, error: action.payload}
        case GET_SCREEN:
            return {...state, loading: false, screen: action.payload}
        case DELETE_SCREEN:
            return {...state, loading: false, data: state.data.filter(el => el.code !== action.payload)}
        default:
            return state
    }
}
