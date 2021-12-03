import { useState } from "react"
import InputField from "../HTMLElems/InputField"

const SparePartsForm = ({ onAddParts }) => {
    const [num, setNum] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()

        onAddParts({partNo:num, description, cost})
    }
    return (
        <div className='Form'>
            <InputField placeholder='Part NO.' onChange={(e) => setNum(e.target.value)}/>
            <InputField placeholder='Description' onChange={(e) => setDescription(e.target.value)}/>
            <InputField placeholder='Cost' onChange={(e) => setCost(e.target.value)}/>
            <div><button className='custom-button' onClick={handleSubmit}>Submit</button></div>
        </div>
    )
}

export default SparePartsForm
