import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from './MyPosts/ProfileInfo/ProfileInfo';

function Profile(props) {
    return (
        <div>
            <ProfileInfo
                login={props.login}
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatus}
                isOwner={props.isOwner}
                savePhoto={props.savePhoto}
                saveProfile={props.saveProfile}

            />
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;