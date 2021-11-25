import InputField from "../HTMLElems/InputField"
import SomeReviews from "./SomeReviews"
import ServicesOffered from "./ServicesOffered"
import { Outlet } from "react-router-dom"

const Body = () => {
    return (
        <div className='Body'>
            <InputField 
                placeholder='Search Electronics'
                divClass='search-div electronics-search'
                />
            <div className='hero-section'>
                <ServicesOffered/>
                <Outlet/>
                <SomeReviews/>
            </div>
        </div>
    )
}

export default Body
