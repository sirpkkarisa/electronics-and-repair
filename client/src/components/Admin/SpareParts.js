
const SpareParts = ({parts}) => {
    const partsJSX = parts.map(item=> {
        return (<li key={item.id} style={{marginBottom:'25px', borderBottom:'1px solid #d0d0d0'}}>
            <p style={{marginTop:'-10px'}}>Cost: <strong>{item.cost}</strong></p>
            <p style={{marginTop:'-10px'}}>QOH: <strong>{item.QOH}</strong></p>
            <p style={{marginTop:'-10px'}}>Description: <strong>{item.description}</strong></p>
        </li>)
    })
    return (
        <div className='PendingRepairs'>
            <h3>SpareParts</h3>
            <ul style={{fontSize:'11px'}}>
                {partsJSX}
            </ul>
        </div>
    )
}

export default SpareParts
