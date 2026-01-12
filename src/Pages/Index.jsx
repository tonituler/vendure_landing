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
    <div className="scroll-smooth min-h-screen b sm:bg-[#234f52]

    ">
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
