import LeftAbout from '../../assets/img/about/left-about.png';
import SmallAbout from '../../assets/img/about/about-left-small.png';
import PageIntro from '../plan/PageIntro';

function Deatils() {
  return (
    <section className="about-page-1">
    <div className="container">
        <div className="row d-flex">
            <div className="col-12 col-lg-6 order-1 order-lg-0">
                <div className="about-page-1-0">
                    <img src={LeftAbout} id="about-left-desktop" alt='Left About'/>
                    <img src={SmallAbout} id="about-left-mobile" alt='Mobile Left' />
                </div>
            </div>
            <div className="col-12 col-lg-6 d-flex align-items-center order-0 order-lg-1">
                
                    <PageIntro page="about"/>
                
            </div>
        </div>
    </div>
</section>
  )
}

export default Deatils