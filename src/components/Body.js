import Electronics from "./Electronics"
import InputField from "./InputField"
import SomeReviews from "./SomeReviews"
import ServicesOffered from "./ServicesOffered"
// import Services from "./Services"
// import Reviews from "./Reviews"

const Body = () => {
    return (
        <div className='Body'>
            <InputField 
                placeholder='Search Electronics'
                divClass='search-div electronics-search'
                />
            <div className='hero-section'>
                <ServicesOffered/>
                <Electronics/>
                {/* <Services/> */}
                {/* <Reviews/> */}
                <SomeReviews/>
            </div>
        </div>
    )
}

export default Body
