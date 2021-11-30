import React from 'react'

const ReviewItem = ({ data }) => {
    return (
            <ul>
                <li><h5>{data.postedBy}</h5></li>
                <li>Date: <strong>{data.date}</strong></li>
                <li>Comments: {data.comment}</li>
                <li >Rating: <strong>{data.rating} stars</strong></li>
            </ul>
    )
}

export default ReviewItem
