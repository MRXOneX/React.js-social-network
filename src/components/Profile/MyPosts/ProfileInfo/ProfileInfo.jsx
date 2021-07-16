import classes from './ProfileInfo.module.css'
import Preloader from "../../../common/Preloader/Preloader";
import ProfileStatusWithHooks from "./ProfileStatusWithHooks";
import userAva from "../../../../assets/images/usersAva.jpg";
import {useState} from "react";
import ProfileDataFormReduxForm from "./ProfileDataForm";
import Settings from "../../../Settings/Settings";
import SettingsContainer from "../../../Settings/Settings";

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader/>
    }
    const onMainPhotoSelected = (e) => {
        if (e.target.files.length) {
            props.savePhoto(e.target.files[0]);
        }
    }
    const onSubmit = (formData) => {
        props.saveProfile(formData)
    }
    debugger
    return (
        <div>
            <div className={classes.ava_descr}>
                <div className={classes.blockAva}>
                    <img className={classes.ava} src={props.profile.photos.large || userAva} alt=""/>
                </div>
                <div className={classes.information}>
                    <div className={classes.blockStatusAndNameUser}>
                        <div className={classes.nameUser}>
                            {props.profile.fullName}
                        </div>
                        <div>
                            <ProfileStatusWithHooks status={props.status} updateStatus={props.updateStatus}/>
                        </div>
                    </div>
                    <hr/>
                    <span className={classes.blockInformation}>
                        <ProfileData
                            profile={props.profile}
                            isOwner={props.isOwner}
                        />
                    </span>
                </div>
            </div>
        </div>
    );
}

const ProfileData = (props) => {
    return (
        <span>
            <div className={classes.aboutMe}>
                <span>
                    <b>Looking for a job</b>: {props.profile.lookingForAJob ? 'yes' : 'no'}
                 </span>
                <br/>
                {props.profile.lookingForAJob &&
                    <span>
                        <b>My professional skills</b>: {props.profile.lookingForAJobDescription}
                    </span>
                }
                <br/>
                <span>
                 <b>About me</b>: {props.profile.aboutMe}
                </span>
            </div>

            <div className={classes.contacts}>
                <span>
                <span><b>Contacts</b></span> {Object.keys(props.profile.contacts).map(key => {
                    return <Contact key={key} contactTitle={key} contactValue={props.profile.contacts[key]}/>

                })}
            </span>
            </div>
        </span>
    )
}
const Contact = ({contactTitle, contactValue}) => {
    return <span className={classes.contact}>
        <br/>
        <b>{contactTitle}</b>: {contactValue}
    </span>
}

export default ProfileInfo;