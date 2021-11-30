import Search from '@mui/icons-material/Search'
import { useState } from 'react'
import CompletedRepairs from './CompletedRepairs'
import InputField from '../HTMLElems/InputField'
import PendingRepairs from './PendingRepairs'
import RepairForm from './RepairForm'
import SpareParts from './SpareParts'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Close from '@mui/icons-material/Close'
import EntryForms from './EntryForms'



const AdminBody = ({data,parts, onSubmit, onAddElectronics, onAddServices, onAddParts}) => {
    const completed = []
    const pending = []

    const [toggleEntyForms, setToggleEntryForms] = useState(false)

    data.forEach(item => {
        
        if(item.completed){
            completed.unshift(item)
        }else{
            pending.push(item)
        }
    })
    const onClick = (e) => {
        e.preventDefault()
        setToggleEntryForms(!toggleEntyForms)
    }
    return (
        <div className='Body AdminBody'>
            <div className='left-display'>
                <RepairForm onSubmit={onSubmit}/>
                <div>
                    <button
                        className='custom-button'
                        onClick={onClick}>
                        New Entry {toggleEntyForms?<Close/>: <ArrowForward/>}
                    </button>
                </div>
                { toggleEntyForms && <EntryForms onAddElectronics={onAddElectronics} 
                                                 onAddServices={onAddServices}
                                                 onAddParts={onAddParts}
                                                 />}
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
                    <PendingRepairs data={pending}/>
                    <CompletedRepairs data={completed}/>
                    <SpareParts parts={parts}/>
                </div>
            </div>
        </div>
    )
}

export default AdminBody
