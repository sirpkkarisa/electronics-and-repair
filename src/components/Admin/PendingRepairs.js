import PendingItem from "./PendingItem"


const PendingRepairs = ({data}) => {
    const itemJSX = data.map(item=> {
        return(<li key={item.id}>
            <PendingItem data={item}/>
        </li>)
    })
    return (
        <div className='PendingRepairs'>
            <h3>Completed Repairs</h3>
            <ul>
                {itemJSX}
            </ul>
        </div>
    )
}

export default PendingRepairs
