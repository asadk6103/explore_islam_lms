

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
}


export const ROUTES = [
    {
        url: `/${APP_SLUGS.dashboard}`,
        label: APP_SLUGS.dashboard,
        redirectPath: APP_SLUGS.redirectPath,
        icon: <></>,
        screen: "",
        isProtected: false,
        showInMenu: true,
        role: ["admin"],
        permission: "dashboard",
        childrens: []
    },
    {
        url: `/${APP_SLUGS.account}`,
        label: APP_SLUGS.account,
        redirectPath: APP_SLUGS.redirectPath,
        icon: <></>,
        screen: "",
        isProtected: false,
        showInMenu: true,
        role: ["admin"],
        permission: "dashboard",
        childrens: [
            {
                url: `/${APP_SLUGS.account}/${APP_SLUGS.me}`,
                label: APP_SLUGS.account,
                redirectPath: APP_SLUGS.redirectPath,
                icon: <></>,
                screen: "",
                isProtected: false,
                showInMenu: true,
                role: ["admin"],
                permission: "dashboard",
                childrens: []
            },
            {
                url: `/${APP_SLUGS.account}/${APP_SLUGS.changePassword}`,
                label: APP_SLUGS.changePassword,
                redirectPath: APP_SLUGS.redirectPath,
                icon: <></>,
                screen: "",
                isProtected: false,
                showInMenu: true,
                role: ["admin"],
                permission: "dashboard",
                childrens: []
            },

        ]
    }
]