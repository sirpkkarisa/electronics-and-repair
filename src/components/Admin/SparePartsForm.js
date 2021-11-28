import InputField from "../HTMLElems/InputField"

const SparePartsForm = () => {
    return (
        <div className='Form'>
            <InputField placeholder='Part NO.'/>
            <InputField placeholder='Description'/>
            <InputField placeholder='Quantity On Hand'/>
            <InputField placeholder='Cost'/>
            <div><button className='custom-button'>Submit</button></div>
        </div>
    )
}

export default SparePartsForm
