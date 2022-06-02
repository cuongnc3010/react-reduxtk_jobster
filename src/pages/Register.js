import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import Wrapper from '../assets/wrappers/RegisterPage'
import { Logo, FromRow } from '../components'
import { loginUser, registerUser } from '../features/users/userSlice'
//redux toolkit and useNavidgate later
const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
}
const Register = () => {
  const { isLoading, user } = useSelector((store) => store.user)
  const [values, setValues] = useState(initialState)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  // reduxtoolkit and useNavigate come later

  const handleChange = (e) => {
    const name = e.target.name
    const value = e.target.value
    setValues({ ...values, [name]: value })
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    const { name, email, password, isMember } = values
    if (!email || !password || (!isMember && !name)) {
      toast.error('Please fill out all fields')
      return
    }
    if (isMember) {
      dispatch(loginUser({ email: email, password: password }))
      return
    }
    dispatch(registerUser({ name, email, password }))
  }
  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember })
  }
  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/')
      }, 1500)
    }
  }, [user])
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
        <button
          type='submit'
          className='btn btn-block'
          onClick={handleSubmit}
          disabled={isLoading}
        >
          {isLoading ? 'Loading...' : 'submit'}
        </button>
        <p>
          {values.isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type='button' className='member-btn' onClick={toggleMember}>
            {values.isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  )
}
export default Register
