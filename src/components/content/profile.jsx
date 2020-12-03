import React from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {setUserProfile, updatePostText} from '../../redux/reducers-and-action-creators/profile'
import {withRouter} from 'react-router-dom'
import Preloader from '../common/preloader'
import {addPost} from '../../redux/reducers-and-action-creators/profile'
import userPicture from '../../pictures/user-profile-picture.png'
import {Button} from 'antd'
import css from './content.module.css'

import { Image } from 'antd'
import { Form, Input, Checkbox } from 'antd';
import { createElement, useState } from 'react';
import { Comment, Tooltip, Avatar } from 'antd';
import moment from 'moment';
import { DislikeOutlined, LikeOutlined, DislikeFilled, LikeFilled } from '@ant-design/icons';
import { Card } from 'antd';
import { Descriptions } from 'antd';
import { Typography } from 'antd';


const { TextArea } = Input;

const { Title } = Typography;

const Demo = (props) => {
    const [likes, setLikes] = useState(0);
    const [dislikes, setDislikes] = useState(0);
    const [action, setAction] = useState(null);

    const like = () => {
        setLikes(1);
        setDislikes(0);
        setAction('liked');
    };

    const dislike = () => {
        setLikes(0);
        setDislikes(1);
        setAction('disliked');
    };

    const actions = [
        <Tooltip key="comment-basic-like" title="Like">
      <span onClick={like}>
        {createElement(action === 'liked' ? LikeFilled : LikeOutlined)}
          <span className="comment-action">{likes}</span>
      </span>
        </Tooltip>,
        <Tooltip key="comment-basic-dislike" title="Dislike">
      <span onClick={dislike}>
        {React.createElement(action === 'disliked' ? DislikeFilled : DislikeOutlined)}
          <span className="comment-action">{dislikes}</span>
      </span>
        </Tooltip>,
        <span key="comment-basic-reply-to">Reply to</span>,
    ];

    return (
        <Comment
            actions={actions}
            author={<a>Han Solo</a>}
            avatar={
                <Avatar
                    src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
                    alt="Han Solo"
                />
            }
            content={
                <p align="left">
                    {props.text}
                </p>
            }
            datetime={
                <Tooltip title={moment().format('YYYY-MM-DD HH:mm:ss')}>
                    <span>{moment().fromNow()}</span>
                </Tooltip>
            }
        />
    );
};










const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};
const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const DemoForm = () => {
    const onFinish = (values) => {
        console.log('Success:', values);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            {...layout}
            name="basic"
            initialValues={{
                remember: true,
            }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
        >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                    {
                        required: true,
                        message: 'Please input your username!',
                    },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                <Checkbox>Remember me</Checkbox>
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    );
};











class DemoTextArea extends React.Component {
    state = {
        value: '',
    };

    onChange = ({ target: { value } }) => {
        console.log(this.props)
        this.setState({ value })
        this.props.updatePostText(value)
    };

    onClick = () => {
        if(this["state"].value) {
            this.props.addPost()
            //newPostText.current.value = ''
            this["state"].value = null
        }
    }

    render() {
        const { value } = this.state;

        return (
            <>
                <div style={{ margin: '24px 0' }} align='right'>
                <TextArea
                    value={value}
                    onChange={this.onChange}
                    placeholder="Controlled autosize"
                    autoSize={{ minRows: 3, maxRows: 5 }}
                />
                <Button onClick={this.onClick}>Post</Button>
                </div>
            </>
        );
    }
}















//  <TextArea rows={2}  />


//   <div align='right' >
//  <Button >Post</Button>

//  </div>





const Post = (props) => {
    return <div>

        <Demo text = {props.text} />
    </div>

}
//
// <textarea ref={newPostText} onChange={onTextChange}/>
// <div align='right'>
//     <Button onClick={addPost}>Post</Button>
// </div >

const MyPosts = (props) => {

    const newPostText = React.createRef()

    const onTextChange = () => {
        debugger
        props.updatePostText(newPostText.current.value)
    }

    const addPost = () => {
        props.addPost()
        newPostText.current.value = ''
    }

    let myPosts = props.posts.map(post =>
        <Post text={post.text}/>)
    return <div>

        <DemoTextArea {...props} />


        <Title level={2}>My Posts</Title>
        <div align='left'>
        {myPosts }
        </div>
    </div>
}


let mapStateToProps1 = (state) => {
    return {
        profile: state.profile,
        posts: state.profile.posts,
    }
}

let mapDispatchToProps2 = (dispatch) => {
    return {
        addPost: (text3) => {
            dispatch(addPost(text3))
        },
    }
}

let MyPostsContainer =
    connect(mapStateToProps1, {addPost, updatePostText})(MyPosts)

const ProfileInfo = (props) => {
 let a = 2
}

const gridStyle = {
    width: '25%',
    textAlign: 'center',
};

const ProfileImage = (props) => {


    //<div>name: {props.first_name}</div>

    return <div>



        <div className={css.myProfile}>

            <Image className={css.profileImage}
                width={200}
                src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />

        <Descriptions className={css.desc} title="User Info" layout="vertical">
            <Descriptions.Item label="UserName">Zhou Maomao</Descriptions.Item>
            <Descriptions.Item label="Telephone">1810000000</Descriptions.Item>
            <Descriptions.Item label="Live">Hangzhou, Zhejiang</Descriptions.Item>
            <Descriptions.Item label="Address" span={2}>
                No. 18, Wantang Road, Xihu District, Hangzhou, Zhejiang, China
            </Descriptions.Item>
            <Descriptions.Item label="Remark">empty</Descriptions.Item>
        </Descriptions>,


        </div>




    </div>
}


const Profile = (props) => {

    if (!props.profile) {
        return <Preloader/>
    }


    return <div>
        <ProfileImage first_name={props.profile.first_name}/>
        <MyPostsContainer/>

    </div>
}


let AuthComponent = (props) => {
    return <Profile {...props} />
}

export const withAuthRedirect = (Component) => {
    class RedirectComponenet extends React.Component {
        render() {
            return <div>
                <Component/>
            </div>
        }
    }
}

class Profile1 extends React.Component {
    componentDidMount() {
        let id = this.props.match.params.id// from params of withRouter from react-router-dom
        if (!id)
            id = 7
        axios.get(`http://127.0.0.1:8000/api/users/${id}/`)
            .then(response => {
                console.log(response)

                window.props = this.props

                this.props.setUserProfile(response.data)
            })
            .catch(error => console.log(error))
    }

    render() {
        return (<div>
            <Profile {...this.props}   />
        </div>)
    }
}

let mapStateToProps = (state) => ({
    profile: state.profile.profile
})

let WithUrlDataContainerComponent = withRouter(Profile1)//оборачиваем еще
export default connect(mapStateToProps, {setUserProfile})(WithUrlDataContainerComponent)// оборачиваем еще