import classes from './Header.module.css';
import {NavLink} from "react-router-dom";
import logo from '../../assets/images/myspace.svg'

function Header(props) {
    return (
        <header className={classes.header}>

            <NavLink to={'/profile'}>
                <div className={classes.logo}>
                    <img src={logo} alt=""/>
                </div>
                <div className={classes.blockSocialNetworkName}>
                    <span className={classes.socialNetworkName}>Social Network</span>
                </div>
            </NavLink>
            <div className={classes.loginBlock}>
                {props.isAuth
                    ? <div><span className={classes.nameUser}>{props.login}</span> <button className={classes.btnLogout} onClick={props.logout}>Logout</button> </div>
                    : <NavLink  to={'/login'}><button className={classes.btnLogin}>Login</button></NavLink>}
            </div>
        </header>
    );
}
export default Header;