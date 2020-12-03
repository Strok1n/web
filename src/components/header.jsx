import { connect } from 'react-redux'
import { setUserDataActionCreator } from '../redux/reducers-and-action-creators/auth'
import { Button } from 'antd'
import axios from 'axios'
import React from 'react'
import logo from '../pictures/logo.png'

import modules from './wrapper.module.css'




const username = React.createRef()
const password = React.createRef()



class Header extends React.Component{

  myF = () =>{

    // let id= username.current.value
    // let pwd= password.current.value

    axios.post('http://127.0.0.1:8000/rest-auth/login/',
        {username:'1234',email:'',password:'1234VVVVV'})
        .then(responce => {
          this.props.setUserDataActionCreator(responce.data)
          console.log(responce)})




    username.current.value=''
    password.current.value=''
  }

  componentDidMount(){


  }

  render() {

    return <div className={modules.header}>

    </div>


  }

}

















let mapStateToProps = (state) => {

  return { id: state.auth.id,
    username: state.auth.username,
    email: state.auth.email,
    password: state.auth.password,
    token: state.auth.token,
    isFetching: state.auth.isFetching,
  }    
}




let AuthContainer = connect(mapStateToProps
  ,{setUserDataActionCreator})(Header)

export default AuthContainer;