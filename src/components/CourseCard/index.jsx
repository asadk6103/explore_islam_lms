import { Card, Typography } from 'antd'
import React from 'react'
import Button from '../Button'
import { useNavigate } from 'react-router-dom'
import { APP_SLUGS } from '../../layout/navigation/constants'

const CourseCard = ({item, buttonColor}) => {
  const navigate = useNavigate()
  return (
   <Card
    hoverable
    cover={item?.banner ? <img alt={item?.title} src={item?.banner} /> : null}
    style={{
        width: "100%",
        textAlign:"left"
    }}
   >
    <Typography.Title className='text-left' level={4}>{item?.name ? item?.name?.slice(0,50) + "..." : item?.name}</Typography.Title>
    <Typography.Text className='!text-left'>{item?.description ? item?.description?.slice(0,70) + "..." : item?.description}</Typography.Text>
    <Button onClick={() => navigate(`/${APP_SLUGS.courseDetails}`)} className={`w-full mt-4 ${buttonColor}`} label='Explore Now' ></Button>
   </Card>
  )
}

export default CourseCard
