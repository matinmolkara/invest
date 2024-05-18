import Footer from '../../components/Footer'
import PagesHeader from '../../components/PagesHeader'
import Form from '../../components/contact/Form'
import GetIn from '../../components/contact/GetIn'
import Sidebar from '../../components/Sidebar'
function Contact() {
  return (
    <div className='main'>
      <Sidebar />
      <PagesHeader
        page="Contact Us"
      />
      <section className="contact-us">
        <div className="container">
            <div className="row">
                <div className="contact-us-0">
                    <GetIn />
                    <Form />
                </div>
            </div>
        </div>
      </section>

    <Footer />
 </div>
  )
}

export default Contact