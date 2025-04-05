import React, { useState } from 'react';
import { Select } from 'antd';

const AutoCompleteSearch = ({ placeholder = "Search", style = {}, icon = null }) => {
    const [data, setData] = useState([]);
    const [value, setValue] = useState();
    const handleSearch = newValue => {
        // fetchData(newValue, setData);
    };
    const handleChange = newValue => {
        setValue(newValue);
    };
    return (
        <Select
            showSearch
            value={value}
            placeholder={placeholder}
            style={style}
            className='!rounded-full overflow-hidden'
            defaultActiveFirstOption={false}
            suffixIcon={icon}
            filterOption={false}
            onSearch={handleSearch}
            onChange={handleChange}
            notFoundContent={null}
            options={(data || []).map(d => ({
                value: d.value,
                label: d.text,
            }))}
        />
    )
}

export default AutoCompleteSearch
