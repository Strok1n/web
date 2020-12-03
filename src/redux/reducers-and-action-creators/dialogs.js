import Types from "../types";

const initState = {
    withUser: {id: null},
    messages: [
        {src: 434, dst: 434, date: '12-23-2000', time: '13:20', text: 'fda'},
        {src: 434, dst: 434, date: '12-23-2000', time: '13:20', text: 'blafdf b1412432la bla'}
    ],
    currentText: null,
}

const dialogs = (state = initState, action) => {
    switch (action.type) {
        case Types.UPDATE_MESSAGE_TEXT:
            return {...state, currentText: action.text}

        case Types.ADD_MESSAGE:
            const newMessage = {
                src: 434, dst: 134, date: '12-23-2000',
                time: '13:20', text: state.currentText
            }
            return {...state, messages: [...state.messages, newMessage],
                currentText: ''}
            //stateCopy.currentText = ''
            //return stateCopy

        default:
            return {...state}
    }
}

export const updateMessageText = (text) => {
    return {
        type: Types.UPDATE_MESSAGE_TEXT,
        text
    }
}

export const addMessage = () => {
    return {
        type: Types.ADD_MESSAGE
    }
}

export default dialogs