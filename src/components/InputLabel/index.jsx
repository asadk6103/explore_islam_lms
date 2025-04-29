import classNames from 'classnames'
import React from 'react'

const InputLabel = ({ label = "" }) => {
    const labelClasses = classNames("block mb-2 text-sm font-medium text-gray-900 dark:text-white")
    return (
        <label className={labelClasses}>{label}</label>
    )
}

export default InputLabel