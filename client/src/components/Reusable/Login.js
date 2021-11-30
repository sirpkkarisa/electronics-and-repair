import InputField from "../HTMLElems/InputField"
import Header from "../Public/Header"

const Login = () => {
    return (
        <div>
        <Header/>
            <div className='Body'>
            <h1 className='login-title'>Login</h1>
            <form className='Login'>
                    <InputField placeholder='Username/E-mail'/>
                    <InputField type='password' placeholder='Password'/>
                    <div><button className='custom-button'>Login</button></div>
            </form>
        </div>
    </div>
    )
}

export default Login
