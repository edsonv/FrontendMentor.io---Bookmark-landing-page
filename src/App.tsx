import Downloads from './components/sections/Downloads.section'
import FAQ from './components/sections/FAQ.section'
import Features from './components/sections/Features.section'
import Footer from './components/sections/Footer.section'
import Header from './components/sections/Header.section'
import Hero from './components/sections/Hero.section'
import Subscribe from './components/sections/Subscribe.section'

function App() {

  return (
    <div className='relative'>
      {/* <div className='design-overlay'>
        <img src="/Desktop.png" alt="" />
      </div> */}
      <Header />
      <main>
        <Hero />

        <Features />

        <Downloads/>

        <FAQ/>

        <Subscribe/>

        <Footer/>

      </main>
    </div>
  )
}

export default App
