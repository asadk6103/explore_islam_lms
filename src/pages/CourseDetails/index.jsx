import React from 'react'
import Box from '../../components/Box'
import VideoBox from '../../components/VideoBox'
import Accordion from '../../components/Accordion'
import { COURSE_COMPLETION_DETAILS, COURSE_META } from './constants'
import { useNavigate } from 'react-router-dom'
import { APP_SLUGS } from '../../layout/navigation/constants'
import StarRating from '../../components/StarRating'
import CategoriesCards from '../../components/CategoriesCards'
import { SAMPLE_COURSES } from '../Explore/constants'

const CourseDetails = ({ courseTitle = "Title of the course" }) => {
  const navigate = useNavigate()

  return (
    <div>
      <Box boxClasses='bg-white px-8 py-8 shadow-lg' backButtonClick={() => navigate(`/${APP_SLUGS.explore}`)} title={courseTitle} subTitle={
        <div className='flex flex-row items-center gap-2'>
          <p className='text-xs font-normal'>Last Updated: <span className='!text-blue-900 font-bold underline'>22 March 2025</span></p>
          <p className='text-xs font-normal'>Uploaded By: <span className='!text-blue-900 font-bold underline'>Administrator</span></p>
        </div>
      }   >
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 md:col-span-8">
            <VideoBox noOfLikes={357} noOfDislikes={50} />
          </div>
          <Accordion items={COURSE_COMPLETION_DETAILS} />
        </div>
      </Box>

      <Box boxClasses='bg-white px-8 py-8 shadow-lg' title={"About the Course"}>
        <div dangerouslySetInnerHTML={{
          __html: COURSE_META
        }} className="">

        </div>
      </Box>

      <Box boxClasses='bg-white px-8 py-8 shadow-lg' title={"Suggested for you"}>
        <CategoriesCards courses={SAMPLE_COURSES} />
      </Box>
    </div>
  )
}

export default CourseDetails