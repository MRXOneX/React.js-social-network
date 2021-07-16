import React, {useEffect} from 'react';
import {connect} from "react-redux";
import {
    follow,
    unfollow,
    setCurrentPage,
    toggleFollowingProgress,
    getUsers
} from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingInProgress, getIsAuth,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsersSuperSelector
} from "../../redux/users-selectors";

function UsersContainer(props) {

    useEffect(() => {
        props.getUsers(props.currentPage, props.pageSize)
    }, [])


    const onPageChanged = (page) => {
        props.getUsers(page, props.pageSize)
        props.setCurrentPage(page)
    }

    return (
        <>
            {props.isFetching ? <Preloader/> : null}
            <Users currentPage={props.currentPage}
                   onPageChanged={onPageChanged}
                   totalUsersCount={props.totalUsersCount}
                   pageSize={props.pageSize}
                   users={props.users}
                   unfollow={props.unfollow}
                   follow={props.follow}
                   followingInProgress={props.followingInProgress}
            />
        </>
    )
}

let mapStateToProps = (state) => {
    return {
        users: getUsersSuperSelector(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingInProgress: getFollowingInProgress(state),
        auth: getIsAuth(state)
    }
}
export default compose(
    connect(mapStateToProps, {
        follow,
        unfollow,
        setCurrentPage,
        toggleFollowingProgress,
        getUsers
    })
)
(UsersContainer)
