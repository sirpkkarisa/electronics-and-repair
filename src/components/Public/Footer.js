import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <footer className='Footer'>
            <ul>
                <li><Link to='/about'>About Us</Link></li>
                <li><Link to='/contacts'>Contacts</Link></li>
                <li>Follow Us:<br/>
                    <Link to='#social-media'>Facebook</Link><br/>
                    <Link to='#social-media'>Instagram</Link><br/>
                    <Link to='#social-media'>Twitter</Link>
                    </li>
                <li><Link to='/portal'>Portal</Link></li>
            </ul>
            <div>&copy; 2021 PKK TEQ</div>
        </footer>
    )
}

export default Footer
