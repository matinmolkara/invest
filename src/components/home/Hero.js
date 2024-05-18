import Header from '../../components/Header';
import HeroContent from './HeroContent';
import HeroFooter from './HeroFooter';



function Hero() {
  return (
    <section className='hero'>
      <Header />
      <HeroContent />
      <HeroFooter />
    </section>
  )
}

export default Hero