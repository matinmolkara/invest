import Carts from "./Carts"
import PageIntro from "./PageIntro"


function ChoosePlan() {
  return (
    <section className="choose-plan">
    <div className="container">
        <div className="row">
          <PageIntro
              page="plans"
          />
          <Carts />
          
        
        </div>
    
      </div>
    </section>
  )
}

export default ChoosePlan