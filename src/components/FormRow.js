const FormRow = ({
  type,
  name,
  value,
  handleChange,
  labelText,
  placeHolder,
}) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {labelText || name}
      </label>
      <input
        type={type}
        placeholder={placeHolder}
        id={name}
        name={name}
        className='form-input'
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
export default FormRow
