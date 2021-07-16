import React from 'react';
import {sendMessageActionCreater, changeMessageActionCreater} from './../../redux/message-reducer'
import Message from "./Message";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        messagePage: state.messagePage
    }
}
let mapDispatchToProps = (dispatch) => {
    return {
        addMessages: (textMessage) => {
            dispatch(sendMessageActionCreater(textMessage))
        }
    }
}



export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Message);