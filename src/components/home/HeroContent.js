import { Link } from 'react-router-dom';
import StartButton from '../../assets/img/index/start-button.png'

function HeroContent() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <div className="hero-content">
            <h6>The future of investing</h6>
            <h1>YOU DREAM IT
            </h1>
            <h1>
              WE HELP TO
            </h1>
            <h1>
              ACHEIVE IT
            </h1>
            <p>
              Investing requires saving money to invest, then developing a diversified portfolio. Portfolios need to be
              adjusted periodically based on life changes but the focus should remain on the long term.

            </p>
            <div className="hero-content-button">
              <Link to="plan.html">
                <img src={StartButton} alt='Start Button'/>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroContent