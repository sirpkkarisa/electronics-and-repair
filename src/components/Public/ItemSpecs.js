
const ItemSpecs = ({specs}) => {
    return (
        <ul className='ItemSpecs'>
                <li>
                    <h3>{specs.title}</h3>
                </li>
                <li className='specs'>
                    Cost Per Item: <strong>${specs.cost}</strong>
                </li>
                <li className='specs'>
                    Quantity On Hand: <strong>{specs.QOH? specs.QOH: 'Out of Stock'}</strong>
                </li>
                <li className='specs'>
                    Item Description: 
                    <p>{specs.description}</p>
                </li>
        </ul>
    )
}

export default ItemSpecs
