import { Link } from "react-router-dom"
import Email from "../assets/img/menu_icon/email.png"
import Phone from '../assets/img/menu_icon/phone.png'

import Insta from '../assets/img/menu_icon/instagram.png'
import Teleg from '../assets/img/menu_icon/telegram.png'
import Facebook from '../assets/img/menu_icon/facebook.png'
import Twitter from '../assets/img/menu_icon/twitter.png'

function SocialAdd() {
  const socialMedia = [
    { src: Insta, alt: 'instagram', link:'https://instagram.com' },
    { src: Teleg, alt: 'telegram', link:'https://telegram.org' },
    { src: Twitter, alt: 'twitter', link:'https://twitter.com' },
    { src: Facebook, alt: 'Facebook', link:'https://facebook.com' },
  ];
  return (
    <div className="row">
          <div className="header-0">
            <div className="header-0-0">
              <span>
                <img src={Email} alt="Email" />
                Investpack@gmail.com
              </span>
              <span>
                <img src={Phone} alt="Phone" />
                00905538355909
              </span>
            </div>
            <div className="header-0-1">
              <ul className="nav">
                  {socialMedia.map((media, index) => (
                  <li className="nav-item" key={index}>
                    <Link className="nav-link" to={media.link}>
                      <img src={media.src} alt={media.alt} />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
  )
}

export default SocialAdd