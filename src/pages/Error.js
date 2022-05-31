import { Link } from 'react-router-dom'
import img from '../assets/images/not-found.svg'
import Wrapper from '../assets/wrappers/ErrorPage'
const Error = () => {
  return (
    <Wrapper className='full-page'>
      <div>
        <img src={img} alt='not found' />
        <h3>Oops, Page not found !</h3>
        <p>
          Try another link, or &ensp;
          <Link to='/' className='btn'>
            back home
          </Link>
        </p>
      </div>
    </Wrapper>
  )
}
export default Error
