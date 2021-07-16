import preloader from "../../../assets/images/Spinner-3.gif";
import React from "react";
import classes from './Preloader.module.css'
function Preloader(props) {
    return (
        <div>
            <img className={classes.preloader} src={preloader}/>
        </div>
    )
}

export default Preloader;