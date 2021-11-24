import ReviewItem from "./ReviewItem"



const Reviews = () => {
    return (
        <div className='DynamicRegion'>
            <h2>Generally People Appreciate Our Services</h2>
            <ul className='ItemList'>
                <ReviewItem/>
                <ReviewItem/>
                <ReviewItem/>
                <ReviewItem/>
            </ul>
        </div>
    )
}

export default Reviews
