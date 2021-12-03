import { useState } from "react"
import InputField from "../HTMLElems/InputField"


const ServiceForm = ({onAddServices}) => {
    const [ title, setTitle] = useState('')
    const [ description, setDescription] = useState('')
    const [ charge, setCharge] = useState('')
    const onSubmit = (e) => {
      e.preventDefault()
      onAddServices({charge, description, title})
    }
    return (
      <div className='Form'>
          <InputField placeholder='Title' onChange={(e)=> setTitle(e.target.value)}/>
          <InputField placeholder='Description' onChange={(e)=> setDescription(e.target.value)}/>
          <InputField placeholder='Charge' onChange={(e)=> setCharge(e.target.value)}/>
          <div><button className='custom-button' onClick={onSubmit}>Submit</button></div>
      </div>
    )
}

export default ServiceForm
