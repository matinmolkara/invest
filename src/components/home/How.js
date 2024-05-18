import React from 'react'
import Tablet from '../../assets/img/index/tablet_laptop_and_smartphone_mockup 2.png'
import  HowOne from '../../assets/img/index/how-work/1.png'
import HowL from '../../assets/img/index/how-work/l.png'
import HowTwo from '../../assets/img/index/how-work/2.png'
import HowR from '../../assets/img/index/how-work/r.png'
import HowThree from '../../assets/img/index/how-work/3.png'


function How() {

const howList = [
  {
    imgSrc1: HowOne,
    imgSrc2: HowL,
    alt: 'Steps',
    title: 'Create account',
    text: 'Click sign up to fill the blank, our 256 ssl will protect your privacy'
  },
  {
    imgSrc1: HowTwo,
    imgSrc2: HowR,
    alt: 'Steps',
    title: 'Make an invest',
    text: 'Login your account to click invest to start to earn the profit',
    floatRight: true
  },
  {
    imgSrc1: HowThree,
    alt: 'Steps',
    title: 'Choose a pack',
    text: 'You will get your profit on your profile, also you will get instant payment'
  },
]

  return (
    <section className="how-work">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="how-work-0">
            <img src={Tablet} alt='Tablet'/>

          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="how-work-1">
            <div className="about-us-1">

              <h2>
                How we work?
              </h2>
              {
                howList.map((item,index) =>(
                  <div className="about-us-1-0" key={index}>
                    <div className="about-us-1-0-0">
                      <img src={item.imgSrc1} alt={item.alt} />
                      {item.imgSrc2 && <img src={item.imgSrc2} className={item.floatRight ? "float-right" : ""} alt={item.alt} />}
                    </div>
                    <div className="about-us-1-0-1">
                      <h5>
                        {item.title}
                      </h5>
                      <p>
                        {item.text}
                      </p>
                    </div>
                </div>
                ))
              }
              
              

            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default How