
const PendingItem = (props) => {
    let row =''
    if('data' in props){
        // console.log(props.data)
        row =(<>
             <h6>{props.data.title}</h6>
            <ul>
                <li>Charge: <strong>{props.data.charge}</strong></li>
                <li>Description:
                    <p>{props.data.description}</p></li>
                <li>Reviews: <strong>{props.data.reviews}</strong></li>
            </ul>
        </>)

    } else {
        row = <h6>Not Items Found</h6>
    }
    return (
        <>
           {row}
        </>
    )
}

export default PendingItem
