import { useState } from "react"
import InputField from "../HTMLElems/InputField"


const ServiceForm = ({onAddServices}) => {
    const [ description, setDescription] = useState('')
    const [ charge, setCharge] = useState('')
    const onSubmit = (e) => {
      e.preventDefault()
      onAddServices({charge, description})
    }
    return (
      <div className='Form'>
          <InputField placeholder='Description' onChange={(e)=> setDescription(e.target.value)}/>
          <InputField placeholder='Charge' onChange={(e)=> setCharge(e.target.value)}/>
          <div><button className='custom-button' onClick={onSubmit}>Submit</button></div>
      </div>
    )
}

export default ServiceForm
