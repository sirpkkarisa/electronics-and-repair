import React from 'react'

const ReviewItem = () => {
    return (
        <li className='Item ReviewItem'>
               <ul>
                    <li><h5>Reviewer</h5></li>
                    <li>Date: <strong>01/01/2020</strong></li>
                    <li>Comments: This is an item's description so that the customers can view
                    </li>
                    <li>Rating: <strong>5 stars</strong></li>
               </ul>
        </li>
    )
}

export default ReviewItem
