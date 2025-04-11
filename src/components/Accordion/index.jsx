import { Checkbox, Collapse } from 'antd'
import Panel from 'antd/es/splitter/Panel'
import React from 'react'
import { APP_ICONS } from '../../common/icons'
import AccordionItems from './AccordionItems'

const Accordion = ({ wrapperClasses = "", title = "Course Completion", items = [] }) => {
    return (
        <div className={`${wrapperClasses} col-span-12 md:col-span-4 bg-white shadow-lg rounded-xl`}>
            <div className='p-4 bg-gray-300'>
                <h2 className='text-xl font-bold'>{title}</h2>
            </div>
            {/* <Collapse items={items} /> */}
            {/* <Collapse>
                {items.length > 0 ?
                    items.map((item, index) => (
                        <Panel header={item?.header} key={index}>
                            {item.childrens.length > 0 ?
                                item.childrens.map((child, idx) => (
                                    <div className="grid grid-cols-12" key={idx}>
                                        <div className="col-span-2">
                                            <Checkbox />
                                        </div>
                                        <div className="col-span-7">
                                            {child.title}
                                        </div>
                                        <div className="col-span-3">
                                            {child.is_video ? <APP_ICONS.VideoIcon /> :
                                                child.is_audio ? <APP_ICONS.AudioIcon /> :
                                                    child.is_pdf ? <APP_ICONS.PDFIcon /> : null
                                            } {child.duration} mins
                                        </div>
                                    </div>
                                ))
                                : null}
                        </Panel>
                    ))
                    : ""}
            </Collapse> */}
            <AccordionItems />
            
        </div>
    )
}

export default Accordion