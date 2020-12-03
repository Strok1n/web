const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE ='SET_CURRENT_PAGE'
const TOGGLE_IS_FETCHING = 'toggle'


const initState = {
  users: [ ],
  pageSize: 2,
  usersSize: 21,
  currentPage: 5,
  isFetching: false,
  pagination: null,
}


const usersReducer = (state = initState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.id) {
            return { ...user, is_followed: true }
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state, users: state.users.map(user => {
          if (user.id === action.id) {
            return { ...user, is_followed: false }
          }
          return user
        })
      }
    case 'SET_SIZE':
      return {...state, usersSize: action.usersSize}

    case SET_USERS: 
      return { ...state, users: [...action.users] }
    case SET_CURRENT_PAGE: 

      return { ...state, currentPage: action.currentPage }
      case TOGGLE_IS_FETCHING:
        return {...state, isFetching : action.isFetching}

        default:
      return state
  }
}

export const follow = (id_param) => ({ type: FOLLOW, id: id_param })
export const unfollow = (id_param) => ({ type: UNFOLLOW, id: id_param })
export const setUsers = (users_param) => ({ type: SET_USERS, users: users_param })
export const setCurrentPage = (pageNum_param) => ({ type: SET_CURRENT_PAGE, currentPage: pageNum_param })
export const setUsersCount = (num) => ({type: 'SET_SIZE',usersSize: num})
export const toggle = (par) => ({type: TOGGLE_IS_FETCHING, isFetching: par })


export default usersReducer