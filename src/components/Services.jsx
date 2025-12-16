import React, { useEffect, useState } from 'react'
import { FiArrowRight, FiChevronDown } from 'react-icons/fi'

// Check if imports are working
// console.log('Crown import:', Crown);
// console.log('Bezier import:', Bezier);
// console.log('Code import:', Code);
// console.log('Chart import:', Chart);

const rows = [
  {
    title: 'Flexible Capital',
    bullets: 'We provide tailored investment structures — equity, quasi-equity, revenue-based financing and asset-backed facilities — matched to each company’s growth stage.',
  },
  {
    title: 'Operational Strengthening',
    bullets: 'We help enterprises formalize, scale and institutionalize governance, reporting, processes, leadership, market strategy, and financial discipline.',
  },
  {
    title: 'Clear Pathways to Liquidity',
    bullets: 'Our model is designed to prepare businesses for structured exits — including consolidation, strategic investment, or future inclusion in public investment vehicles.',
  },
  {
    title: 'Impact & Sustainability',
    bullets: 'Vendure integrates impact and ESG into every investment. We focus on delivering measurable, long-term value for communities and the economy.',
  },
]

const Services = () => {
  const [openIndex, setOpenIndex] = useState(0)
  const [reveal, setReveal] = useState(false)
  useEffect(() => {
    const el = document.getElementById('values')
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
    <section id="values" className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 text-[#fdf8f4] mt-10 pt-20 scroll-mt-16">
      <div className="flex items-center justify-between py-10">
        <h2 className="text-3xl font-semibold font-montserrat">
          <span>How We Create  </span>
          <span className="italic text-[#f15a25]">Value</span>
        </h2>
        <a href="#" className="font-campton hidden sm:inline-flex items-center gap-2 rounded-full ring-1 ring-white/20 px-7 py-4 text-sm hover:bg-[#f15a25]">
          <span>See Our Approach</span>
          <FiArrowRight />
        </a>
      </div>

      <div className={`transition-all duration-700 ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
        {rows.map((row, i) => {
          const active = i === openIndex
          return (
          <div
            key={row.title}
            className="group grid grid-cols-1 md:grid-cols-[1fr_auto] gap-6 border-t border-white/10 px-5 pt-3 transition-all duration-300 hover:bg-[#fdf8f4]/5 hover:text-[#f15a25]"
            style={{ transitionDelay: `${i * 60}ms` }}
          >
            <div className="flex items-center justify-between ">
              <h3 className="text-2xl sm:text-3xl max-w-[70%] md:max-w-full font-bold tracking-tight font-montserrat">{row.title}</h3>
              <button
                type="button"
                aria-expanded={active}
                onClick={() => setOpenIndex(active ? -1 : i)}
                className={`inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/20 bg-transparent transition-transform ${
                  active ? 'rotate-180' : ''
                }`}
              >
                <FiChevronDown />
              </button>
            </div>

            <div className="md:col-span-2">
              <div className={`grid transition-all duration-300 ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden max-w-md">
                  <p className="text-md text-[#fdf8f4]/80 md:pr-24 font-campton">{row.bullets}</p>
                </div>
              </div>
            </div>
          </div>
        )})}
      </div>
    </section>
  )
}

export default Services;
