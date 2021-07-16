import {authAPI, SecurityAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const SET_USER_DATA = 'SET_USER_DATA'
const GET_CAPTCHA_URL_SUCCESS = 'GET_CAPTCHA_URL_SUCCESS'

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
    captchaUrl: null
};


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case GET_CAPTCHA_URL_SUCCESS:
            return {
                ...state,
                ...action.payload
            }
        default:
            return state;
    }
}

export const getCaptchaUrlSuccess = (captchaUrl) => {
    return {
        type: GET_CAPTCHA_URL_SUCCESS,
        payload: {captchaUrl}
    }
}

export const setAuthUserData = (userId, email, login, isAuth) => {
    return {
        type: SET_USER_DATA,
        data: {
            userId,
            email,
            login,
            isAuth
        }
    }
}
export const getAuthUserData = () => (dispatch) => {
    debugger
    return authAPI.me().then(response => {
        debugger
        if (response.data.resultCode === 0 ){
            let {id, email, login} = response.data.data
            dispatch(setAuthUserData(id, email, login, true));
        }
    })
}

export const login = (email, password, rememberMe, captcha) => (dispatch) => {
    debugger
    authAPI.login(email, password, rememberMe, captcha).then(response => {
        debugger
        if (response.data.resultCode === 0) {
            dispatch(getAuthUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrl());
            }
        }
    })
}
export const logout = () => (dispatch) => {
    authAPI.logout().then(response => {
        if (response.data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
}
export const getCaptchaUrl = () => async (dispatch) => {
    const response = await SecurityAPI.getCaptchaUrl()
    const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
}
export default authReducer;