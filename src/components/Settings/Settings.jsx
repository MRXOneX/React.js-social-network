import {connect} from "react-redux";
import ProfileDataForm from "../Profile/MyPosts/ProfileInfo/ProfileDataForm";

function Settings(props) {
    debugger
    return (
        <div>
            <ProfileDataForm/>
        </div>
    )
}
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }
}
const SettingsContainer = connect(mapStateToProps, null)(Settings);
export default SettingsContainer;