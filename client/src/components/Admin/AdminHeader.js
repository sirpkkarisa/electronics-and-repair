import InputField from '../HTMLElems/InputField'
import User from '@mui/icons-material/Person'
import { Link } from 'react-router-dom'

const AdminHeader = () => {
    return (
        <header className='Header'>
            <h1>EAP</h1>
            <InputField 
                placeholder='Search For Electronics & Services'
                divClass='search-div'
                />
            <ul className='navigation-list'>
                <li><Link to='/electronics'>Electronics</Link></li>
                <li><Link to='/services'>Services</Link></li>
                <li><Link to='/reviews'>Reviews</Link></li>
                <li><Link to='/profile' style={{color:'#00ff00',marginLeft:'10px', display:'flex',alignItems:'top'}}>John Doe <User/></Link></li>
            </ul>
        </header>
    )
}

export default AdminHeader
