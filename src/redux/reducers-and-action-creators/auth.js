const SET_USER_DATA = 'SUD'





let initState = {
 token: 5
}




// state = dialogsPage
const authReducer= (state = initState, action) => {

  switch(action.type){
    case SET_USER_DATA:
      return{
        ...action.token,
      }
      default:
        return {...state}
  }
}


export const setUserDataActionCreator = (id,username,email,password,token) =>({type: SET_USER_DATA
, data: {id,username,email,password,token}})




export default authReducer