import classes from './Post.module.css';


function Post(props) {
    return (
        <div className={classes.item}>
            {/*<img src="https://vraki.net/sites/default/files/inline/images/1_42.jpg" alt=""/>
            {props.message}
            <div>
                {props.like}
            </div>*/}
        </div>
    );
}

export default Post;