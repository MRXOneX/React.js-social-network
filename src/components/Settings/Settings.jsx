import classes from './Settings.module.css';
import {connect} from "react-redux";
import {useEffect} from "react";
import ProfileDataFormReduxForm from "../Profile/MyPosts/ProfileInfo/ProfileDataForm";
import {getUserProfile} from "../../redux/profile-reducer";

function Settings(props) {
    debugger
    return (
        <div>
            <ProfileDataFormReduxForm profile={props.profile}/>
        </div>
    );
}
const mapStateToProps = (state) => {
    debugger
    return {
        profile: state.profilePage.profile
    }
}
const SettingsContainer = connect(mapStateToProps, null)(Settings);
export default SettingsContainer;