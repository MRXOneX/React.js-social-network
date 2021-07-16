import classes from "./Users.module.css";
import userAva from "../../assets/images/usersAva.jpg";
import React from "react";
import {NavLink} from "react-router-dom";

function User(props) {
    return (
        <div key={props.user.id}>
            <div className={classes.blockUser}>
                <span>{props.user.name}</span>
                <div className={classes.blockImgAva}>
                    <NavLink to={'/profile/' + props.user.id}>
                        <p className={classes.img_ava}><img src={props.user.photos.small != null ? props.user.photos.small : userAva}
                                alt=""/></p>
                    </NavLink>
                </div>
                <br/>
                <div className={classes.blockBtn}>
                    {props.user.followed
                        ? <button className={classes.btnUnFollow}
                                  disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.unfollow(props.user.id)
                                  }}>unfollow</button>
                        : <button className={classes.btnFollow}
                                  disabled={props.followingInProgress.some(id => id === props.user.id)}
                                  onClick={() => {
                                      props.follow(props.user.id)
                                  }}>follow</button>
                    }
                </div>
            </div>
        </div>
    )
}

export default User;