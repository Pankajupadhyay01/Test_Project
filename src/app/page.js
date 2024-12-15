import Header from '@/app/component/Header'
import HeroSection from './component/HeroSection'
import HobbyCards from './component/HobbyCards'
import CTA from './component/CTA'
import Testimonials from './component/Testimonials'
import Footer from './component/Footer'
import EndSection from './component/EndSection'
const page = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <HobbyCards />
      <CTA />
      <Testimonials />
      <EndSection />
      <Footer />
    </div>
  )
}

export default page
