import classes from './../Message.module.css';
function MessageText(props) {
    return (
        <div className={classes.message}>
                {props.message}
        </div>
    );
}
export default MessageText;