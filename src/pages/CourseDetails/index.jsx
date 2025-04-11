import React from 'react'
import Box from '../../components/Box'
import VideoBox from '../../components/VideoBox'
import Accordion from '../../components/Accordion'
import { COURSE_COMPLETION_DETAILS } from './constants'

const CourseDetails = ({courseTitle = "Title of the course"}) => {

  return (
    <Box title={courseTitle}>
      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-8">
          <VideoBox />
        </div>
          <Accordion items={COURSE_COMPLETION_DETAILS} />
      </div>
    </Box>
  )
}

export default CourseDetails