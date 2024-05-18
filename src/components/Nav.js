import { Link } from 'react-router-dom';

function Nav() {
  const navLinks = [
    { path: "/", name: 'Home', isActive: true },
    { path: "/about", name: 'About' },
    { path: "/plan", name: 'Plan' },
    { path: "/faq", name: 'FAQ' },
    { path: "/contact", name: 'Contact' },
    { path: "/terms", name: 'Term' },
   
  ];
  return (
    <div className="col-6">
            <div className="header-2">
              <ul className="nav">
                  {navLinks.map((link, index) => (
                    <li className="nav-item" key={index}>
                      <Link className={`nav-link ${link.isActive ? 'active' : ''}`} aria-current="page" to={link.path}>
                        {link.name}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          </div>
  )
}

export default Nav