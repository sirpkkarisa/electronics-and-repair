import React from 'react'
import InputField from '../HTMLElems/InputField'
import Header from '../Public/Header'

const RegisterUser = () => {
    return (
        <div>
            <Header/>
           <div className='Body'>
               <h1 className='login-title'>Register</h1>
               <form className='Login'>
                <InputField placeholder='First Name'/>
                <InputField placeholder='Last Name'/>
                <InputField placeholder='E-mail'/>
                <InputField type='password' placeholder='Password'/>
                <InputField type='password' placeholder='Confirm Password' type='password'/>
                <div><button className='custom-button'>Register</button></div>
             </form>
            </div>
        </div>
    )
}

export default RegisterUser
