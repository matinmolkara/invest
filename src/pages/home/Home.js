import '../../styles/index.css'

import About from '../../components/home/About';
import Download from '../../components/home/Download';
import How from '../../components/home/How';
import Plans from '../../components/home/Plans';
import Features from '../../components/home/Features';
import Footer from '../../components/Footer';
import Sidebar from '../../components/Sidebar';
import Hero from '../../components/home/Hero';


function Home() {
 
  return (
    <div className='main'>
      
      <Hero />
      <Sidebar />
      <About />
      <Download />
      <How />
      <Plans />
      <Features />
      <Footer />
    </div>
    
  )
}

export default Home
