import React from 'react'
import Box from '../../../components/Box'
import Avatar from '@/assets/static/images/avatar.png'
import { APP_ICONS } from '../../../common/icons'
import Button from '../../../components/Button'

const BasicProfile = () => {
  return (
    <Box>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full md:w-[80%] xl:w-[60%]'>
        <div className='flex flex-row items-center gap-3 mb-4 col-span-2'>
          <div className='relative'>
            <div className='w-[150px] h-[150px] p-2 border rounded-full shadow-lg relative overflow-hidden bg-blue-50'>
              <img src={Avatar} alt='profile_image' className='w-full' />
            </div>
            <div className='absolute right-[10px] bottom-[10px] z-[99] bg-blue-900 rounded-full p-1.5 w-[30px] h-[30px] flex flex-row items-center jsutify-center'>
              <APP_ICONS.CameraIcon className='text-white' />
            </div>
          </div>
        </div>
        <div className='flex flex-row items-center gap-3 mb-2'>
          <span className='font-bold text-gray-400'>Full Name</span>
          <span>Full Name</span>
        </div>
        <div className='flex flex-row items-center gap-3 mb-2'>
          <span className='font-bold text-gray-400'>Email Address</span>
          <span>someone@somemail.com</span>
        </div>
        <div className='flex flex-row items-center gap-3 mb-2'>
          <span className='font-bold text-gray-400'>Contact Number 1</span>
          <span>Contact Number 1</span>
        </div>
        <div className='flex flex-row items-center gap-3 mb-2'>
          <span className='font-bold text-gray-400'>Contact Number 2</span>
          <span>Contact Number 2</span>
        </div>
        <div className='flex flex-row items-center gap-3 mb-2 col-span-2'>
          <span className='font-bold text-gray-400'>Address</span>
          <span>Address</span>
        </div>
        <div className='flex flex-row items-center gap-3 mb-2'>
          <Button label='Change Password' className='!p-0 !text-blue-900 underline !font-bold' variant='link' />
        </div>
      </div>
    </Box>
  )
}

export default BasicProfile
