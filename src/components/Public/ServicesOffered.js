import { Link } from 'react-router-dom'

const ServicesOffered = () => {
    return (
        <div className='ServicesOffered'>
            <span>
            ServicesOffered
            </span>
            <ul>
                <li><Link to='/services/#services'>Troubleshooting & Repair</Link></li>
                <li><Link to='/services/#services'>Screen Repair</Link></li>
                <li><Link to='/services/#services'>Cover Replacement</Link></li>
                <li><Link to='/services/#services'>Motherboard Repair</Link></li>
            </ul>
        </div>
    )
}

export default ServicesOffered
