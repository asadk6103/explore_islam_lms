import React from 'react'
import WavesSvg from '@/assets/static/svgs/wave.svg'
import Box from '../../components/Box'
import CategoriesCards from '../../components/CategoriesCards'
import { SAMPLE_COURSES } from '../Explore/constants'

const Dashboard = () => {
  return (
    <div>
      <div className="grid grid-cols-1">
        <Box boxClasses="bg-white px-8 py-2 pb-6 shadow-lg">
          <div>
            <h1 className='text-2xl font-semibold flex flex-row items-center gap-2' >Welcome Back,
              <span className='text-blue-900 font-bold' >Asad Mehmood</span>
              <img src={WavesSvg} alt='Waves Image' className='w-[50px]' />
            </h1>
          </div>

          <CategoriesCards variant="selectedCourse"  progress={50} title={"Lets continue learning"} courses={SAMPLE_COURSES} />
        </Box>
      </div>
    </div>
  )
}

export default Dashboard
