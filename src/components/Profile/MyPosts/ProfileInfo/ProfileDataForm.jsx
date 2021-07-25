import React from 'react';
import {useFormik} from "formik";
import {saveProfile} from "../../../../redux/profile-reducer";

const ProfileDataForm = (props) => {
    debugger
    const formik = useFormik({
        initialValues: {
            fullName: '',
        },
        onSubmit: values => {
            console.log(values)
        },
    });
    return (
        <form onSubmit={formik.handleSubmit}>
            <label htmlFor="email">Full name: </label>
            <input
                id="fullName"
                name="fullName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.fullName}
            />

            <button type="submit">Save</button>
        </form>
    );
}
/*return (
    <form onSubmit={props.handleSubmit}>
            <span>
                <b>Full name</b>: <Field placeholder={'Full name'} name={'fullName'} component={Input}/>
            </span>
        <span>
                <b>Looking for a job</b>:
                <Field name={'lookingForAJob'} type={'checkbox'} component={Input}/>
            </span>
        <span>
                <b>My professional skills</b>:
                <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} type={'checkbox'}
                       component={Textarea}/>
            </span>
        <span>
                <b>About me</b>:
                <Field placeholder={'About me'} name={'aboutMe'} component={Textarea}/>
            </span>
        <span>
                {/!*<b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                    return (
                    <span key={key}>
                        <b>{key}: <Field placeholder={key} name={`contacts.${key}`} component={Input}/></b>
                    </span>
                )
            })}*!/}

            </span>
    </form>
)*/
export default ProfileDataForm