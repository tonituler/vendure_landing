import React, { useEffect, useState } from 'react';
import heroimg from '../assets/heroimg.jpg';

const AboutUs = () => {

  const [reveal, setReveal] = useState(false)
  useEffect(() => {
    const id = setTimeout(() => setReveal(true), 80)
    return () => clearTimeout(id)
  }, [])

  const values = [
    {
      title: 'Simplicity',
      text:
        'We believe in clear straightforward solutions, cutting through complexities to make our solutions easy to understand and navigate by all stakeholders.',
    },
    {
      title: 'Excellence',
      text:
        'We pursue the highest standards in everything we do, ensuring that our work consistently drives superior outcomes and long-term value.',
    },
    {
      title: 'Trust',
      text:
        'We cultivate relationships rooted in integrity, transparency, and reliability, earning the confidence of our partners.',
    },
    {
      title: 'Sustainability',
      text:
        'We are committed to creating lasting impact, investing in ventures and practices that deliver enduring economic, social, and environmental value.',
    },
  ]

  return (
    <section id='about-us' className="relative mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-20 text-[#fdf8f4] mt-5 scroll-mt-16">
      <header className="text-center">
        <div className="mx-auto h-0.5 w-24 bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full" />
      </header>

      <div className='mt-12 grid grid-cols-1 lg:grid-cols-2 gap-10 transition-all duration-700 '>
        <div className='flex justify-center'>
          <img src={heroimg} alt="About Us" className="w-96 ring-4 ring-[#f15a25]  rounded-full hover:ring-6 hover:ring-[#f15a25] transition-transform  duration-300 hover:scale-105 " />
        </div>

        <div className="space-y-6 p-6 sm:p-8 transition-all duration-300]">
          <h3 className="text-2xl sm:text-3xl font-semibold text-[#fdf8f4] font-montserrat">Who We Are</h3>
          <p className="text-[#fdf8f4] text-md font-campton">
            Vendure Capital Partners is a private investment and enterprise development platform focused on transforming unlisted African businesses into scalable. We invest in high-potential SMEs and growth-stage ventures across real-economy value chains. Our goal is to close Africa’s enterprise financing gap through a model anchored on capital, capacity and catalytic partnerships.
          </p>
        </div>
      </div>

      <main className={`mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12 transition-all duration-700 ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}> 
        <div className="space-y-10 flex flex-col justify-between">
          <div className=" md:py-24 rounded-2xl bg-[#fdf8f4]/10 ring-1 ring-white/10 p-6 sm:px-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-[#dca94e]">
            <h3 className="text-xl sm:text-3xl font-semibold font-montserrat text-[#fdf8f4]">Mission</h3>
            <p className="mt-3 text-[#fdf8f4]/90 leading-relaxed font-campton text-md">
              “To unlock growth for unlisted enterprises by providing capital, strategic support, and structured liquidity pathways; enabling scalable, resilient businesses to thrive and create long-term value.“
            </p>
          </div>
          <div className="md:py-24 rounded-2xl bg-[#fdf8f4]/10 ring-1 ring-white/10 p-6 sm:p-8 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:ring-[#dca94e]">
            <h3 className="text-xl sm:text-3xl font-semibold font-montserrat text-[#fdf8f4]">Vision</h3>
            <p className="mt-3 text-[#fdf8f4]/90 leading-relaxed font-campton text-md">
              “To enable growth and liquidity for unlisted enterprises, catalyzing a resilient real economy through investment, innovation, and inclusive market access.“
            </p>
          </div>
        </div>

        <div className="rounded-2xl bg-[#fdf8f4]/10 ring-1 ring-white/10 p-6 sm:p-8">
          <h3 className="text-2xl sm:text-3xl font-semibold font-montserrat">Core Values</h3>
          <ul className="mt-4 space-y-3">
            {values.map((v, idx) => (
              <li
                key={v.title}
                className="group relative rounded-xl p-4 ring-1 ring-white/10 bg-white/0 hover:bg-white/5 transition-all duration-300"
                style={{ transitionDelay: `${idx * 60}ms` }}
              >
                <div className="flex items-start gap-3 ">
                  <span className="mt-2.5 inline-block h-2 w-2 rounded-full bg-[#dca94e]"></span>
                  <div>
                    <div className="text-xl font-semibold font-montserrat">{v.title}</div>
                    <p className="mt-1 text-md text-[#fdf8f4]/85 font-campton">{v.text}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </main>

    </section>
  )
}

export default AboutUs
