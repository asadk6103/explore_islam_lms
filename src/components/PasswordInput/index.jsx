import { Input, Typography } from 'antd'
import React from 'react'
import { Controller } from 'react-hook-form'

const PasswordInput = ({ name, label, control, placeholder, rules, error }) => {
    return (
        <div>
            <Controller
                name={name}
                control={control}
                defaultValue={""}
                rules={rules}
                render={({ field }) => (
                    <>
                        <Typography.Text>{label}</Typography.Text>
                        <Input.Password  status={error ? "error" : ""} {...field} placeholder={placeholder} />
                        {error ? <Typography.Text className="!text-red-500">{error}</Typography.Text> : null}
                    </>
                )}
            />
        </div>
    )
}

export default PasswordInput
