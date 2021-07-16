import React from 'react';
import classes from './MyPosts.module.css';
import Post from './post/Post';
import {Field, reduxForm} from "redux-form";
import {requiredField, maxLengthCreator} from "../../../utils/validators/validators";
import {Textarea} from "../../common/FormsControls/FormsControls";

function MyPosts(props) {
    let postsElements = props.posts.map((post) => {
        return <Post message={post.message} like={post.likes} key={post.id} id={post.id}/>
    });


    let addNewPost = (values) => {
        props.addPost(values.newText)
        values.newText = ''

    }
    return (
        <div className={classes.posts_block}>
            <div></div>
            <div>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
                <br/>
            </div>
            {/*<h3>My post</h3>
            <div>
                <MyPostsFormRedux onSubmit={addNewPost} />
            </div>
            <div>
                {postsElements}
            </div>*/}
        </div>
    );
}
const maxLength = maxLengthCreator(100)
const MyPostsForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div className={classes.formPost}>
                <Field validate={[
                    requiredField,
                    maxLength
                ]} component={Textarea} className={classes.textarea}  name={'newText'} placeholder="Typing in here now..." cols="30" rows="3"/>
            </div>
            <div className={classes.btnAddPost}>
                <button>Add post</button>
            </div>
        </form>
    )
}
const MyPostsFormRedux = reduxForm({form: 'myPostsForm'})(MyPostsForm)

export default MyPosts;