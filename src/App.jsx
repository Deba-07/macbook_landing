import gsap from 'gsap'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import ProductViewer from './components/ProductViewer'
import { ScrollTrigger, SplitText } from 'gsap/all'
import { Scroll } from '@react-three/drei'

gsap.registerPlugin(ScrollTrigger)

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <ProductViewer />
    </main>
  )
}

export default App