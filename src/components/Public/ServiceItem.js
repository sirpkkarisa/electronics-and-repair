
const ServiceItem = ({data}) => {
    return (
            <a href='#link'>
               <ul>
                    <li><h4>{data.title}</h4></li>
                    <li>Service Charge: <strong>${data.charge}</strong></li>
                    <li>Service Description:
                    <p>{data.description}</p>
                    </li>
                    <li>Reviews: <strong>{data.reviews? data.reviews:'No Reviews'}</strong></li>
               </ul>
            </a>
    )
}

export default ServiceItem
