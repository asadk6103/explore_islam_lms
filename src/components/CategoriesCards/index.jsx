import React from 'react'
import Slider from './Slider'
import { Layout } from 'antd'
import Box from '../Box'

const CategoriesCards = ({title, courses, buttonColor=null}) => {
  return (
    <Layout style={{
      width: "100%",
      padding: 20
    }}>
      <Box title={title}>
        <Slider courses={courses} buttonColor={buttonColor} />
      </Box>
    </Layout>
  )
}

export default CategoriesCards
