import InputField from "./InputField"


const CustomerForm = () => {
    return (
        <div>
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
        </div>
    )
}

export default CustomerForm
