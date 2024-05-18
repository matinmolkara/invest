import { Link } from "react-router-dom"
import User from '../assets/img/menu_icon/user.png'
import UserPlus from '../assets/img/menu_icon/userplus.png'
const RightNav = () => {
  const navLinks = [
    { path: "/register", name: 'Register', src:User },
    { path: "/login", name: 'Login',src:UserPlus }
  ];
  return (
    <div className="col-12 col-lg-3">
    <div className="header-3">
      {
        navLinks.map((item,index) => (
          <div key={index}>
            <Link to={item.path}>
              <img src={item.src} alt="Login Page" />
              {item.name}
            </Link>
        </div>
        ))
      }
      
    </div>
  </div>
  )
}

export default RightNav