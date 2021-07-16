import React, {useEffect} from 'react';
import Profile from './Profile'
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom'
import {getStatus, getUserProfile, savePhoto, updateStatus, saveProfile} from "../../redux/profile-reducer";
import {compose} from "redux";


function ProfileContainer(props) {
    useEffect(() => {
        let userId = props.match.params.userId;
        if (!userId) {
            userId = props.authorizedUserId
            if (!userId) {
                props.history.push('/login');
            }
            //18178

        }
        props.getUserProfile(userId);
        props.getStatus(userId)
    });

    return (
        <Profile
            {...props}
            login={props.login}
            profile={props.profile}
            isOwner={props.match.params.userId}
            savePhoto={props.savePhoto}
        />
    )
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    status: state.profilePage.status,
    authorizedUserId: state.auth.userId,
    isAuth: state.auth.isAuth,
    login: state.auth.login
})
export default compose(
    connect(mapStateToProps, {
        getUserProfile,
        getStatus,
        updateStatus,
        savePhoto,
        saveProfile
    }),
    withRouter,
)(ProfileContainer)

/*
let AuthRedirectComponent = withAuthRedirect(ProfileContainer)
let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent)
export default connect(mapStateToProps, {getUserProfile})(WithUrlDataContainerComponent)*/
