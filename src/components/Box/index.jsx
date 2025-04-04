import { Layout } from 'antd'
import React from 'react'

const Box = ({boxClasses, children}) => {
  return (
    <Layout className={`${boxClasses}`} >
        {children}
    </Layout>
  )
}

export default Box
