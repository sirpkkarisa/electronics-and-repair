import InputField from "./InputField"

const AdminHeader = () => {
    return (
        <header className='Header'>
            <h1>EAP</h1>
            <InputField 
                placeholder='Search For Electronics & Services'
                divClass='search-div'
                />
            <ul className='navigation-list'>
                <li><a href='/'>Electronics</a></li>
                <li><a href='/services'>Services</a></li>
                <li><a href='/reviews'>Reviews</a></li>
                <li><a href='/profile' style={{color:'#00ff00',marginLeft:'10px'}}>John Doe</a></li>
            </ul>
        </header>
    )
}

export default AdminHeader
