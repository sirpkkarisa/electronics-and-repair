import React from 'react'
import ServiceItem from './ServiceItem'


const Services = () => {
    return (
        <div className='DynamicRegion'>
            <h2>Welcome & Get Served &#128515;</h2>
            <ul className='ItemList'>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
                <ServiceItem/>
            </ul>
        </div>
    )
}

export default Services
