import { Link } from "react-router-dom"
import AppStore from '../../assets/img/index/appstore.png';
import GooglePlay from '../../assets/img/index/googleplay.png';
import RightPic from '../../assets/img/index/rightpic.png';




function Download() {
  return (
    <section className="download-app">
    <div className="container">
      <div className="row d-flex">
        <div className="col-12 col-lg-6 order-1 order-lg-0 " >
          <div className="download-app-0">
            <h6>Mobile app</h6>
            <h2>Download our app</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna
              aliqua. Ut enim ad minim veniam quis nostrud amet exercitation ullamco laboris nisi aliquip commodo
              cupidatat non consequat.
            </p>
            <div className="download-app-0-0">
              <button>
                <Link href="#">
                  <img src={AppStore} alt='App Store'/>
                </Link>
              </button>
              <button>
                <Link href="#">
                  <img src={GooglePlay} alt='Google Play' />
                </Link>
              </button>
            </div>
          </div>
       </div>
        <div className=" col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end order-0 order-lg-1">
          <div className="download-app-1">
            <img src={RightPic} alt='Right pic' />
          </div>
        </div>
        </div>
        
      </div>
    
  </section>
  )
}

export default Download