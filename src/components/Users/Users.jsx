import React from "react";
import Paginator from "./Paginator";
import User from "./User";
import classes from './Users.module.css'
function Users(props) {

    return (
        <div className={classes.blockUsers}>
            <div className={classes.paginatorBlock}>
                <Paginator
                           totalItemsCount={props.totalUsersCount}
                           pageSize={props.pageSize}
                           currentPage={props.currentPage}
                           onPageChanged={props.onPageChanged}
                />
            </div>
            <div className={classes.outUsers}>
                {
                    props.users.map(user => <User
                            user={user}
                            followingInProgress={props.followingInProgress}
                            key={user.id}
                            unfollow={props.unfollow}
                            follow={props.follow}
                        />
                    )
                }
            </div>
        </div>
    )
}

export default Users;