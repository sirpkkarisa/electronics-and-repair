
const InputField = ({placeholder, divClass, type, onChange}) => {
    return (
        <div className={divClass}>
            <input placeholder={placeholder} type={type} onChange={onChange}/>
        </div>
    )
}

export default InputField
