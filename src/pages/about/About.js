import React from 'react'

import PagesHeader from '../../components/PagesHeader'
import Deatils from '../../components/about/Deatils'
import Carts from '../../components/about/Carts'
import Steps from '../../components/about/Steps'
import Feedback from '../../components/about/Feedback'
import Footer from '../../components/Footer'
import Sidebar from '../../components/Sidebar'

function About() {
  return (
   
    <div className='main'>
      <Sidebar />
      <PagesHeader 
        page="About Us"
      />
      <Deatils 
         
      />
      <Carts />
      <Steps />
      <Feedback />
      <Footer />
    </div>
  )
}

export default About