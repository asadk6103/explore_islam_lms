import Dashboard from '@/pages/Dashboard'
import { APP_ICONS } from '../../common/icons'
import Profile from '../../pages/Profile'
import ChangePassword from '../../pages/ChangePassword'
import Explore from '../../pages/Explore'
import CourseDetails from '../../pages/CourseDetails'

export const APP_SLUGS = {
    redirectPath: "/",
    dashboard: "dashboard",
    subscriptions: "subscriptions",
    billing: "billing",
    account: "account",
    me: "me",
    profile: "profile",
    changePassword: "change-password",
    forgottenPassword: "forgotten-password",
    myCourses: "my-courses",
    explore: "explore",
    courseDetails: 'course-details'
}


export const ROUTES = [
    {
        url: `/${APP_SLUGS.dashboard}`,
        label: APP_SLUGS.dashboard,
        redirectPath: APP_SLUGS.redirectPath,
        icon: APP_ICONS.DashboardIcon,
        screen: Dashboard,
        isProtected: true,
        showInMenu: false,
        role: ["admin"],
        permission: "dashboard",
        childrens: []
    },
    {
        url: `/${APP_SLUGS.explore}`,
        label: APP_SLUGS.explore,
        redirectPath: APP_SLUGS.redirectPath,
        icon: APP_ICONS.DashboardIcon,
        screen: Explore,
        isProtected: true,
        showInMenu: true,
        role: ["admin"],
        permission: "dashboard",
        childrens: []
    },
    {
        url: `/${APP_SLUGS.courseDetails}`,
        label: APP_SLUGS.courseDetails,
        redirectPath: APP_SLUGS.redirectPath,
        icon: APP_ICONS.DashboardIcon,
        screen: CourseDetails,
        isProtected: true,
        showInMenu: false,
        role: ["admin"],
        permission: "dashboard",
        childrens: []
    },
    {
        url: `/${APP_SLUGS.myCourses}`,
        label: APP_SLUGS.myCourses,
        redirectPath: APP_SLUGS.redirectPath,
        icon: APP_ICONS.DashboardIcon,
        screen: Dashboard,
        isProtected: true,
        showInMenu: true,
        role: ["admin"],
        permission: "dashboard",
        childrens: []
    },
    {
        url: `/${APP_SLUGS.account}`,
        label: APP_SLUGS.account,
        redirectPath: APP_SLUGS.redirectPath,
        icon: APP_ICONS.AccountIcon,
        screen: "",
        isProtected: true,
        showInMenu: true,
        role: ["admin"],
        permission: "dashboard",
        childrens: [
            {
                url: `/${APP_SLUGS.me}`,
                label: APP_SLUGS.profile,
                redirectPath: APP_SLUGS.redirectPath,
                icon: APP_ICONS.ProfileIcon,
                screen: Profile,
                isProtected: true,
                showInMenu: true,
                role: ["admin"],
                permission: "dashboard",
                childrens: []
            },
            {
                url: `/${APP_SLUGS.changePassword}`,
                label: APP_SLUGS.changePassword,
                redirectPath: APP_SLUGS.redirectPath,
                icon: APP_ICONS.ChangePasswordIcon,
                screen: ChangePassword,
                isProtected: true,
                showInMenu: true,
                role: ["admin"],
                permission: "dashboard",
                childrens: []
            },

        ]
    }
]