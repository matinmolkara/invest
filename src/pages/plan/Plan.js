import Footer from '../../components/Footer'
import PagesHeader from '../../components/PagesHeader'
import Sidebar from '../../components/Sidebar'
import Banner from '../../components/plan/Banner'
import ChoosePlan from '../../components/plan/ChoosePlan'
import SuperPack from '../../components/plan/SuperPack'

function Plan() {
  return (
    <div className='main'>
        <Sidebar />
        <PagesHeader 
          page="Plans"
        />
        <ChoosePlan 
          
        />
        <SuperPack />
        <Banner />
        <Footer />
    </div>
  )
}

export default Plan