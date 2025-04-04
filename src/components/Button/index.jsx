import React from 'react'
import { Button as AntdButton } from 'antd'
const Button = ({ className, label = "Save & Continue", variant = null, onClick, type, loading = false }) => {
    return (
        <AntdButton loading={loading} htmlType={type} className={className} type={variant ? variant : "primary"} onClick={onClick} >{label}</AntdButton>
    )
}

export default Button
