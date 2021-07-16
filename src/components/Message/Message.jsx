import classes from './Message.module.css';
import React from 'react';
import MessageText from './MessageText/MessageText';
import Dialog_item from './DialogItem/Dialog_item';
import {Redirect} from 'react-router-dom'
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, requiredField} from "../../utils/validators/validators";

function Message(props) {
    let state = props.messagePage;
    let dialogsElements = state.dialogsData.map((dialog) => {
        return <Dialog_item name={dialog.name} key={dialog.id} id={dialog.id}/>
    });
    let messagesElements = state.messagesData.map((message) => {
        return <MessageText message={message.message} key={message.id} id={message.id}/>
    });
    if(!props.auth) return <Redirect to={'/login'} />

    let addNewMessage = (values) => {
        props.addMessages(values.newMessageText);
        values.newMessageText = ''
    }
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogs_items}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div>
                    <AddMessageFormRedux onSubmit={addNewMessage} />
                </div>
            </div>
        </div>
    );
}
let maxLength15 = maxLengthCreator(15)
const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field component={Textarea} validate={[
                    requiredField,
                    maxLength15
                ]} name={'newMessageText'} placeholder={'Enter your message'}/>
            </div>
            <div>
                <button>Send</button>
            </div>
        </form>
    )
}
const AddMessageFormRedux = reduxForm({form: 'addMessageForm'})(AddMessageForm)

export default Message;