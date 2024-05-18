import Footer from '../../components/Footer'
import PagesHeader from '../../components/PagesHeader'
import Sidebar from '../../components/Sidebar'

import PageIntro from '../../components/plan/PageIntro'
import Tabs from '../../components/term/Tabs'
function Terms() {
  return (
    <div className='main'>
        <Sidebar />
        <PagesHeader 
          page="Terms and Services"
        />
        <PageIntro page="terms"/>
        <Tabs />
        <Footer />
    </div>
  )
}

export default Terms