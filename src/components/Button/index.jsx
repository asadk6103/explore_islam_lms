import React from 'react'
import { Button as AntdButton } from 'antd'
const Button = ({ shape=null, className = "", label = "Save & Continue", variant = null, onClick = () => { }, type = "button", loading = false, icon = null, ...rest }) => {
    return (
        <AntdButton shape={shape} {...rest} icon={icon ? icon : null} loading={loading} htmlType={type} className={className} type={variant ? variant : "primary"} onClick={onClick} >{label}</AntdButton>
    )
}

export default Button
