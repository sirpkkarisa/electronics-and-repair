import Item from "./Item"


const Electronics = () => {
    return (
        <div className='DynamicRegion'>
            <h2>Available Electronics & Accessories</h2>
            <ul className='ItemList'>
                <Item 
                src='https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='Image 1'
                />
                <Item 
                src='https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='Image 1'
                />
                <Item 
                src='https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='Image 1'
                />
                <Item 
                src='https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
                alt='Image 1'
                />
            </ul>
        </div>
    )
}

export default Electronics
