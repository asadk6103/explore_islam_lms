import classNames from 'classnames'
import React from 'react'

const Stack = ({ children, direction, alignItems, justifyContent, gap }) => {
  const stackClass = classNames("flex", {
    "flex-row": direction === "row",
    "flex-col": direction === "col",
    "items-start": alignItems === "start",
    "items-end": alignItems === "end",
    "items-center": alignItems === "center",
    "justify-start": justifyContent === "start",
    "justify-end": justifyContent === "end",
    "justify-center": justifyContent === "center",
    "justify-between": justifyContent === "between",
  })
  return (
    <div className={`${stackClass} ${gap ? `gap-${gap}` : ""}`}>{children}</div>
  )
}

export default Stack