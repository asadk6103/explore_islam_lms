import React from 'react'
import Box from '../../components/Box'
import { Col, Flex, Layout, Row } from 'antd'
import AutoCompleteSearch from '../../components/AutoCompleteSearch'
import BackgroundExplore from '@/assets/static/bg/bg_explore.png'
import { APP_ICONS } from '../../common/icons'
import Button from '../../components/Button'

const Explore = () => {
    return (
        <>
            <Layout>
                <Row style={{
                    background: `url(${BackgroundExplore})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center center",
                    minHeight: "400px",
                    alignItems: "center",
                }}>
                    <Col
                        lg={{
                            span: 6, offset: 9
                        }}
                    >
                        <AutoCompleteSearch icon={<APP_ICONS.SearchIcon />} style={{ width: "100%",  overflow: "hidden !important" }} />
                        <div className='flex flex-row items-center justify-center gap-4 mt-4'>
                            <Button shape="round" label='Search' className='w-[200px]' variant={"default"} ></Button>
                            <Button shape="round" label='Explore Categories' className='w-[200px]' variant={"default"} ></Button>
                        </div>
                    </Col>
                </Row>

                <Row>
                    
                </Row>
            </Layout>
        </>
    )
}

export default Explore
