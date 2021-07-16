import {createSelector} from "reselect";

export const gettUsers = (state) => {
    return state.usersPage.users
}

export const getUsersSuperSelector = createSelector(gettUsers, (users) => {
    return users.filter(user => true)
})
export const getPageSize = (state) => {
    return state.usersPage.pageSize
}
export const getTotalUsersCount = (state) => {
    return state.usersPage.totalUsersCount
}
export const getCurrentPage = (state) => {
    return state.usersPage.currentPage
}
export const getIsFetching = (state) => {
    return state.usersPage.isFetching
}
export const getFollowingInProgress = (state) => {
    return state.usersPage.followingInProgress
}
export const getIsAuth = (state) => {
    return state.auth.isAuth
}