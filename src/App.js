import React from 'react';
import './App.css';
import Nav from "./components/Nav/Nav";
import MessageContainer from './components/Message/MessageContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import SettingsContainer from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer'
import {Redirect, Route, withRouter} from "react-router-dom";
import './index';
import ProfileContainer from "./components/Profile/ProflileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";
import Login from "./components/Login/Login";
import {connect} from "react-redux";
import {initializeApp} from "./redux/app-reducer";
import Preloader from "./components/common/Preloader/Preloader";
import {compose} from "redux";

class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
            return <Preloader/>
        }
        return (
            <div className='app-wrapper'>
                <HeaderContainer/>
                <Nav/>
                <div className="app-wrapper-content">
                    <Route path='/profile/:userId?'
                           render={() => <ProfileContainer/>}/>

                    <Route path='/message'
                           render={() => <MessageContainer/>}/>

                    <Route path='/users'
                           render={() => <UsersContainer/>}/>
                    <Route path='/news' render={News}/>
                    <Route path='/music' render={Music}/>
                    <Route path='/settings' render={() => <SettingsContainer />}/>
                    <Route path='/login'
                           render={() => <Login/>}/>
                     <Redirect from='/' to='/profile' />
                </div>
            </div>
        );
    }
}

let mapStateToProps = (state) => {
    return {
        initialized: state.app.initialized
    }
}
export default compose (
    withRouter,
    connect(mapStateToProps, {initializeApp})
)(App);
