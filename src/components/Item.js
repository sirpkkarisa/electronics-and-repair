import React from 'react'
import ItemSpecs from './ItemSpecs'


const Item = ({src, alt}) => {
    return (
        <li className='Item'>
            <a href='#link'>
                <img src={src} alt={alt}/>
                <ItemSpecs/>
            </a>
        </li>
    )
}

export default Item
