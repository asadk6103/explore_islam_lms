import { Layout } from 'antd'
import React from 'react'

const Box = ({ boxClasses = "", children, title = "" }) => {
  return (
    <div className={`${boxClasses}`} >
      <div className='mb-2'>
        {title ? <h2 className='text-lg md:text-xl lg:text-2xl font-bold text-gray-600'>{title}</h2> : null}
      </div>
      {children}
    </div>
  )
}

export default Box
