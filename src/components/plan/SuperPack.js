import  Star from '../../assets/img/index/star5.png'
import React from 'react'

function SuperPack() {
  return (
    <section className="super-pack">
   <div className="container">
    <div className="row">
        <div className="col-12">
            <div className="invest-pack-2">
                <div className="invest-pack-2-0">
                  <h3>
                    Super pack
                  </h3>
                  <div className="">
                    <span><img src={Star} alt='Star'/></span>
                    <span><img src={Star} alt='Star'/></span>
                    <span><img src={Star} alt='Star'/></span>
                    <span><img src={Star} alt='Star'/></span>
                    <span><img src={Star} alt='Star' /></span>
                  </div>
                  <p>
                    This is a Revolutionary Money Making Platform! Invest for Future in Stable Platform and Make Fast Money. Not only we guarantee the fastest and the most exciting returns on your investments, but we also guarantee the security of your investment.
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

export default SuperPack