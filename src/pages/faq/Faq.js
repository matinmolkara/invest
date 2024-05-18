import Footer from '../../components/Footer'
import PagesHeader from '../../components/PagesHeader'
import Sidebar from '../../components/Sidebar'

function Faq() {
  return (
    <div className='main'>
        <Sidebar />
        <PagesHeader
          page="Faq"
        />
        
        <Footer />
    </div>
  )
}

export default Faq