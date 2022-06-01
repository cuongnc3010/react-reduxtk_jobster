const FromRow = ({ type, name, value, handleChange, labeltext }) => {
  return (
    <div className='form-row'>
      <label htmlFor={name} className='form-label'>
        {name}
      </label>
      <input
        type={type}
        name={name}
        className='form-input'
        value={value}
        onChange={handleChange}
      />
    </div>
  )
}
export default FromRow
