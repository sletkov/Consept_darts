import {FETCH_WORLD_ID} from "../actions/actionTypes";

const initialState = {
    World: []
}


export default function worldReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_WORLD_ID: {
            return {
                ...state, World: action.world
            }
        }
        default:
            return state
    }
}
