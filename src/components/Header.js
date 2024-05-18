import Nav from './Nav';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import SocialAdd from './SocialAdd';
function Header() {
  return (
    <div className='container'>
      <div className='row'>
        <SocialAdd />
      </div>
        <div className='row'>
          <LeftNav />
          <Nav />
          <RightNav />
        </div>
    </div>
  )
}

export default Header