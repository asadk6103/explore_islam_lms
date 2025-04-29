import classNames from 'classnames'
import React from 'react'
import InputLabel from '../InputLabel'
import Button from '../Button'
import { Controller } from 'react-hook-form'

const TextInput = ({ label = "", id = "", type = "text", placeholder = "", control = null, value = "", onChange = () => { }, rounded = "", prefixIcon = null, suffixIcon = null, error = null, errorMessage = "", suffixIconHandler = () => { }, ...rest }) => {
    const inputClasses = classNames("bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500", {
        "rounded-full": rounded === "full",
        "ps-10": prefixIcon
    })
    return (
        <div>
            <InputLabel label={label} />
            <div className="relative">
                {prefixIcon ? <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
                    {prefixIcon}
                </div> : null}
                <input 
                    value={value} onChange={onChange}
                    {...rest} type={type} id={id} className={inputClasses} placeholder={placeholder}
                />

                {suffixIcon ? <div onClick={suffixIconHandler} className="cursor-pointer absolute end-2.5 bottom-1 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm pr-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                    {suffixIcon}
                </div> : null}
            </div>
            {errorMessage ? <p class="mt-2 text-sm text-red-600 dark:text-red-500">
                {errorMessage}
            </p> : null}
        </div>
    )
}

export default TextInput