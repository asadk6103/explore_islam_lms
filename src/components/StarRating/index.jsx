import React from 'react'
import { Rating } from 'react-simple-star-rating'

const StarRating = ({ handleRating = () => { }, onPointerEnter = () => { }, onPointerLeave = () => { }, onPointerMove = () => { } }) => {
    const [rating, setRating] = React.useState(0)
    // const handleRating = (rate) => {
    //     setRating(rate)

    //     // other logic
    // }
    // // Optinal callback functions
    // const onPointerEnter = () => console.log('Enter')
    // const onPointerLeave = () => console.log('Leave')
    // const onPointerMove = (value, index) => console.log(value, index)

    return (
            <Rating
            style={{
                background: "red",
            }}
                onClick={handleRating}
                onPointerEnter={onPointerEnter}
                onPointerLeave={onPointerLeave}
                onPointerMove={onPointerMove}
            /* Available Props */
            />
    )
}

export default StarRating
