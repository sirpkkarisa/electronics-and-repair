import CompletedRepairs from "./CompletedRepairs"
import InputField from "./InputField"
import PendingRepairs from "./PendingRepairs"
import ServiceForm from "./ServiceForm"
import SpareParts from "./SpareParts"

const AdminBody = () => {
    return (
        <div className='Body AdminBody'>
            <ServiceForm/>
            <div className='admin-hero-section'>
                <InputField 
                    placeholder='Search Tasks & Parts'
                    divClass='tasks-search'
                    />
                <div className='display-region'>
                    <PendingRepairs/>
                    <CompletedRepairs/>
                    <SpareParts/>
                </div>
            </div>
        </div>
    )
}

export default AdminBody
