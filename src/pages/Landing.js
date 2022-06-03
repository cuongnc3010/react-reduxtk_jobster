import { Link } from 'react-router-dom'
import { Logo } from '../components'
import main from '../assets/images/main.svg'
import Wrapper from '../assets/wrappers/LandingPage'

const Landing = () => {
  return (
    <Wrapper className='full-page'>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        {/* info */}
        <div className='info'>
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Hella tote bag vegan, butcher humblebrag flexitarian jean shorts put
            a bird on it mustache pok pok letterpress. Everyday carry DSA offal
            art party, vinyl yr shabby chic master cleanse godard polaroid
            occupy.
          </p>
          <Link to='/register' className='btn btn-hero'>
            Login/Register
          </Link>
        </div>
        <img src={main} alt='job hunt' className='img main-img' />
      </div>
    </Wrapper>
  )
}

export default Landing
