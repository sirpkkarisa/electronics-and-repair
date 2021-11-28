import React from 'react'
import ServiceItem from './ServiceItem'


const Services = ({data}) => {
    const itemJSX = data.map(item => {
        return (<li key={item.id} className='Item ServiceItem'>
                <ServiceItem data={item}/>
        </li>)
    })
    return (
        <div className='DynamicRegion'>
            <h2>Welcome & Get Served &#129303;</h2>
            <ul className='ItemList'>{itemJSX}</ul>
        </div>
    )
}

export default Services
