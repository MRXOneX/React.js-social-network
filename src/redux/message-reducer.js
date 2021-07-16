const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
    ]
};

const messageReducer = (state = initialState, action) => {
    switch (action.type) {
        case SEND_MESSAGE:
            return {
                ...state,
                messagesData: [...state.messagesData, {id: 7, message: action.newMessageText}],
            }
        default:
            return state
    }
}
export const sendMessageActionCreater = (newMessageText) => {
    return {
        type: SEND_MESSAGE,
        newMessageText
    }
}
export default messageReducer;