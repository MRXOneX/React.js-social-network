import {profileAPI, userAPI} from "../api/api";
import {stopSubmit} from "redux-form";

const ADD_POST = 'ADD-POST';
const UPDATE_POST_TEXT = 'UPDATE-POST-TEXT';
const SET_USER_PROFILE = 'SET-USER-PROFILE'
const SET_STATUS = 'SET-STATUS'
const SAVE_PHOTO = 'SAVE-PHOTO'

let initialState = {
    postsData: [
        {id: 1, message: 'Hi, how are you?', likes: 12},
        {id: 2, message: 'Its my first post', likes: 21}
    ],
    profile: null,
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            return {
                ...state,
                newText: '',
                postsData: [...state.postsData, {id: 5, message: action.newTextPost, likes: 12}]
            }
        case SET_USER_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        case SET_STATUS:
            return {
                ...state,
                status: action.status
            }
        case SAVE_PHOTO:
            return {
                ...state,
                profile: {...state.profile, photos: action.photos}
            }
        default:
            return state;
    }


    return state;
}
export const addPost = (newTextPost) => {
    return {
        type: ADD_POST,
        newTextPost
    }
}
export const setUserProfile = (profile) => {
    return {
        type: SET_USER_PROFILE,
        profile
    }
}
export const setStatus = status => {
    return {
        type: SET_STATUS,
        status
    }
}
export const savePhotoSuccess = (photos) => {
    return {
        type: SAVE_PHOTO,
        photos
    }
}

export const getUserProfile = (userId) => async (dispatch) => {
    debugger
    let response = await userAPI.getProfile(userId)
    dispatch(setUserProfile(response.data))
}
export const getStatus = (userId) => async (dispatch) => {
    let response = await profileAPI.getStatus(userId)
    dispatch(setStatus(response.data))
}
export const updateStatus = (status) => async (dispatch) => {
    let response = await profileAPI.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}
export const savePhoto = (photos) => async (dispatch) => {
    let response = await profileAPI.savePhoto(photos)
    if(response.data.resultCode === 0) {
        dispatch(setStatus(response.data.data.photos))
    }
}
export const saveProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId
    let response = await profileAPI.saveProfile(profile)
    if(response.data.resultCode === 0) {
        dispatch(getUserProfile(userId))
    }
}
export default profileReducer;