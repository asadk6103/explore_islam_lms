import React from 'react'
import VideoBackgroundImage from '@/assets/static/images/video.png'
import { APP_ICONS } from '../../common/icons'
const VideoBox = ({ noOfLikes, noOfDislikes }) => {
  return (
    <div className='w-full'>
      <img src={VideoBackgroundImage} className='w-full' />
      <div className='flex  flex-row items-center gap-4 py-4 mb-2'>
        <div className='flex flex-row items-center  gap-1'>
          <APP_ICONS.LikeIcon className='text-green-700' />
          <p className='font-bold text-green-700' >{noOfLikes}</p>
        </div>
        <div className='flex flex-row items-center  gap-1'>
          <APP_ICONS.DisLikeIcon className='text-red-700' />
          <p className='font-bold text-red-700' >{noOfDislikes}</p>
        </div>
      </div>
    </div>
  )
}

export default VideoBox