import React, { useState } from 'react';
import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import { Breadcrumb, Button, Dropdown, Layout, Menu, Space, theme } from 'antd';
import { ROUTES } from './navigation/constants';
const { Header, Content, Footer, Sider } = Layout;
import LogoWhite from '@/assets/static/logo/logo_white.png'
import Navigation from './navigation';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../pages/Login/loginSlice';
import { APP_ICONS } from '../common/icons';


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


    // const items = ROUTES.map((e, i) => (getItem(e.label.includes("-") ? e.label.split("-").map(e => (e.charAt(0).toUpperCase() + e.slice(1) + " ")) : e.label.charAt(0).toUpperCase() + e.label.slice(1),
    //     e.url, <e.icon className='w-[18px] h-[18px]' />,
    //     e.childrens.length > 0 ?
    //         e.childrens.map((c, ci) => (getItem(
    //             c.label.includes("-") ?
    //                 c.label.split("-").map(e => (e.charAt(0).toUpperCase() + e.slice(1) + " "))
    //                 : c.label.charAt(0).toUpperCase() + c.label.slice(1), (`${e.url}${c.url}`), <c.icon />))) : null)))

    const getChildItems = (childrens, parent) => {
        console.log({ childrens })
        const items = childrens.map((c, ci) => (getItem(
            c.label.includes("-") ?
                c.label.split("-").map(e => (e.charAt(0).toUpperCase() + e.slice(1) + " "))
                : c.label.charAt(0).toUpperCase() + c.label.slice(1), (`${parent.url}${c.url}`), <c.icon />)))

        if (parent.label === "account") {
            console.log("I am here")
            items.push(getItem("Log out", "/logout", <APP_ICONS.LogOutIcon />))
        }
        return items
    }

    return (
        <Layout style={{ minHeight: "100vh" }}>
            {isLoggedIn ?
                <Header style={{ display: 'flex', flexDirection: "row", alignItems: 'center', justifyContent: "space-between", height: 80 }}>
                    <div className="flex flex-row gap-2 items-center bg-gray-700 px-4 py-2 rounded-lg" >
                        <img src={LogoWhite} className='w-[50px]' />
                        <div className='text-center'>
                            <h2 className='text-white uppercase text-md font-bold'>Explore Islam</h2>
                            <h3 className='text-white text-[9px]' >Wisdom for Young Minds</h3>
                        </div>
                    </div>
                    {/* <Menu
                        theme="dark"
                        mode="horizontal"
                        onClick={e => navigate(e.key)}
                        defaultSelectedKeys={['2']}
                        items={items}
                        style={{ flex: 1, minWidth: 0, justifyContent:"flex-end", alignItems:"center" }}
                    /> */}

                    <div className='flex flex-row gap-2'>
                        {ROUTES.filter(r => r.showInMenu).map((r, i) => (
                            r.childrens.length > 0 ?
                                <>
                                    <Dropdown arrow={true} key={i} menu={{
                                        items: getChildItems(r.childrens, r),

                                        onClick: ({ key, e }) => {
                                            if (!key.includes("logout")) {
                                                navigate(key)
                                            } else {
                                                console.log("handle Logpout")
                                            }
                                        }
                                    }} placement="bottomLeft">
                                        <Button icon={<r.icon className='w-[18px] h-[18px]' />} key={i} >
                                            <Space>
                                                {r.label.includes("-") ? r.label.split("-").map(e => (e.charAt(0).toUpperCase() + e.slice(1) + " ")) : r.label.charAt(0).toUpperCase() + r.label.slice(1)}
                                                <APP_ICONS.ChevronDownIcon className='w-[18px] h-[18px]' />
                                            </Space>
                                        </Button>
                                    </Dropdown>
                                </>
                                :
                                <Button onClick={e => {
                                    navigate(r.url)
                                }} icon={<r.icon className='w-[18px] h-[18px]' />} key={i} >{r.label.includes("-") ? r.label.split("-").map(e => (e.charAt(0).toUpperCase() + e.slice(1) + " ")) : r.label.charAt(0).toUpperCase() + r.label.slice(1)}</Button>
                        ))}
                    </div>

                </Header>
                : null
            }
            {/* {isLoggedIn ?
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
                </Sider> : null} */}

            <Layout>

                <Content >
                    {/* <div
                        style={{
                            padding: isLoggedIn ? 24 : 0,
                            // minHeight: isLoggedIn ? 360 : "100vh",
                            // background: isLoggedIn ? colorBgContainer : "transparent",
                            borderRadius: isLoggedIn ? borderRadiusLG : "auto",
                        }}
                    > */}
                    <Navigation />
                    {/* </div> */}
                </Content>
                {isLoggedIn ? <Footer style={{ textAlign: 'center' }}>
                    Explore Islam &copy;{new Date().getFullYear()} | Designed and Developed By: <a target='_blank' href='https://octasoftavenue.com' className='font-bold' >ItsAsad.PK</a>
                </Footer> : null}
            </Layout>
        </Layout >
    );
};
export default App;