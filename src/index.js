import './index.css'
import store from './redux/store'
import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import {BrowserRouter} from 'react-router-dom'
import Sidebar from './components/sidebar'
import MyContent from './components/content'
import AuthContainer from './components/header'
import { NavLink } from 'react-router-dom';
import 'antd/dist/antd.css'
import {Button, Image} from 'antd'
import {Layout, Menu} from 'antd';

import {
    AppstoreOutlined,
    BarChartOutlined,
    CloudOutlined,
    ShopOutlined,
    TeamOutlined,
    UserOutlined,
    SendOutlined,
    UploadOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons'

import modules from "./components/wrapper.module.css";
import css from "./components/content/content.module.css";
import userPicture from "./pictures/user-profile-picture.png";

// let HOC = (Component) => { let Wrapper = (props) => {return <Component />}}
if ({} == {}) {
    ReactDOM.render(
        <div className="wrapper">
            <BrowserRouter>
                <Provider store={store}>
                    <AuthContainer/>
                    <Sidebar/>
                    <MyContent/>
                </Provider>
            </BrowserRouter>
        </div>,
        document.getElementById('root'))

}


const {Header, Content, Sider} = Layout;




const Post = (props) => {
    return <div>
        <Image
            width={200}
            height={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
    </div>

}


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
    <Layout>
        <Sider
            style={{
                overflow: 'auto',
                height: '100vh',
                position: 'fixed',
                left: 0,
            }}
        >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']}>
                <Menu.Item key="1" icon={<UserOutlined />}>
                    Profile <NavLink to={'/profile'} />
                </Menu.Item>
                <Menu.Item key="2" icon={<TeamOutlined />}>
                    Users <NavLink to={'/users'} />
                </Menu.Item>
                <Menu.Item key="3" icon={<SendOutlined />}>
                    Dialogs <NavLink to={'/dialogs'}/>
                </Menu.Item>
                <Menu.Item key="4" icon={<BarChartOutlined />}>
                    nav 4
                </Menu.Item>
                <Menu.Item key="5" icon={<CloudOutlined />}>
                    nav 5
                </Menu.Item>
                <Menu.Item key="6" icon={<AppstoreOutlined />}>
                    nav 6
                </Menu.Item>
                <Menu.Item key="7" icon={<TeamOutlined />}>
                    nav 7
                </Menu.Item>
                <Menu.Item key="8" icon={<ShopOutlined />}>
                    nav 8
                </Menu.Item>
            </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200 }}>
            <Header className="site-layout-background" style={{ padding: 0 }} />
            <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
                <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                    <MyContent/>
                </div>
            </Content>
        </Layout>
    </Layout>
        </Provider>
    </BrowserRouter>,
    document.getElementById('root'),
)



