import { Link } from "react-router-dom"
import Analysis from '../../assets/img/index/ananlytics-concept1.png';
import BankTrans from '../../assets/img/index/banktransfer.png';
import CreditCart from '../../assets/img/index/creditcart.png';
import SafeTrans from '../../assets/img/index/safetransfer.png';
import Arrow from '../../assets/img/index/arrow.png';


function About() {

  const aboutList = [
    {
      src:BankTrans,
      h6Text:'Bank trasfer',
      pText:'Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
    },
    {
      src:CreditCart,
      h6Text:'Credit Card',
      pText:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
    },
    {
      src:SafeTrans,
      h6Text:'Safe transfer',
      pText:' Lorem ipsum dolor sit amet, consectetuer adipiscing elit'
    },
  ]

  return (
    <section className="about-us">
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="about-us-0">
            <img src={Analysis} alt='Analysis'/>
          </div>
        </div>
        <div className="col-12 col-lg-6">
          <div className="about-us-1">
            <h6>
              Welcome to invest pack
            </h6>
            <h4>
              About Us
            </h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam quis nostrud amet exercitation ullamco laboris nisi aliquip commodo
              cupidatat non consequat.
            </p>
                {
                  aboutList.map((item,index)=>(
                    <div className="about-us-1-0" key={index}>
                    <div className="about-us-1-0-0">
                      <img src={item.src} alt={item.h6Text}/>
                    </div>
                    <div className="about-us-1-0-1">
                      <h6>
                        {item.h6Text}
                      </h6>
                      <p>
                        {item.pText}
                      </p>
                    </div>
  
                  </div>
                  
                  ))
                }
            <button>
              <Link href="about.html">
                Get to know us
                <img src={Arrow} alt='Arrow' />
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default About