import { Link } from 'react-router-dom'
import { useState } from 'react'
import InputField from '../HTMLElems/InputField'
import ArrowBack from '@mui/icons-material/ArrowDownward'
import Close from '@mui/icons-material/Close'
import StarBorderOutlinedIcon from '@mui/icons-material/StarBorderOutlined';

const Reviews = () => {
    const [isForm, setForm] = useState(false)

    const onClick=(e)=> {
        e.preventDefault()
        setForm(!isForm)
    }
    return (
        <div className='SomeReviews'>
            <span>Reviews</span>
            <ul>
                <li><Link to='/reviews/#reviews'>Review One</Link></li>
                <li><Link to='/reviews/#reviews'>Review One</Link></li>
                <li><Link to='/reviews/#reviews'>Review One</Link></li>
                <li><Link to='/reviews/#reviews'>Review One</Link></li>
                <li><Link to='/reviews/#reviews'>Review One</Link></li>
            </ul>
            <div><button className='custom-button' onClick={onClick}>Feedback{ isForm?<Close/>:<ArrowBack/>} </button></div>
                {
                   isForm && <form className='ServiceForm ReviewForm'>
                    <InputField
                        placeholder='Comment'
                        divClass='comment-div'
                    />
                    <div className='rating'>
                        <StarBorderOutlinedIcon/>
                        <StarBorderOutlinedIcon/>
                        <StarBorderOutlinedIcon/>
                        <StarBorderOutlinedIcon/>
                        <StarBorderOutlinedIcon/>
                    </div>
                    <div><button className='review-btn'>Review</button></div>
                </form>
                }
        </div>
    )
}

export default Reviews
