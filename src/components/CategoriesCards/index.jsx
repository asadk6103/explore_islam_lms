import React from 'react'
import Slider from './Slider'
import { Layout } from 'antd'
import Box from '../Box'

const CategoriesCards = ({title, courses, buttonColor=null, variant= null, progress=null}) => {
  return (
    <div>
      <Box title={title}>
        <Slider courses={courses} buttonColor={buttonColor} variant={variant} progress={progress} />
      </Box>
    </div>
  )
}

export default CategoriesCards
