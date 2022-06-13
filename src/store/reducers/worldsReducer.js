import {FETCH_WORLDS} from "../actions/actionTypes";

const initialState = {
    worlds: []
}

export default function worldsReducer (state = initialState, action) {
    switch (action.type) {
        case FETCH_WORLDS: {
            return{
                ...state, worlds: action.worlds
            }
        }
        default:
            return state
    }
}
