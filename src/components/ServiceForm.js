import CustomerForm from "./CustomerForm"
import InputField from "./InputField"

const ServiceForm = () => {
    return (
        <form>
            <InputField
                placeholder='Device S/No.'
            />
            <InputField
                placeholder='Device Type'
            />
            <InputField
                placeholder='Device Model'
            />
            <InputField
                placeholder='Problem Description'
            />
            <CustomerForm/>
        </form>
    )
}

export default ServiceForm
