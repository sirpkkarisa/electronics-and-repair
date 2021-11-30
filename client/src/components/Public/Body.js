import InputField from "../HTMLElems/InputField"
import SomeReviews from "./SomeReviews"
import ServicesOffered from "./ServicesOffered"
import { Outlet } from "react-router-dom"

const Body = ({ onAddReview, onSearchElectronics }) => {
 
    return (
        <div className='Body'>
            <InputField 
                placeholder='Search Electronics'
                divClass='search-div electronics-search'
                onChange={(e) => onSearchElectronics(e.target.value)}
                />
            <div className='hero-section'>
                <ServicesOffered/>
                <Outlet/>
                <SomeReviews onAddReview={onAddReview}/>
            </div>
        </div>
    )
}

export default Body
