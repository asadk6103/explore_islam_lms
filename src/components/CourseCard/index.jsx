import { Card, Typography } from 'antd'
import React from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { APP_SLUGS } from '../../layout/navigation/constants'

const CourseCard = ({ item, buttonColor, variant = null, progress = null }) => {
  const navigate = useNavigate()
  return (
    <Card
      hoverable
      cover={item?.banner ? <img alt={item?.title} src={item?.banner} /> : null}
      style={{
        width: "100%",
        textAlign: "left"
      }}
      className='!border !border-2 !border-gray-300'
    >
      <Typography.Title className='text-left' level={4}>{item?.name ? item?.name?.slice(0, 50) + "..." : item?.name}</Typography.Title>
      <Typography.Text className='!text-left'>{item?.description ? item?.description?.slice(0, 70) + "..." : item?.description}</Typography.Text>
      {progress ?
        <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700 mt-4">
          <div className="bg-blue-800 text-xs font-medium text-blue-100 text-center leading-none rounded-full" style={{
            width: `${progress}%`
          }}> {progress}%</div>
        </div>
        : null}
      <Button onClick={() => navigate(`/${APP_SLUGS.courseDetails}`)} className={`w-full mt-4 ${buttonColor}`} label={variant?.toLowerCase()?.includes("selected") ? "Continue" : "Explore now"} ></Button>
    </Card>
  )
}

export default CourseCard
