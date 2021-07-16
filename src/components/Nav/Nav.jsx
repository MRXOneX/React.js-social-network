import classes from './Nav.module.css';
import {NavLink} from "react-router-dom";

function Nav() {
    return (
        <nav className={classes.nav}>
            <div className={classes.blockLink}>
                <NavLink to="/profile" activeClassName={classes.activeLink}><span>Profile</span></NavLink>
            </div>
            <div className={classes.blockLink}>
                <NavLink to="/message" activeClassName={classes.activeLink}><span>Messages</span></NavLink>
            </div>
            <div className={classes.blockLink}>
                <NavLink to='/users' activeClassName={classes.activeLink}><span>Users</span></NavLink>
            </div>
            <div className={classes.blockLink}>
                <NavLink to='/news' activeClassName={classes.activeLink}><span>News</span></NavLink>
            </div>
            <div className={classes.blockLink}>
                <NavLink to="/music" activeClassName={classes.activeLink}><span>Music</span></NavLink>
            </div>
            <div className={classes.blockLink}>
                <NavLink to="/settings" activeClassName={classes.activeLink}><span>Settings</span></NavLink>
            </div>
        </nav>
    );
}

export default Nav;