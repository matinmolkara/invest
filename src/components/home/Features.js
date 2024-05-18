import  FeatOne from '../../assets/img/index/features/1.png'
import  FeatTwo from '../../assets/img/index/features/2.png'
import  FeatThree from '../../assets/img/index/features/3.png'
import  FeatFour from '../../assets/img/index/features/4.png'
import  FeatFive from '../../assets/img/index/features/5.png'
import  FeatSix from '../../assets/img/index/features/6.png'
function Features() {

  const features = [
    {
      className:'justify-content-lg-end',
      imgSrc: FeatOne,
      title: 'Profitable investment',
      description: 'Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      className:'justify-content-lg-center',
      imgSrc: FeatTwo,
      title: 'Credit Card Use',
      description: 'Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      className:'justify-content-lg-start',
      imgSrc: FeatThree,
      title: 'Easy Interface',
      description: 'Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      className:'justify-content-lg-end',
      imgSrc: FeatFour,
      title: 'SAFE & SECURE',
      description: 'Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      className:'justify-content-lg-center',
      imgSrc: FeatFive,
      title: 'Instant Withdraw',
      description: 'Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna aliqua'
    },
    {
      className:' justify-content-lg-start',
      imgSrc: FeatSix,
      title: 'Exchange Service',
      description: 'Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna aliqua'
    }
   
  ];
  

  return (
    <section className="features">

    <div className="container">
      <div className="row mb-4">
        <div className="col-12">
          <h2 className="text-center ">
            Our amazing features
          </h2>
          <p className="feature-1">
            Lorem ipsum dolor sit amet consectetur adipisci eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
      </div>
      <div className="row features-desktop">
      {features.map((feature, index) => (
        <div className={`col-12 col-lg-4 mb-5 d-flex justify-content-center ${feature.className}`} >
          <div id={`${index === 1 ? 'feature-00' : ''}`}>
              <div className="feature-0" key={index}>
                <img src={feature.imgSrc} alt='Features' />
                <h5>
                {feature.title}
                </h5>
                <p>
                {feature.description}
                </p>
              </div>
          </div>
        </div>
         ))}
      </div>
      
      <div className="row features-mobile">
        <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-inner">
              {
                features.map((item,index) =>(
                  <div className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                    <div className="mx-auto">
                      <div id={`${index === 1 ? 'feature-00' : ''}`} >
                        <div className={`${index === 1 ? 'feature-00' : 'feature-0'}`} key={index}>
                          <img src={item.imgSrc} alt='Features' />
                          <h5>
                            {item.title}
                          </h5>
                          <p>
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </div>
                 </div>
                ))
              }
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
            data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>

  </section>
  )
}

export default Features