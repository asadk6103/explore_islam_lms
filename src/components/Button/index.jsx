import React from "react";
import classNames from "classnames";

export default function Button({
    anchor = false,
    to = "",
    children,
    variant = "primary",
    size = "lg",
    className = "",
    onClick = null,
    disabled,
    ...rest
}) {
    const classes = classNames(
        "py-2.5 px-5 text-sm focus:outline-none rounded-full",
        {
            [className]: className,
            // Primary variant
            "bg-primary text-white font-bold hover:opacity-80 focus:opacity-80 focus:ring-2 focus:ring-primary active:ring-2 active:ring-primary":
                variant == "primary",
            // Secondary variant
            "bg-[#d3ebdb] !text-primary hover:!text-white hover:bg-primary focus:opacity-80 focus:ring-2 focus:ring-primary active:ring-2 active:ring-primary":
                variant == "secondary",
            // Danger variant
            "bg-[#E30808] !text-white hover:!text-white focus:opacity-80": variant == "danger",
            // Pending variant
            "!bg-yellow-500 !text-white hover:!text-white focus:opacity-80": variant == "pending",
            // Nulled variant
            "bg-[#505050] hover:opacity-80 focus:opacity-80 focus:ring-2 focus:ring-[#505050] active:ring-[#505050] active:ring-[#505050]":
                variant == "nulled",
            //OTP
            "bg-[#1E90FF] text-white hover:bg-[#1C86EE] focus:outline-none focus:ring-2 focus:ring-[#1E90FF] focus:ring-opacity-50 active:bg-[#187bcd]":
                variant == "otp",

            // Inverse variant
            "bg-white border-2 border-primary !text-primary hover:bg-primary hover:!text-white focus:opacity-80 focus:ring-2 focus:ring-primary":
                variant == "inverse-primary",
            // Button sizes
            "text-20 py-3 px-12": size == "lg",
            "text-14 py-2 px-5": size == "sm",
            "text-16 py-3 px-6": size == "md",
        }
    );

    return (
        <button disabled={disabled} className={classes} onClick={onClick} {...rest}>
            {children}
        </button>
    );
}