import React from "react";
import ReactSelect from "react-select";
import InputLabel from "../InputLabel";

export default function SearchSelect({ value = "", onChange = () => { }, options = [], label = "", isMulti = false, ...props }) {
    return (
        <div>
            <InputLabel>{label}</InputLabel>
            <ReactSelect
                classNames={{
                    control: (state) =>
                        "!bg-gray-50 border border-gray-300 !text-gray-900 !text-sm !rounded-lg focus:ring-blue-500 focus:border-blue-500 !w-full !p-0.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ",
                }}
                value={value}
                onChange={(selectedOptions) => {
                    onChange(selectedOptions);
                }}
                options={options}
                isMulti={isMulti}
                isClearable={true}
                {...props}
            />
        </div>
    );
}