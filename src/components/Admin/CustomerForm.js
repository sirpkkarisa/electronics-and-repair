import InputField from '../HTMLElems/InputField'

const CustomerForm = () => {
    return (
        <div className='CustomerForm'>
           <InputField 
                placeholder='ID/Passport No.'
           /> 
           <InputField 
                placeholder='First Name'
           /> 
           <InputField
                placeholder='Last Name'
           /> 
           <InputField
                placeholder='Street'
           /> 
           <InputField
                placeholder='City'
           /> 
           <InputField
                placeholder='State'
           /> 
           <InputField
                placeholder='ZIP Code'
           /> 
           <InputField
                placeholder='Phone'
           /> 
           <button className='custom-button'>Submit</button>
        </div>
    )
}

export default CustomerForm
