import Search from '@mui/icons-material/Search'
import { useState } from 'react'
import CompletedRepairs from './CompletedRepairs'
import InputField from '../HTMLElems/InputField'
import PendingRepairs from './PendingRepairs'
import ServiceForm from './RepairForm'
import SpareParts from './SpareParts'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Close from '@mui/icons-material/Close'
import EntryForms from './EntryForms'



const AdminBody = () => {
    const [toggleEntyForms, setToggleEntryForms] = useState(false)
    const onClick = (e) => {
        e.preventDefault()
        setToggleEntryForms(!toggleEntyForms)
    }
    return (
        <div className='Body AdminBody'>
            <div className='left-display'>
                <ServiceForm/>
                <div>
                    <button 
                        onClick={onClick}>
                        New Entry {toggleEntyForms?<Close/>: <ArrowForward/>}
                    </button>
                </div>
                { toggleEntyForms && <EntryForms/>}
            </div>
            <div className='admin-hero-section'>
                <div className='search-div'>
                    <InputField 
                    placeholder='Search Tasks & Parts'
                    divClass='tasks-search'
                    />
                    <span className='search-icon'><Search/></span>
                </div>
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
