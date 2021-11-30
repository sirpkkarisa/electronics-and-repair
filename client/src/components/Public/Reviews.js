import ReviewItem from "./ReviewItem"



const Reviews = ({data}) => {
    const itemsJSX = data.map(item => {
        return (<li key={item.id} className='Item ReviewItem'>
                <ReviewItem data={item}/>
        </li>)
    })
    return (
        <div className='DynamicRegion'>
            <h2>Generally People Appreciate Our Services</h2>
            <ul className='ItemList'>
                {itemsJSX}
            </ul>
        </div>
    )
}

export default Reviews
