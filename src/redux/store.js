import profileReducer from "./profile-reducer";
import messageReducer from "./message-reducer";
import navReducer from "./nav-reducer";
import {UPDATE_POST_TEXT, ADD_POST} from "./profile-reducer";
import {UPDATE_NEW_MESSAGE, SEND_MESSAGE} from "./message-reducer";

let store = {
    _state: {
        profilePage: {
            postsData: [
                {id: 1, message: 'Hi, how are you?', likes: 12},
                {id: 2, message: 'Its my first post', likes: 21}
            ],
            newText: 'value'
        },
        messagesPage: {
            messagesData: [
                {id: 1, message: 'hi'},
                {id: 2, message: 'how are you'},
                {id: 3, message: 'YO'}
            ],
            dialogsData: [
                {
                    id: 1,
                    name: 'Misha',
                    img: 'https://p7.hiclipart.com/preview/592/884/975/programmer-computer-programming-computer-software-computer-icons-programming-language-avatar.jpg'
                },
                {
                    id: 2,
                    name: 'Sasha',
                    img: 'https://yt3.ggpht.com/ytc/AAUvwnjPDwM2DwPTzkyoU1gLeEw7t9d1ml76o3JDYqnW=s900-c-k-c0x00ffffff-no-rj'
                },
                {
                    id: 3,
                    name: 'Kirill',
                    img: 'https://yt3.ggpht.com/ytc/AAUvwnjPDwM2DwPTzkyoU1gLeEw7t9d1ml76o3JDYqnW=s900-c-k-c0x00ffffff-no-rj'
                }
            ],
            newMessageText: 'ss'
        },
        nav: {}
    },
    _rerenderEntireTree() {
        console.log('State changed');
    },

    getState() {
        return this._state;
    },
    subcribe(observer) {
        this._rerenderEntireTree = observer;
    },

    dispatch(action) {

        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.messagesPage = messageReducer(this._state.messagesPage, action);
        this._state.nav = navReducer(this._state.nav, action);
        this._rerenderEntireTree(this._state);
    }
}




window.store = store;
export default store;
