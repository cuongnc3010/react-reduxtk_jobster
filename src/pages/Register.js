import { useState, useEffect } from 'react'
import { Logo, FromRow } from '../components'
import Wrapper from '../assets/wrappers/RegisterPage'
//redux toolkit and useNavidgate later
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
const Register = () => {
  const [values, setValues] = useState(initialState)

  // reduxtoolkit and useNavigate late

  const handleChange = (e) => {
    console.log(e.target)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(e.target)
  }
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  return (
    <Wrapper className='full-page'>
      <form className='form' onSubmit={handleSubmit}>
        <Logo />
        {/* control h3 */}
        <h3>{values.isMember ? 'Login' : 'Register'}</h3>
        {/* toggle name field */}
        {!values.isMember && (
          <FromRow
            type='text'
            name='name'
            value={values.name}
            handleChange={handleChange}
          />
        )}
        {/* email field */}
        <FromRow
          type='email'
          name='email'
          value={values.email}
          handleChange={handleChange}
        />
        {/* password field */}
        <FromRow
          type='password'
          name='password'
          value={values.password}
          handleChange={handleChange}
        />
        {/* toggle button */}
        <button type='submit' className='btn btn-block' onClick={handleSubmit}>
          submit
        </button>
        <p>
          {values.isMember ? 'Note a memeber yest?' : 'Already a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
