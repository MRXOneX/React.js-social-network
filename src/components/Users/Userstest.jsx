
import * as axios from "axios";
import userAva from './../../assets/images/usersAva.jpg';

function Userstest(props) {
    if (props.users.length === 0) {
        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        })
    }


    return (
        <div>
            {
                props.users.map(user => {
                    return (
                        <div key={user.id}>
                            <span>
                                <div>
                                <img src={user.photos.small != null ? user.photos.small : userAva}
                                     className={classes.img_ava} alt=""/>
                            </div>
                                <div>
                                    {user.followed ?
                                        <button onClick={() => {
                                            props.unfollow(user.id)
                                        }}>unfollow
                                        </button>
                                        : <button onClick={() => {
                                            props.follow(user.id)
                                        }}>follow
                                        </button>
                                    }
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{user.name}</div>
                                    <div>{user.status}</div>
                                </span>
                                <span>
                                    <div>{"user.location.country"}</div>
                                    <div>{"user.location.city"}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )

}

export default Userstest;