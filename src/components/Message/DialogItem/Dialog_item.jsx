import classes from './../Message.module.css';
import {NavLink} from "react-router-dom";
function Dialog_item(props) {
    return (
        <div className={classes.dialog}>
            <img className={classes.ava_dialog} src={props.img} alt=""/>
            <NavLink to={`/message/${props.id}`}>{props.name}</NavLink>
        </div>
    );
}
export default Dialog_item;