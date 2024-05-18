import  InvestOne from '../../assets/img/index/invest-plan/1.png'
import  InvestTwo from '../../assets/img/index/invest-plan/2.png'
import  InvestThree from '../../assets/img/index/invest-plan/3.png'
import { Link } from 'react-router-dom'
function Carts() {

  const planList = [
    { 
      className: 'justify-content-lg-end',
      linkText:'Invest Now',
      number:'1',
      src:InvestOne,
      h4Text:'Bronze Pack',
      percentText:'50%',
      percentName:'ROI',
      pText:'Daily for 30 days',
      depositName:'Min deposit:',
      depositPercent:'$20',

    },
      
    { 
      className: 'justify-content-lg-center',
      linkText:'Invest Now',
      number:'2',
      src:InvestTwo,
      h4Text:'Silver Pack',
      percentText:'80%',
      percentName:'ROI',
      pText:'Daily for 30 days',
      depositName:'Min deposit:',
      depositPercent:'$100',
    },
    {  
      className: 'justify-content-lg-start',
      linkText:'Invest Now',
      number:'3',
      src:InvestThree,
      h4Text:'Gold Pack',
      percentText:'120%',
      percentName:'ROI',
      pText:'Daily for 30 days',
      depositName:'Min deposit:',
      depositPercent:'$500',
     }
  ];
  return (
    <div className="col-12">
          <div className="row">
            {
              planList.map((item,index) => (
                <div className={`col-12 col-lg-4 d-flex justify-content-center ${item.className}`} key={index}>
                <div className="invest-pack-1">
                  <span>
                    {item.number}
                  </span>
                  <div className="invest-pack-1-0">
                    <img src={item.src} alt="InvestPlan"/>
                    <h4>
                      {item.h4Text}
                    </h4>
                    <div>
                      <span>{item.percentText}</span>
                      <span>
                        {item.percentName}
                      </span>
                    </div>
                    <p>
                      {item.pText}
                    </p>
                    <div className="invest-pack-1-0-0">
                      <span>{item.depositName}</span>
                      <span>{item.depositPercent}</span>
                    </div>
                  </div>
                  <Link to='#'>
                    {item.linkText}
                  </Link>
                </div>
              </div>
              ))
            }
            
          </div>
        </div>
  )
}

export default Carts