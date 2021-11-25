import InputField from "../HTMLElems/InputField"
import Header from "../Public/Header"

const Login = () => {
    return (
        <div>
        <Header/>
            <div className='Body'>
            <h1>Login</h1>
            <form>
                    <InputField placeholder='Username/E-mail'/>
                    <InputField type='password' placeholder='Password'/>
                    <div><button>Login</button></div>
            </form>
        </div>
    </div>
    )
}

export default Login
