import Telephone from '../../assets/img/contact/telephone.png'
import Email from '../../assets/img/contact/email.png'
import Contact from '../../assets/img/contact/contact1.png'

function GetIn() {
  return (
    <div className="row">
                    <div className="col-12 col-lg-6">
                        <div className="contact-us-0-0">
                            <h3>
                                Get in touch
                            </h3>
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                            </p>
                            <div className="contact-us-0-0-0">
                                <img src={Telephone} alt='Telephone' />
                                <span>
                                    00905538355909
                                </span>
                            </div>
                            <div className="contact-us-0-0-0">
                                <img src={Email} alt='Email' />
                                <span>
                                    Investpack@gmail.com
                                </span>
                            </div>
                            <div className="contact-us-0-0-1">
                                <img src={Contact} alt='Contact'/>
                            </div>
                        </div>
                    </div>
                </div>
  )
}

export default GetIn