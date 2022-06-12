import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '../assets/wrappers/Navbar'
import Logo from './Logo'
import {
  FaAlignLeft,
  FaAlignJustify,
  FaAlignCenter,
  FaUserCircle,
  FaCaretDown,
} from 'react-icons/fa'
import { toggleSidebar, clearStore } from '../features/users/userSlice'
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
          {!isSidebarOpen ? (
            <FaAlignCenter className='big-menu' />
          ) : (
            <FaAlignLeft className='big-menu' />
          )}
          <FaAlignJustify className='small-menu' />
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
              onClick={() =>
                setTimeout(() => dispatch(clearStore('Logging out...!')), 1500)
              }
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
