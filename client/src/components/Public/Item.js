import React from 'react'
import ItemSpecs from './ItemSpecs'
import { Link } from 'react-router-dom'

const Item = ({src, alt, data}) => {
    return (
        <>
            <Link to='#link'>
                <img src={src} alt={alt}/>
                <ItemSpecs specs={data}/>
            </Link>
        </>
    )
}

export default Item
