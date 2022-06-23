import {AUTH_LOGOUT, LOGIN_ERROR, LOGIN_SUCCESS} from "../actions/actionTypes";

const initialState = {
    token: null,
    error: '',

}

export default function authReducer (state = initialState, action) {
    switch (action.type) {
        case LOGIN_SUCCESS:
            return{
                ...state, token: action.token, error: ''
            }
        case LOGIN_ERROR:
            return{
                ...state, error: action.error
            }
        case AUTH_LOGOUT:
            return {
                ...state, token: null, error: ''
            }
        default:
            return state
    }
}
