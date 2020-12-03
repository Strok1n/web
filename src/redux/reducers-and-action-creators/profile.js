import Types from "../types";

const initState = {
  posts :[
    {userId: 4, theme: 'MY POST', text: 'my first post '},
    {userId: 4, theme: 'MY POST', text: 'my second post '},
    {userId: 4, theme: 'MY POST', text: 'my third post '},
  ],
  currentText: null,
  profile: null,
}

const profile = (state = initState, action) => {
    switch(action.type) {
        case Types.UPDATE_POST_TEXT:
            return {...state, currentText: action.text}
        case Types.ADD_POST:
            const newPost = {user_id: 5, theme: 'MY POST', text: state.currentText}
            return {...state, posts: [newPost, ...state.posts], currentText: ''}
        case Types.SET_PROFILE:
            return {...state, profile: action.profile}
        default:
            return {...state}
    }
}

export const addPost = () => {
    return { 
      type: Types.ADD_POST
    }
  }

  export const updatePostText = (text) => {
    return {
        type: Types.UPDATE_POST_TEXT,
        text,
    }
  }

  export const setUserProfile = (profile) =>
  ({type: Types.SET_PROFILE, profile})

export default profile