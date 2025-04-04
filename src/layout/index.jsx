import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { ROUTES } from './navigation/constants';
const { Header, Content, Footer, Sider } = Layout;
import LogoWhite from '@/assets/static/logo/logo_white.png'
import Navigation from './navigation';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../pages/Login/loginSlice';


function getItem(label, key, icon, children) {
    return {
        key,
        icon,
        children,
        label,
    };
}
// const items = [
//     getItem('Option 1', '1', <PieChartOutlined />),
//     getItem('Option 2', '2', <DesktopOutlined />),
//     getItem('User', 'sub1', <UserOutlined />, [
//         getItem('Tom', '3', <UserOutlined />, [
//             getItem('Tom', '3'),
//             getItem('Bill', '4'),
//             getItem('Alex', '5'),
//         ]),
//         getItem('Bill', '4'),
//         getItem('Alex', '5'),
//     ]),
//     getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
//     getItem('Files', '9', <FileOutlined />),
// ];

const App = () => {

    const isLoggedIn = useSelector(getIsLoggedIn)
    const [collapsed, setCollapsed] = useState(false);
    const navigate = useNavigate()
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();


    const items = ROUTES.map((e, i) => (getItem(e.label.includes("-") ? e.label.split("-").map(e => (e.charAt(0).toUpperCase() + e.slice(1) + " ")) : e.label.charAt(0).toUpperCase() + e.label.slice(1),
        e.url, e.icon,
        e.childrens.length > 0 ?
            e.childrens.map((c, ci) => (getItem(
                c.label.includes("-") ?
                    c.label.split("-").map(e => (e.charAt(0).toUpperCase() + e.slice(1) + " "))
                    : c.label.charAt(0).toUpperCase() + c.label.slice(1), (`${e.url}${c.url}`), c.icon))) : null)))

    return (
        <Layout style={{ minHeight: '100vh' }}>
            {isLoggedIn ?
                <Sider width={250} collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
                    <div className="bg-gray-700 w-[90%] mx-auto p-2 m-2 text-center rounded-md" >
                        <div className="flex flex-row items-center justify-center">
                            <img src={LogoWhite} className='w-[50px]' />
                            {collapsed ? null : <div className="flex flex-col items-center justify-center">
                                <h2 className='text-white uppercase text-md font-bold'>Explore Islam</h2>
                                <h3 className='text-white text-[9px]' >Wisdom for Young Minds</h3>
                            </div>}
                        </div>
                    </div>
                    <Menu onClick={e => navigate(e.key)} theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
                </Sider> : null}
            <Layout>
                {isLoggedIn ?
                    <Header style={{ padding: 0, background: colorBgContainer }} />
                    : null
                }
                <Content style={{ margin: '15px 16px' }}>
                    <div
                        style={{
                            padding: isLoggedIn ? 24 : "auto",
                            minHeight: isLoggedIn ? 360 : "inherit",
                            background: isLoggedIn ? colorBgContainer : "transparent",
                            borderRadius: isLoggedIn ? borderRadiusLG : "auto",
                        }}
                    >
                        <Navigation />
                    </div>
                </Content>
                {isLoggedIn ? <Footer style={{ textAlign: 'center' }}>
                    Ant Design ©{new Date().getFullYear()} Created by Ant UED
                </Footer> : null}
            </Layout>
        </Layout>
    );
};
export default App;