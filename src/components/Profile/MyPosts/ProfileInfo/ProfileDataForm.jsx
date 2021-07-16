import {Field, reduxForm} from "redux-form";
import {Input, Textarea} from "../../../common/FormsControls/FormsControls";
import classes from "../../../common/FormsControls/FormsControls.module.css";

const ProfileDataForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <button>save</button>
            {props.error &&
            <span className={classes.formSummaryError}>
                {props.error}
            </span>
            }
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
                {/*<b>Contacts:</b> {Object.keys(props.profile.contacts).map(key => {
                    return (
                    <span key={key}>
                        <b>{key}: <Field placeholder={key} name={`contacts.${key}`} component={Input}/></b>
                    </span>
                )
            })}*/}

            </span>
        </form>
    )
}
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm)
export default ProfileDataFormReduxForm