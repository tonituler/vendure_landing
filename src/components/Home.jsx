import React, { useEffect, useState } from 'react'
import { FaXTwitter, FaInstagram, FaDribbble } from 'react-icons/fa6'
import { MdKeyboardArrowRight } from "react-icons/md";
import { FaPhoneVolume } from "react-icons/fa6";
import { SiFacebook } from "react-icons/si";
import { BiLogoGmail } from "react-icons/bi";

const Home = () => {
  const [reveal, setReveal] = useState(false)
  useEffect(() => {
    const el = document.getElementById('home')
    if (!el) return
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setReveal(true)
          obs.disconnect()
        }
      },
      { rootMargin: '0px 0px -20% 0px', threshold: 0.15 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])
  return (
    <>
    <section id="home" className=" mx-auto max-w-7xl px-4 md:px-6 lg:px-8 mt-16 scroll-mt-24">
      <div className={`grid grid-cols-1 min-[1150px]:grid-cols-2 lg:gap-7 xl transition-all duration-700 ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        <div className="pt-4 space-y-2 lg:space-y-16">
            <div className="max-lg:text-center lg:max-w-[80%] ">
                <h1 className="text-5xl lg:text-6xl font-semibold text-[#fdf8f4] font-montserrat leading-15">Unlocking Growth for <span className='italic text-[#dca94e]'>Africa's Unlisted Enterprises</span> </h1>
            </div>
         
          <div className=" hidden lg:flex items-center justify-center lg:justify-start gap-4">
            <a href="#"  className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-[#fdf8f4] hover:bg-transparent hover:text-white text-gray-900 shadow-sm ring-1 ring-white">
             <FaPhoneVolume size={20}/>
            </a>
            <a href="mailto:info@vendurecapital.com" className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-[#fdf8f4] hover:bg-transparent hover:text-white text-gray-900 shadow-sm ring-1 ring-white">
              <BiLogoGmail size={20}/>            
            </a>
            <a href="#" className="h-11 w-11 inline-flex items-center justify-center rounded-full bg-[#fdf8f4]  hover:bg-transparent hover:text-white text-gray-900 shadow-sm ring-1 ring-white">
              <SiFacebook size={20}/>
            </a>
          </div>
        </div>

        <div className="pt-1 lg:pt-10  justify-end lg:ml-auto">
          <p className="text-[#fdf8f4]  lg:mx-0 text-center lg:text-left lg:text-2xl font-campton">
             Transforming high-potential African SMEs into scalable, investment-ready businesses through capital, capacity building, and catalytic partnerships.
          </p>
          <div className='flex justify-center lg:justify-start'>
            <a href="#" className="mt-6 mx-auto lg:mx-0 inline-flex items-center justify-center gap-2 rounded-full ring-1 ring-white/20 px-5 py-2.5 text-[#fdf8f4] font-medium hover:bg-[#dca94e] transition-colors font-campton">
                <span>Learn More</span>
                <MdKeyboardArrowRight size={25}/>
           </a>
          </div>

          <div className="mt-10 lg:mt-28 border-t border-white/15"></div>
          <div className="mt-8 flex flex-col sm:flex-row sm:justify-between gap-10 sm:gap-24 text-white font-campton">
            <div>
              <div className="text-5xl sm:text-8xl font-semibold leading-tight bg-linear-to-r from-[#fdf8f4] via-[#dfb260] to-[#dca94e] bg-clip-text text-transparent ">98%</div>

              <p className="mt-2 text-xs tracking-wide text-[#fdf8f4]">CLIENTS SATISFIED AND REPEATING</p>
            </div>
            <div>
              <div className="text-5xl sm:text-8xl font-semibold leading-tight bg-linear-to-r from-[#fdf8f4] via-[#dfb260] to-[#dca94e] bg-clip-text text-transparent">125+</div>
              <p className="mt-2 text-xs tracking-wide text-[#fdf8f4]">PROJECTS COMPLETED IN 24 COUNTRIES</p>
            </div>
          </div>
        </div>
      </div>

  
    </section>

   

  </>
  )
};

export default Home
