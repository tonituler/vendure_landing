import React from 'react'
import Navbar from '../components/Navbar'
import Home from '../components/Home'
import Services from '../components/Services'
import Testimony from '../components/Testimony'
import FAQs from '../components/FAQs'
import Footer from '../components/Footer'
import AboutUs from '../components/AboutUs'
import Test from '../components/test'
// import Featured from '../components/Featured'


const Index = () => {
  return (
    <div className="scroll-smooth min-h-screen bg-[linear-gradient(to_top,#e9edee,#92a6a7,#91a6a9,#234f52,#234f52,#0e1b1c)] sm:bg-[linear-gradient(to_top_right,white,#e9edee,#92a6a7,#91a6a9,#234f52,#234f52,#0e1b1c,#050c0d)]">
      <Navbar />
      <main className="pt-28">
        <Home />
        <AboutUs />
        <div className='bg-[#1b1e23]'>
           <Services />
           {/* <Test/>+ */}
           {/* <Testimony /> */}
           <FAQs />
           {/* <Footer /> */}
        </div>
        

      </main>
    </div>
  )
}

export default Index
