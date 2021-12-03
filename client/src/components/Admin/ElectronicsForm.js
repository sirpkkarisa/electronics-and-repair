import { useState } from "react"
import InputField from "../HTMLElems/InputField"

const ElectronicsForm = ({onAddElectronics}) => {
    const [dnum, setDNum] = useState('')
    const [dtype, setDType] = useState('')
    const [dmodel, setDModel] = useState('')
    const [description, setDescription] = useState('')
    const [cost, setCost] = useState('')
    const [file, setFile] = useState('')

    const onSubmit =(e) => {
        e.preventDefault()

        onAddElectronics({ serialNo: dnum, deviceType: dtype, cost,description,model:dmodel, imgURL:file})

        // setDNum('')
        // setDType('')
        // setDModel('')
        // setFile('')
    }
    return (
        <div className='Form'>
            <InputField placeholder='Device S/No.' onChange={(e)=> setDNum(e.target.value)}/>
            <InputField placeholder='Device Type' onChange={(e)=> setDType(e.target.value)}/>
            <InputField placeholder='Model' onChange={(e)=> setDModel(e.target.value)}/>
            <InputField placeholder='Description' onChange={(e)=> setDescription(e.target.value)}/>
            <InputField placeholder='Cost' onChange={(e)=> setCost(e.target.value)}/>
            <InputField type='file' onChange={(e)=> setFile(e.target.value)}/>
            <div><button className='custom-button' onClick={onSubmit}>Submit</button></div>
        </div>
    )
}

export default ElectronicsForm
