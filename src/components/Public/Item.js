import React from 'react'
import ItemSpecs from './ItemSpecs'
import { Link } from 'react-router-dom'

const Item = ({src, alt}) => {
    return (
        <li className='Item'>
            <Link to='#link'>
                <img src={src} alt={alt}/>
                <ItemSpecs/>
            </Link>
        </li>
    )
}

export default Item
