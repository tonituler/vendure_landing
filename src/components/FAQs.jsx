import React, { useEffect, useState } from 'react'
import { FiPlus, FiMinus } from 'react-icons/fi'

const data = [
  {
    q: "What is Vendure Capital Partners?",
    a: "Vendure Capital Partners is a private investment and enterprise development platform focused on scaling unlisted African businesses through flexible capital, strategic support, and structured liquidity pathways.",
  },
  {
    q: "What types of businesses does Vendure invest in?",
    a: "We invest in high-potential SMEs and growth-stage ventures across Africa’s real-economy value chains, with strong fundamentals and clear growth potential.",
  },
  {
    q: "What kind of funding does Vendure provide?",
    a: "We provide tailored investment structures including equity, quasi-equity, revenue-based financing, and asset-backed facilities aligned with each company’s growth stage.",
  },
  {
    q: "Does Vendure offer support beyond capital?",
    a: "Yes. Alongside funding, we provide hands-on support in governance, financial discipline, operational processes, leadership, and market strategy to help businesses scale sustainably.",
  },
  {
    q: "How does Vendure approach exits and liquidity?",
    a: "Our model is designed to prepare businesses for structured exits such as consolidation, strategic investments, or future inclusion in public or institutional investment vehicles.",
  },
  {
    q: "How does Vendure integrate impact and sustainability?",
    a: "Impact and ESG are embedded in every investment. We focus on inclusive economic growth, job creation, women and youth empowerment, responsible governance, and environmental stewardship.",
  },
  {
    q: "How can I contact Vendure Capital Partners?",
    a: "You can reach us via email at info@vendurecapital.com with a brief introduction about your business or inquiry.",
  },

]

const FAQs = () => {
  const [open, setOpen] = useState(1)
  const [reveal, setReveal] = useState(false)
  useEffect(() => {
    const el = document.getElementById('faqs')
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
    <section id="faqs" className={`mx-auto max-w-3xl md:max-w-4xl lg:max-w-5xl px-4 md:px-6 lg:px-7 py-20 text-white scroll-mt-16 transition-all duration-700 ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <h2 className="text-center text-3xl font-semibold">
        <span>Ask Us </span>
        <span className="italic text-[#f15a25]">Anything</span>
      </h2>

      <div className="mt-8 space-y-4">
        {data.map((item, i) => {
          const active = i === open
          return (
            <div
              key={item.q}
              className={`rounded-2xl ring-1 transition-all duration-300 ${
                active ? 'bg-[#f15a25] ring-[#f15a25] shadow-lg' : 'bg-[#111317] ring-white/10 hover:bg-white/5'
              }`}
            >
              <button
                type="button"
                onClick={() => setOpen(active ? -1 : i)}
                aria-expanded={active}
                className="w-full flex items-center justify-between px-6 py-5 sm:px-7 sm:py-6 transition-colors"
              >
                <span className={`text-lg sm:text-3xl font-medium ${active ? 'text-white' : 'text-white'}`}>{item.q}</span>
                {active ? (
                  <FiMinus size={22} className="text-white" />
                ) : (
                  <FiPlus size={22} className="text-white/90" />
                )}
              </button>
              <div className={`grid transition-all duration-300 ${active ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                <div className="overflow-hidden px-6 pb-5 sm:px-7 sm:pb-6">
                  <p className="text-base text-md text-white/90 max-w-3xl">
                    {item.a}
                  </p>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default FAQs
