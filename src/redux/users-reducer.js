import {userAPI} from "../api/api";
import {updateObjectInArray} from "../utils/objects-helpers";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const USERS_TOTAL_COUNT = 'USERS-TOTAL-COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE-IS-FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE-IS-FOLLOWING-PROGRESS'

let initialState = {
    users: [],
    pageSize: 10,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [2, 1]
};


const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            debugger
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,"id", {followed: true})
            }
        case UNFOLLOW:
            debugger
            return {
                ...state,
                users: updateObjectInArray(state.users, action.userId,"id",{followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case USERS_TOTAL_COUNT:
            return {
                ...state,
                totalUsersCount: action.totalCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.preloader
            }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                followingInProgress: action.isFetching
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        default:
            return state;
    }
}

export const setCurrentPage = (page) => ({type: SET_CURRENT_PAGE, page})
export const followSuccess = (userId) => ({type: FOLLOW, userId});
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsersCount = (totalCount) => ({type: USERS_TOTAL_COUNT, totalCount});
export const toggleIsFetching = (preloader) => ({type: TOGGLE_IS_FETCHING, preloader});
export const toggleFollowingProgress = (isFetching, userId) => ({
    type: TOGGLE_IS_FOLLOWING_PROGRESS,
    isFetching,
    userId
});

export const getUsers = (currentPage, pageSize) => {
    return async (dispatch) => {
        dispatch(toggleIsFetching(true))
        let data = await userAPI.getUsers(currentPage, pageSize)
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount));
    }
}
const followUnfollowFlow = async(dispatch, userId, apiMethod, actionCreator) => {
        debugger
        dispatch(toggleFollowingProgress(true, userId))
        let resultCode = await apiMethod(userId)
        if (resultCode === 0) {
            dispatch(actionCreator(userId))
        }
        dispatch(toggleFollowingProgress(false, userId))
}

export const follow = (userId) => {
    debugger
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.setUser.bind(userAPI), followSuccess)
    }
}
export const unfollow = (userId) => {
    return async (dispatch) => {
        followUnfollowFlow(dispatch, userId, userAPI.delUser.bind(userAPI), unfollowSuccess)
    }
}
export default usersReducer;