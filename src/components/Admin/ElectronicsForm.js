import InputField from "../HTMLElems/InputField"

const ElectronicsForm = () => {
    return (
        <div className='Form'>
            <InputField placeholder='Device S/No.'/>
            <InputField placeholder='Device Type'/>
            <InputField placeholder='Model'/>
            <InputField type='file'/>
            <div><button className='custom-button'>Submit</button></div>
        </div>
    )
}

export default ElectronicsForm
