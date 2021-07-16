import React, {useEffect, useState} from "react";
import classes from "./ProfileInfo.module.css";

function ProfileStatusWithHooks(props) {

    const [editMode, setEditMode] = useState(false);
    const [status, setStatus] = useState(props.status);
    useEffect(() => {
        setStatus(props.status)
    }, [props.status])
    const activateEditMode = () => {
        setEditMode(true)
    }
    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }
    const onStatusChange = (e) => {
        setStatus(e.target.value);
    }
    debugger
    return (
        <>
            {!editMode &&
            <div>
                <span className={classes.status}
                                     onDoubleClick={activateEditMode}>{props.status || 'get status'}</span>
            </div>
            }

            {editMode &&
            <div>
                <input className={classes.status}
                       value={status}
                       id="status"
                       name="status"
                       type="text"
                       onBlur={deactivateEditMode}
                       placeholder="status"
                       onChange={onStatusChange}
                       autoFocus={true}
                />
            </div>
            }
        </>
    );
}

export default ProfileStatusWithHooks