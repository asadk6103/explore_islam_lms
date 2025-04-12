import { Layout } from 'antd'
import React from 'react'
import { APP_ICONS } from '../../common/icons'

const Box = ({ boxClasses = "",subTitle = "", children, title = "", backButtonClick = null, rightContent = null }) => {
  return (
    <div className={`${boxClasses} mb-6`} >
      <div className='mb-2 flex flex-row items-center gap-4 '>
        {backButtonClick ?
          <div className='cursor-pointer p-3 hover:rounded-full border border-transparent hover:border-gray-700' onClick={backButtonClick}>
            <APP_ICONS.MoveLeftIcon />
          </div>
          : null}

        <div className={`${rightContent ? "flex flex-row items-center justify-between w-full" : null}`}>
          {title ? <h2 className={`text-lg md:text-xl lg:text-2xl font-bold text-gray-600`}>{title}</h2> : null}
          {subTitle ? <h2 className={`text-lg md:text-xl lg:text-2xl font-bold text-gray-600`}>{subTitle}</h2> : null}
          {rightContent ? <div>
            {rightContent}
          </div> : null}
        </div>
      </div>
      {children}
    </div>
  )
}

export default Box
