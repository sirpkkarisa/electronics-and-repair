import { useState } from 'react'
import CustomerForm from './CustomerForm'
import InputField from '../HTMLElems/InputField'
import ArrowForward from '@mui/icons-material/ArrowForward'
import Close from '@mui/icons-material/Close'

const RepairForm = ({onSubmit}) => {
    const [isForm, setForm] = useState(false)
    const [dnum, setSN] = useState('')
    const [dtype, setType] = useState('')
    const [dmodel, setModel] = useState('')
    const [description, setDescription] = useState('')

    const onData =(data)=>{
        onSubmit({...data, dnum, dtype, dmodel, description})

        setSN('')
        setType('')
        setModel('')
        setDescription('')
        // setForm(false)
    }
    const onClick=(e)=> {
        e.preventDefault()
        setForm(!isForm)
    }
    return (
        <form className='RepairForm'>
            <InputField
                placeholder='Device S/No.'
                onChange={(e)=> setSN(e.target.value)}
            />
            <InputField
                placeholder='Device Type'
                onChange={(e)=> setType(e.target.value)}
            />
            <InputField
                placeholder='Device Model'
                onChange={(e)=> setModel(e.target.value)}
            />
            <InputField
                placeholder='Problem Description'
                onChange={(e)=> setDescription(e.target.value)}
            />
            <div><button className='custom-button' onClick={onClick}>Customer { isForm?<Close/>:<ArrowForward/>} </button></div>
            {isForm && <CustomerForm 
                            onSubmit={onData}
                            />}
        </form>
    )
}

export default RepairForm
