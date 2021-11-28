import { useState } from 'react'
import InputField from '../HTMLElems/InputField'


const CustomerForm = ({onSubmit}) => {
    const [id, setID] = useState('')
    const [fname, setFName] = useState('')
    const [lname, setLName] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [state, setState] = useState('')
    const [zip, setZIP] = useState('')
    const [phone, setPhone] = useState('')

    const onSave = (e) => {
         e.preventDefault()
         onSubmit({id, fname, lname, street, city, state, zip, phone })
     
     //     setID('')
     //     setFName('')
     //     setLName('')
     //     setStreet('')
     //     setCity('')
     //     setState('')
     //     setZIP('')
     //     setPhone('')
    }
    return (
        <div className='CustomerForm'>
           <InputField 
                placeholder='ID/Passport No.'
                onChange={(e) => setID(e.target.value)}
           /> 
           <InputField 
                placeholder='First Name'
                onChange={(e) => setFName(e.target.value)}
           /> 
           <InputField
                placeholder='Last Name'
                onChange={(e) => setLName(e.target.value)}
           /> 
           <InputField
                placeholder='Street'
                onChange={(e) => setStreet(e.target.value)}
           /> 
           <InputField
                placeholder='City'
                onChange={(e) => setCity(e.target.value)}
           /> 
           <InputField
                placeholder='State'
                onChange={(e) => setState(e.target.value)}
           /> 
           <InputField
                placeholder='ZIP Code'
                onChange={(e) => setZIP(e.target.value)}
           /> 
           <InputField
                placeholder='Phone'
                onChange={(e) => setPhone(e.target.value)}
           /> 
           <button className='custom-button' onClick={onSave}>Submit</button>
        </div>
    )
}

export default CustomerForm
