import Item from "./Item"


const Electronics = ({data}) => {
    const itemJSX = data.map((item,i)=> {
        return (<li key={item.id} className='Item'>
                <Item key={i} src={item.imgURL} alt={item.title} data={{
                    title: item.title,
                    cost: item.cost,
                    QOH: item.QOH,
                    description: item.description,
                }}/>
            </li>)
    })
    return (
        <div className='DynamicRegion'>
            <h2>Available Electronics & Accessories</h2>
            <ul className='ItemList'>
                {itemJSX}
            </ul>
        </div>
    )
}

export default Electronics
