import Computer from '../../assets/img/about/about-icone/computer1.png';
import Exchange from '../../assets/img/about/about-icone/exchange1.png';
import Encrypt from '../../assets/img/about/about-icone/encrypted1.png';
import Profits from '../../assets/img/about/about-icone/profits2.png';

function Carts() {
    const cartLists =[
        {
            h5Text:'Interface',
            imgSrc:Computer
        },
        {
            h5Text:'Exchange',
            imgSrc:Exchange
        },
        {
            h5Text:'Encrypt',
            imgSrc:Encrypt
        },
        {
            h5Text:'Profits',
            imgSrc:Profits
        },
    ];
  return (
    <section className="about-page-2">
    <div className="about-page-2-0">
        <div className="container">
            <div className="row">
               
                
                {
                    cartLists.map((item,index)=>(
                        <div className="col-12 col-lg-3 d-flex justify-content-center" key={index}>
                            <div 
                                 className={
                                `${index === cartLists.length - 2 ? '' : 'about-page-2-0-0'} d-flex justify-content-center align-items-center`} 
                                id={`${index === cartLists.length - 2 ? 'featuree-22' : ''}`}>
                    
                                <div className={`${index === cartLists.length - 2 ? 'feature-22' : ''}`}>
                                    <img src={item.imgSrc} alt={item.h5Text} />
                                    <h5>
                                        {item.h5Text}
                                    </h5> 
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    </div>
</section>
  )
}

export default Carts