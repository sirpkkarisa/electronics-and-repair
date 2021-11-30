import { Link } from 'react-router-dom'
import { useState } from 'react'
import InputField from '../HTMLElems/InputField'
import ArrowBack from '@mui/icons-material/ArrowDownward'
import Close from '@mui/icons-material/Close'
import StarBorderOutlinedIcon from '@mui/icons-material/Star';

const SomeReviews = ({onAddReview}) => {
    const [isForm, setForm] = useState(false)
    const [currentVal, setCurrentVal ] = useState(0)
    const [hoverVal, setHoverVal ] = useState(undefined)
    const [postedBy, setName ] = useState('')
    const [comment, setComment ] = useState('')
    
    const handleStarClicks = (val) => {
        setCurrentVal(val)
    }

    const handleMouseHover = (val) => {
        setHoverVal(val)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        const date = new Date().toLocaleDateString()
        onAddReview({postedBy, comment, rating: currentVal, date})
    }
    const onClick=(e)=> {
        e.preventDefault()
        setForm(!isForm)
    }
    const stars = Array(5).fill(0);
    const starsJSX = stars.map((_,i)=>{
        return (<span key={i} 
                      onClick={()=> handleStarClicks(i + 1)} 
                      onMouseOver={()=> handleMouseHover(i+1)} 
                      onMouseLeave={() => handleMouseHover(undefined)} style={{
                        marginRight:10,
                        color:(hoverVal || currentVal) > i ? 'green': ''
                    }}>
                    <StarBorderOutlinedIcon/>
                </span>)
            })
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
                    <InputField placeholder='Name' 
                        onChange={(e) => setName(e.target.value)}/>
                    <InputField
                        placeholder='Comment'
                        divClass='comment-div'
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <div className='rating'>
                        {starsJSX}
                    </div>
                    <div><button className='review-btn' onClick={handleSubmit}>Review</button></div>
                </form>
                }
        </div>
    )
}

export default SomeReviews
