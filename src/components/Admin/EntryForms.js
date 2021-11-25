import { useState } from 'react'
import ElectronicsForm from './ElectronicsForm'
import ServiceForm from './ServiceForm'
import SparePartsForm from './SparePartsForm'

const EntryForms = () => {
    const [ option, setOption ] = useState(1)
    const onSelect = (e) => {
        setOption(parseInt(e.target.value))
    }
    return (
        <form>
            <select onChange={onSelect}>
                <option value='1'>Electronics</option>
                <option value='2'>Spare Parts</option>
                <option value='3'>Services</option>
            </select>
            { option === 1 && <ElectronicsForm/>}
            { option === 2 && <SparePartsForm/>}
            { option === 3 && <ServiceForm/> }
        </form>
    )
}

export default EntryForms
