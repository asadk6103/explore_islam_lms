import classNames from 'classnames'
import React from 'react'

const Typography = ({ variant = "p", children, classes = null, fontWeight = "", color = "" }) => {

    const className = classNames(`${classes ? classes : null} font-poppins leading-none  text-${color}`, {
        "capitalize text-dark font-bold text-primary text-[32px] lg:text-[40px] xl:text-[48px]": variant === "h1",
        "capitalize text-dark font-semibold text-[24px] lg:text-[30px] xl:text-[38px]": variant === "h2",
        "capitalize text-dark font-semibold text-[20px] lg:text-[30px] xl:text-[34px]": variant === "h3",
        "capitalize text-dark font-semibold text-[16px] lg:text-[22px] xl:text-[26px]": variant === "h4",
        "capitalize text-dark font-semibold text-[14px] lg:text-[20px] xl:text-[22px]": variant === "h5",
        "capitalize text-dark font-semibold text-[12px] lg:text-[16px] xl:text-[18px]": variant === "h6",
        "text-gray-800 text-[12px] lg:text-[14px] xl:text-[16px]": variant === "p",
        "text-gray-800 text-[10px] lg:text-[13px] xl:text-[15px]": variant === "span",
        "text-gray-800 text-[8px] lg:text-[10px] xl:text-[12px]": variant === "small",
        "text-gray-800 text-[12px] lg:text-[14px] xl:text-[16px]": variant === "button",
        "font-bold": fontWeight === "bold",
    })
    return (
        <p className={className}>{children}</p>
    )
}

export default Typography