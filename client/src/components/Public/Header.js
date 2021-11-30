import InputField from '../HTMLElems/InputField'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <header className='Header'>
            <h1>EAP</h1>
            <InputField 
                placeholder='Search For Electronics & Services'
                divClass='search-div'
                />
            <ul className='navigation-list'>
                <li><Link to='/'>Electronics</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
                <li><Link to='/reviews'>Reviews</Link></li>
            </ul>
        </header>
    )
}

export default Header
