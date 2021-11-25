import { useState } from 'react'
import CustomerForm from './CustomerForm'
import InputField from '../HTMLElems/InputField'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Close from '@mui/icons-material/Close'

const RepairForm = () => {
    const [isForm, setForm] = useState(false)

    const onClick=(e)=> {
        e.preventDefault()
        setForm(!isForm)
    }
    return (
        <form className='RepairForm'>
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
            <div><button className='custom-button' onClick={onClick}>Customer { isForm?<Close/>:<ArrowForward/>} </button></div>
            {isForm && <CustomerForm/>}
        </form>
    )
}

export default RepairForm
