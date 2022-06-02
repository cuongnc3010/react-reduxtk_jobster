import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Wrapper from '../assets/wrappers/Navbar'
import {
  FaAlignLeft,
  FaAlignLeft,
  FaUserCircle,
  FaCaretDown,
} from 'react-icons/fa'
import Logo from './Logo'
const Navbar = () => {
  return (
    <Wrapper>
      <h4>Navbar</h4>
      <FaHome />
    </Wrapper>
  )
}
export default Navbar
