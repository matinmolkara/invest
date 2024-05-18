import StepsOne from '../../assets/img/index/how-work/1.png'
import SassLanding from '../../assets/img/about/Saas-Landing-4-1.png'
import StepTwo from '../../assets/img/index/how-work/2.png'
import SassLanding2 from '../../assets/img/about/Saas-Landing-4-2.png'
import StepThree from '../../assets/img/index/how-work/3.png'
import StepLeft from '../../assets/img/index/how-work/l.png'
import StepRight from '../../assets/img/index/how-work/r.png'
function Steps() {

  const images = [
    { src: StepsOne, alt: 'Steps', className: 'd-flex align-self-center' },
    { src: SassLanding, alt: 'Steps', className: 'd-flex align-self-end' },
    { src: StepTwo, alt: 'Steps', className: 'd-flex align-self-center' },
    { src: SassLanding2, alt: 'Steps', className: 'd-flex align-self-center' },
    { src: StepThree, alt: 'Steps', className: 'd-flex align-self-center' }
  ];
  
  const texts = [
    { title: 'Create account', text: 'Click sign up to fill the blank, our 256 ssl will protect your privacy', className: 'd-flex justify-content-end' },
    { title: 'Make an invest', text: 'Login your account to click invest to start to earn the profit', className: 'd-flex justify-content-center' },
    { title: 'Choose a pack', text: 'You will get your profit on your profile, also you will get instant payment', className: 'd-flex justify-content-start' }
  ];

  const steps = [
    {
      imgSrc1: StepsOne,
      imgSrc2: StepLeft,
      alt: 'Steps',
      title: 'Create account',
      text: 'Click sign up to fill the blank, our 256 ssl will protect your privacy'
    },
    {
      imgSrc1: StepTwo,
      imgSrc2: StepRight,
      alt: 'Steps',
      title: 'Make an invest',
      text: 'Login your account to click invest to start to earn the profit',
      floatRight: true
    },
    {
      imgSrc1: StepThree,
      alt: 'Steps',
      title: 'Choose a pack',
      text: 'You will get your profit on your profile, also you will get instant payment'
    },
  ];

  return (
    <section className="about-page-3">
    <div className="about-page-3-0">
        <h3>
            Steps to Get Started to Buy and Sell
        </h3>
        <div className="row" id="about-step-desktop">
    <div className="col-6 col-lg-12">
      <div className="d-flex justify-content-center about-page-3-0-0">
        {images.map((image, index) => (
          <img key={index} src={image.src} className={image.className} alt={image.alt} />
        ))}
      </div>
    </div>
    <div className="col-6 col-lg-12">
      <div className="d-flex justify-content-center about-width-adjust">
        {texts.map((text, index) => (
          <div key={index} className={`about-page-3-0-1 ${text.className}`}>
            <div className="about-page-3-0-1-0">
              <h5>{text.title}</h5>
              <p>{text.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
        
  <div className="row" id="about-step-mobile">
    <div className="how-work-1">
      <div className="about-us-1">
        <h2>How we work?</h2>
        {steps.map((step, index) => (
          <div key={index} className="about-us-1-0">
            <div className="about-us-1-0-0">
              <img src={step.imgSrc1} alt={step.alt} />
              {step.imgSrc2 && <img src={step.imgSrc2} className={step.floatRight ? "float-right" : ""} alt={step.alt} />}
            </div>
            <div className="about-us-1-0-1">
              <h5>{step.title}</h5>
              <p>{step.text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
      
    </div>
</section>
  )
}

export default Steps