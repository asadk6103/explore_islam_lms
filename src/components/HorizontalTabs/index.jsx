import React from 'react'

const HorizontalTabs = ({ items, activeTab, handleChangeTab }) => {
    console.log({activeTab})
    return (
        <div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700">
            <ul className="flex flex-wrap -mb-px">
                {items.length > 0 ?
                    items.map((item, idx) => (
                        <li className="me-2" key={item.key}>
                            <a
                                onClick={() => handleChangeTab(item.key)}
                                className={`${activeTab === item.key ? "!text-blue-900" : "!text-gray-500 hover:!text-blue-900 border-transparent hover:border-blue-900"} inline-block p-4 border-b-2 `}
                            >
                                {item.label}
                            </a>
                        </li>
                    ))
                    : null}
            </ul>
        </div>
    )
}

export default HorizontalTabs
