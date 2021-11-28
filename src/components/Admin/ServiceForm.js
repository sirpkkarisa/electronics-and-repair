import InputField from "../HTMLElems/InputField"


const ServiceForm = () => {
    return (
      <div className='Form'>
          <InputField placeholder='Description'/>
          <InputField placeholder='Charge'/>
          <div><button className='custom-button'>Submit</button></div>
      </div>
    )
}

export default ServiceForm
