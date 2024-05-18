import  Star from '../../assets/img/index/star5.png'
import Carts from '../plan/Carts'

function Plans() {
  return (
    <section className="invest-pack">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="invest-pack-0">
            <h3>Our investment packs
            </h3>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit
            </p>
          </div>
        </div>
        <Carts />
        <div className="col-12">
          <div className="invest-pack-2">
            <div className="invest-pack-2-0">
              <h3>
                Super pack
              </h3>
              <div className="">
                {[0,1,2,3,4].map(() =>(
                      <span><img src={Star} alt="Star"/></span>
                ))
                }
  
              </div>
              <p>
                This is a Revolutionary Money Making Platform! Invest for Future in Stable Platform and Make Fast Money.
                Not only we guarantee the fastest and the most exciting returns on your investments, but we also
                guarantee the security of your investment.
              </p>
              <button>
                invest now
              </button>
            </div>
          </div>
        </div>
      </div>

    </div>
  </section>
  )
}

export default Plans