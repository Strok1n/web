import { connect } from "react-redux";
import { follow, unfollow, toggle, setUsers, setUsersCount, setCurrentPage} from "../../redux/reducers-and-action-creators/users";
import Preloader from '../common/preloader'
import React from 'react'
import modules from './content.module.css'
import userPicture from '../../pictures/user-profile-picture.png'
import {Button, Pagination} from 'antd'
import axios from 'axios'
import { NavLink } from 'react-router-dom';







let UsersPresent = (props) => {

    let USERS = props.props.users.map(u =>
        <div key={u.id}>
        <span>
        <NavLink to={'/profile/'+u.id}>
            <img src={userPicture} className={modules.photo} alt={""}/>
            </NavLink>
          <p>{u.first_name}</p>
          <p>{u.last_name}</p>
          <p>{u.status}</p>
          <div>
            {u.is_followed ? <Button onClick={() => { props.props.unfollow(u.id) }}>
                Unfollow
            </Button> : <Button onClick={() => { props.props.follow(u.id) }}>
                Follow
            </Button>}

          </div>

        </span>
        </div>)

    let pagesCount = Math.ceil (props.props.usersSize/props.props.pageSize)



    let pages = []
    for (let i =1; i <= pagesCount; i++){
        pages.push(i)
    }


    let onchange = (a) =>{


      //  props.onPageChange(a)
    }


    return <>

    <div className={modules.users} >
        {pages.map( p =>
        {return <span className={props.props.currentPage
        === p &&
        modules
            .selectedPage}
                      onClick={(e)=>
                      {props.onPageChange(p)} }>{p} </span>
        })}

        {USERS}
    </div>
        </>


}













class UsersAJAX extends React.Component {

    onPageChange = (p) => {
        this.props.toggle(true)

        axios.get(`http://127.0.0.1:8000/api/users/?limit=${this.props.pageSize}&offset=${(p - 1) *this.props.pageSize}&page=${this.props.pageSize}`)
            .then(response => {
                this.props.toggle(false)
                this.props.setUsers(response.data.results)
                console.log(response)
            })
            .catch(error => console.log(error))
        this.props.setCurrentPage(p)
    }


    onChange = (i) => {

    }


    componentDidMount(){
        this.props.toggle(true)
        axios.get(`http://127.0.0.1:8000/api/users/?limit=${this.props.pageSize}&offset=${(this.props.currentPage - 1) *this.props.pageSize}&page=${this.props.pageSize}`)
            //  axios.post('http://127.0.0.1:8000/rest-auth/login/?user')

            // axios.post('http://127.0.0.1:8000/rest-auth/login/', {username:'123',email:'123@mail.com',password:'123123123'})
            // axios.post('http://127.0.0.1:8000/rest-auth/logout/')
            .then(response => {
                console.log(response)
                this.props.toggle(false)
                this.props.setUsers(response.data.results)

                this.props.setUsersCount(response.data.count)
            })
            .catch(error => console.log(error) )
    }

    render() {

        const Ex = () => {

        }


        return <div>



            <Pagination total={100} pageSizeOptions={[1,10,20]} defaultCurrent={1}
                     onChange={this.onPageChange.bind(this)} />


            { this.props.isFetching ?  <Preloader />:
                <UsersPresent
                    props={this.props}
                    onPageChange={this.onPageChange.bind(this)}/> }

        </div>}

}









let mapStateToProps = (state) => {

    return { users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    usersSize: state.usersPage.usersSize,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    }    
}

let Users = connect(mapStateToProps,
    
    
         { 
            follow,
            unfollow,
            setUsers,
             setCurrentPage,
             setUsersCount,
             toggle,
             }
        
    )(UsersAJAX)
export default Users