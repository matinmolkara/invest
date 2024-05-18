import { Link } from "react-router-dom"
import Insta from '../assets/img/index/footer_icon/instagram.png'
import Teleg from '../assets/img/index/footer_icon/telegram.png'
import Facebook from '../assets/img/index/footer_icon/facebook.png'
import Twitter from '../assets/img/index/footer_icon/twitter.png'
import Phone from '../assets/img/index/footer_icon/phone.png'
import Letter from '../assets/img/index/footer_icon/letter.png'
import Locate from '../assets/img/index/footer_icon/location.png'
import News from '../assets/img/index/newsletter1.png'

import Mask from '../assets/img/index/Maskgroup.png'

function Footer() {
  const socialMedia = [
    { src: Insta, alt: 'instagram', link:'https://instagram.com' },
    { src: Teleg, alt: 'telegram', link:'https://telegram.org' },
    { src: Twitter, alt: 'twitter', link:'https://twitter.com' },
    { src: Facebook, alt: 'Facebook', link:'https://facebook.com' },
  ];
  const useLinks = [
    { name:'About' ,link:'/about' },
    { name:'Contact' ,link:'/contact' },
    { name:'Terms' ,link:'/terms' },
    { name:'Plans' ,link:'/plans' },
  ];
  return (
    <section className="footer">
    <div className="footer-0">
      <div className="footer-0-0">
        <div className="row">
          <div className="col-12 col-lg-6">
            <div className="footer-0-0-0">
              <div className="footer-0-0-0-0">
                <img src={News} alt="news letter"/>
              </div>
              <div className="footer-0-0-0-1">

                <h4>
                  Subscribe to Our Newsletter
                </h4>
                <h5>
                  Stay updated with our latest news
                </h5>
              </div>
            </div>
          </div>
          <div className="d-none d-lg-block col-lg-6 ">
            <div className="footer-0-0-1">
              <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter Email Address" aria-label="Enter Email "
                  aria-describedby="button-addon2" />
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">
                  Subscribe
                  <img src={Teleg} alt="Telegram"/>
                </button>
              </div>
            </div>
          </div>
    
          <div className="d-block d-lg-none col-12">
            <div className="footer-0-0-2">
              <input className="form-control" type="text" placeholder="Enter Email Address"
                aria-label="default input example" />
              <button>
                Subscribe
                <img src={Teleg} alt="Telegram"/>
              </button>
            </div>
          </div>
       
        </div>
      </div>
      <div className="footer-1">
        <div className="container">
          <div className="row">
            <div className="col-12 col-lg-3">
              <div className="footer-0-1" id="footer-0-1">

                <h4>
                  <img src={Mask} alt="Mask Group" />
                  Invest pack
                </h4>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna
                  aliqua
                </p>
                <div className="footer-0-1-0">
                  <h4>
                    Follow us:
                  </h4>
                  <div className="footer-0-1-0-1">
                  {socialMedia.map((item, index) => (
                        <Link to={item.link} key={index}>
                          <img src={item.src} alt={item.alt}/>
                        </Link>                       
                        ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="footer-0-1">

                <h4>

                  Useful links
                </h4>
                <ul>
                  {
                   useLinks.map((item,index) => (
                        <li>
                        <Link to={item.link} key={index}>
                          {item.name}
                        </Link>
                      </li>
                   ))
                   }
                </ul>

              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="footer-0-1">

                <h4>

                  Account
                </h4>
                <ul>
                  <li>
                    <Link to="#">
                      My account
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Login
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Join Us
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      Dashboard
                    </Link>
                  </li>




                </ul>

              </div>
            </div>
            <div className="col-12 col-lg-3">
              <div className="footer-0-1">

                <h4>

                  Contact Us
                </h4>
                <ul>
                  <li>
                    <Link to="#">
                      <img src={Phone} alt="Phone"/>
                      00905538355909
                    </Link>
                  </li>
                  <li>
                    <Link to="#">
                      <img src={Letter} alt="Letter"/>
                      Investpack@gmail.com
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <img src={Locate} alt="Location"/>
                      Iran-tehran
                    </Link>
                  </li>




                </ul>

              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
    <div className="footer-2">
      <p>
        © Copyright 2022. All Rights Reserved.
      </p>
    </div>
  </section>
  )
}

export default Footer