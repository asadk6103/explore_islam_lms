import { Col, Layout, message, Row, Space, Typography } from 'antd'
import React from 'react'
import Box from '../../components/Box'
import TextInput from '../../components/TextInput'
import { useForm } from 'react-hook-form'
import Button from '../../components/Button'
import PasswordInput from '../../components/PasswordInput'
import { useDispatch } from 'react-redux'
import { loginRequested } from './loginSlice'

const Login = () => {
  const { control, handleSubmit, formState: { errors }, reset, clearErrors } = useForm({
    mode: onchange
  })
  const [isLoading, setIsLoading] = React.useState(false)
  const dispatch = useDispatch()


  const handleSubmitLogin = async (values) => {
    try {
      setIsLoading(true)
      await dispatch(loginRequested({
        username: values.username,
        password: values.password
      })).unwrap()
      setIsLoading(false)
    } catch (err) {
      setIsLoading(false)
      console.error(err)
    }
  }

  return (
    <>
      {console.log({ errors })}
      <Box boxClasses={"!min-h-[100vh] flex items-center justify-center"}>
        <div className="grid grid-col-1 items-center bg-white p-4 min-w-[90%] md:min-w-[450px] shadow-lg border-t-4">
          <Typography.Title className='text-center' level={3} >Login</Typography.Title>
          <form className='grid grid-col-1 gap-4' onSubmit={handleSubmit(handleSubmitLogin)} >
            <TextInput rules={{
              required: {
                value: true,
                message: "This field is required"
              }
            }} error={errors.username ? errors.username.message : null} control={control} name={"username"} label={"User Name"} placeholder={"Please Enter your User name"} />
            <PasswordInput rules={{
              required: {
                value: true,
                message: "This field is required"
              }
            }} error={errors.password ? errors.password.message : null} control={control} name={"password"} label={"Password"} placeholder={"Please Enter your Password"} />
            <div className='text-right'>
              <Typography.Link className='font-bold !text-dark'>Fogotten Password</Typography.Link>
            </div>
            <Button loading-={isLoading} type="submit" label='Login' />
          </form>
        </div>
      </Box>
    </>
  )
}

export default Login
