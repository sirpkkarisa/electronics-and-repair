import { useState } from 'react'
import ElectronicsForm from './ElectronicsForm'
import ServiceForm from './ServiceForm'
import SparePartsForm from './SparePartsForm'

const EntryForms = ({onAddElectronics, onAddServices, onAddParts}) => {
    const [ option, setOption ] = useState(1)
    const onSelect = (e) => {
        setOption(parseInt(e.target.value))
    }
    return (
        <form className='Forms'>
            <select onChange={onSelect}>
                <option value='1'>Electronics</option>
                <option value='2'>Spare Parts</option>
                <option value='3'>Services</option>
            </select>
            { option === 1 && <ElectronicsForm onAddElectronics={onAddElectronics}/>}
            { option === 2 && <SparePartsForm onAddParts={onAddParts}/>}
            { option === 3 && <ServiceForm onAddServices={onAddServices}/> }
        </form>
    )
}

export default EntryForms
