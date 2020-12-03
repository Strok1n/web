import React from 'react'
import { Route } from 'react-router-dom'
import Dialogs from './content/dialogs'
import Users from './content/users'
import ProfileContainer from './content/profile'


const Content = () => {// id - param :id/:secondId/:end so on id? = optional param
  return <div>
    <Route path="/dialogs" component={Dialogs} />
    <Route path="/profile/:id?" render= {() => <ProfileContainer/>} />
    <Route path="/users" render={ () => <Users />} />
  </div>
}

export default Content;