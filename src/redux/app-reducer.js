import {getAuthUserData} from "./auth-reducer";
const INITIALEZED_SUCCESS = 'INITIALEZED-SUCCESS';

let initialState = {
    initialized: false
};


const appReducer = (state = initialState, action) => {
    switch (action.type) {
        case INITIALEZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state
    }
}
export const initializedSuccess = () => {
    return {
        type: INITIALEZED_SUCCESS
    }
}
export const initializeApp  = () => (dispatch) => {
    debugger
    let promise = dispatch(getAuthUserData())
    promise.then(() => {
        dispatch(initializedSuccess());
    })
}
export default appReducer;