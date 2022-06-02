import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '../assets/wrappers/Navbar'
import Logo from './Logo'
import {
  FaAlignLeft,
  FaAlignCenter,
  FaUserCircle,
  FaCaretDown,
} from 'react-icons/fa'
import { logoutUser, toggleSidebar } from '../features/users/userSlice'
const Navbar = () => {
  const [showLogout, setShowLogout] = useState()
  const { user, isSidebarOpen } = useSelector((store) => store.user)
  const dispatch = useDispatch()

  const toggle = () => {
    dispatch(toggleSidebar())
  }
  return (
    <Wrapper>
      <div className='nav-center'>
        <button type='button' className='toggle-btn' onClick={toggle}>
          {!isSidebarOpen ? <FaAlignCenter /> : <FaAlignLeft />}
        </button>
        <div>
          <Logo />
          <h3 className='logo-text'>dashboard</h3>
        </div>
        <div className='btn-container'>
          <button
            className='btn'
            type='button'
            onClick={() => {
              setShowLogout(!showLogout)
            }}
          >
            <FaUserCircle />
            {user?.name}
            <FaCaretDown />
          </button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <button
              className='dropdown-btn'
              onClick={() => dispatch(logoutUser())}
            >
              logout
            </button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar
