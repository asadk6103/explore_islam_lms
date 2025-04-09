import { Card, Typography } from 'antd'
import React from 'react'
import Button from '../Button'

const CourseCard = ({item, buttonColor}) => {
  return (
   <Card
    hoverable
    cover={item?.banner ? <img alt={item?.title} src={item?.banner} /> : null}
    style={{
        width: "100%",
        textAlign:"left"
    }}
   >
    <Typography.Title className='text-left' level={4}>{item?.name}</Typography.Title>
    <Typography.Text className='!text-left'>{item?.description ? item?.description?.slice(0,70) + "..." : item?.description}</Typography.Text>
    <Button className={`w-full mt-4 ${buttonColor}`} label='Explore Now' ></Button>
   </Card>
  )
}

export default CourseCard
