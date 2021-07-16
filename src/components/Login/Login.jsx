import classes from './Login.module.css'
import {connect} from "react-redux";
import {login, logout} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import {useFormik} from 'formik';


function LoginForm(props) {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: null
        },
        onSubmit: values => {
            props.login(values.email, values.password, values.rememberMe, values.captcha)
        },

    });
    return (
        <div>
            <form onSubmit={formik.handleSubmit}>
                <div className={classes.form}>
                    <div>
                        <label htmlFor="email">EMAIL </label>
                        <br/>
                        <input className={classes.inputEmail}
                               id="email"
                               name="email"
                               type="email"
                               placeholder="example@test.ru"
                               onChange={formik.handleChange}
                               value={formik.values.email}
                        />
                    </div>
                    <div>
                        <label htmlFor="password">PASSWORD</label>
                        <br/>
                        <input className={classes.inputPassword}
                               id="password"
                               name="password"
                               type="password"
                               placeholder="min 6 symbols"
                               onChange={formik.handleChange}
                               value={formik.values.password}
                        />
                    </div>
                    <input type="checkbox" id='rememberMe' name='rememberMe' onChange={formik.handleChange}
                           value={formik.values.rememberMe}/>
                    <button className={classes.btnLogin} type="submit">Login</button>
                </div>
            </form>
        </div>

      /* {props.captchaUrl && <img className={classes.captchaPhoto} src={props.captchaUrl} alt=""/> }
         {props.captchaUrl && <Field placeholder='Symbols from image' name='captcha' component={Input} />}
         {props.error &&
         <div className={classes.formSummaryError}>
             {props.error}
         </div>*/
    )
}

function Login(props) {
    if (props.isAuth) {
        return <Redirect to={'/profile'}/>
    }
    return (
        <div>
            <LoginForm
                captchaUrl={props.captchaUrl}
                login={props.login}
            />
        </div>
    )
}

let mapStateToProps = (state) => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.captchaUrl
    }
}
export default connect(mapStateToProps, {
    login,
    logout
})(Login)