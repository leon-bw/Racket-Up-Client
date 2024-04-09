import "./Input.scss"

const Input = ({ label, name, type, placeholder }) => {
  return (
    <div className="input">
        <label htmlFor={name} className="input__label">{label}</label>
        <input type={type} id={name} name={name} className="input__field" placeholder={placeholder} />
    </div>
  )
}

export default Input