import QuotemarksRight from '../../assets/img/about/Quotemarks-right.png'
import SmilingMan from '../../assets/img/about/smiling-man(1).png'
import { useEffect } from 'react';

function Feedback() {

  const carouselItems = [
    {
      imgSrc: QuotemarksRight,
      altText: 'Quote Marks',
      pText: 'Discover opportunities you may never have imagined and achieve results that bridge what is with what can be. Varius aliquot nulla quibusdam.',
      imgSrc2: SmilingMan,
      altText2: 'Smilin Man',
      h6Text: 'Michel Alex',
      pText2: 'Managing Director'
    },
    {
      imgSrc: QuotemarksRight,
      altText: 'Quote Marks',
      pText: 'Investment Alchemy: Turning Possibilities into Prosperity. You’re Invited!',
      imgSrc2: SmilingMan,
      altText2: 'Smilin Man',
      h6Text: 'Olivia Parker',
      pText2: 'Vice President'
    },
    {
      imgSrc: QuotemarksRight,
      altText: 'Quote Marks',
      pText: 'Unlock Your Financial Potential: Join Our Investment Community and Transform What Can Be!',
      imgSrc2: SmilingMan,
      altText2: 'Smilin Man',
      h6Text: 'Ethan Mitchell',
      pText2: 'Dentist'
    },
    {
      imgSrc: QuotemarksRight,
      altText: 'Quote Marks',
      pText: 'Investment Magic: Where Imagination Meets Opportunity. Be Part of It!',
      imgSrc2: SmilingMan,
      altText2: 'Smilin Man',
      h6Text: 'Sophia Reynolds',
      pText2: 'Teacher'
    },
    {
      imgSrc: QuotemarksRight,
      altText: 'Quote Marks',
      pText: 'Investing Beyond Limits: A Journey from What Is to What Can Be.',
      imgSrc2: SmilingMan,
      altText2: 'Smilin Man',
      h6Text: 'Jackson Hayes',
      pText2: 'Graphic Designer'
    },
    {
      imgSrc: QuotemarksRight,
      altText: 'Quote Marks',
      pText: 'Investment Horizons: Where Dreams Take Shape. Join Us!',
      imgSrc2: SmilingMan,
      altText2: 'Smilin Man',
      h6Text: 'Ava Foster',
      pText2: 'CEO'
    },
  ];
  
  useEffect(() => {
    let items = document.querySelectorAll('.carousel .carousel-item')
    items.forEach((el) => {
      const minPerSlide = 3
      let next = el.nextElementSibling
      for (let i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
            next = items[0]
        }
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
      }
    })
  }, []);

  return (
    <section className="about-page-4">
    <div className="container">
        <div className="row">
            <div className="about-page-4-0">
                <h3>
                    Feedback From Investors
                </h3>
                <p>
                    Every customer is valuable to us. Here are the reviews of some of our customers who choose us.
                </p>
            </div>
        </div>
     
        <div className="row">
          <div className="container text-center my-3">
            <div className="row mx-auto my-auto justify-content-center">
              <div id="recipeCarousel" className="carousel slide" data-bs-ride="false">
                <div className="carousel-inner" role="listbox">
                      {carouselItems.map((item, index) => (
                        <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={index}>
                          <div className="col-12 col-lg-4">
                            <div className="khl">
                              <div className="about-page-4-1">
                                <div className="">
                                  <div className="about-page-4-1-0">
                                    <img src={item.imgSrc} alt={item.altText} />
                                  </div>
                                  <div className="about-page-4-1-1">
                                    <p>{item.pText}</p>
                                  </div>
                                  <div className="about-page-4-1-2 d-flex align-items-center">
                                    <img src={item.imgSrc2} alt={item.altText2} />
                                    <div className="about-page-4-1-2-0">
                                      <h6>{item.h6Text}</h6>
                                      <p>{item.pText2}</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                </div>
                <a className="carousel-control-prev bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="prev">
                  <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next bg-transparent w-aut" href="#recipeCarousel" role="button" data-bs-slide="next">
                  <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
              </div>
            </div>		
          </div>
        </div>
    </div>
</section>
  )
}


export default Feedback

