import authReducer from "./reducers-and-action-creators/auth"
import dialogs from "./reducers-and-action-creators/dialogs"
import profile from "./reducers-and-action-creators/profile"
import usersReducer from "./reducers-and-action-creators/users"

const { createStore, combineReducers } = require("redux")


const reducers = combineReducers({
    profile,
    dialogs,
    usersPage: usersReducer,
    auth: authReducer,
})

const store = createStore(reducers)

window.store = store

export default store