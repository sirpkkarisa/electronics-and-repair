import InputField from "./InputField"


const Header = () => {
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
                <li><a href='/contacts'>Contacts</a></li>
                <li><a href='/reviews'>Reviews</a></li>
            </ul>
        </header>
    )
}

export default Header
