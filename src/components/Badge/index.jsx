import { Icons } from '@/common/icons'
import classNames from 'classnames'
import React from 'react'
import Stack from '../Stack'

const Badge = ({ variant = "default", label, hasCloseIcon = false, handleClose = () => { } }) => {

  const combinedClasses = classNames("text-xs font-medium me-2 px-2.5 py-0.5 rounded-sm", {
    "bg-primary text-white": variant === "default",
    "bg-red-100 text-red-800": variant === "danger",
    "bg-green-100 text-green-800": variant === "success",
    "bg-yellow-100 text-yellow-800": variant === "warning",
    "bg-blue-100 text-blue-800": variant === "info",
    "bg-indigo-100 text-indigo-800": variant === "indigo",
    "bg-purple-100 text-purple-800": variant === "purple",
  })
  return (
    <Stack direction={"row"} alignItems={"center"} justifyItems={"between"} gap={2}>
      <span className={combinedClasses}>
        {label} {hasCloseIcon ? <Icons.Close onClick={handleClose} /> : null}
      </span>
    </Stack>
  )
}

export default Badge