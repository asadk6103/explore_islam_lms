import React from 'react'
import Box from '../../components/Box'
import { Col, Flex, Layout, Row } from 'antd'
import AutoCompleteSearch from '../../components/AutoCompleteSearch'
import BackgroundExplore from '@/assets/static/bg/bg_explore.png'
import { APP_ICONS } from '../../common/icons'
import Button from '../../components/Button'
import CategoriesCards from '../../components/CategoriesCards'
import { SAMPLE_COURSES } from './constants'

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

               <CategoriesCards buttonColor={"!bg-green-500"} title={"Recommended for your kid"} courses={SAMPLE_COURSES} />
               <CategoriesCards buttonColor={"!bg-orange-500"}title={"Recently Uploaded"} courses={SAMPLE_COURSES} />
               <CategoriesCards buttonColor={"!bg-red-500"} title={"Kidz favourite"} courses={SAMPLE_COURSES} />
               <CategoriesCards buttonColor={"!bg-purple-500"} title={"Life of Property (PBUH)"} courses={SAMPLE_COURSES} />
               <CategoriesCards title={"Battles In Islam"} courses={SAMPLE_COURSES} />
               <CategoriesCards title={"Islamic Places"} courses={SAMPLE_COURSES} />
               <CategoriesCards title={"Islamic Heroes"} courses={SAMPLE_COURSES} />
            </Layout>
        </>
    )
}

export default Explore
