import React, { useEffect, useMemo, useRef, useState } from 'react'
import { RiDoubleQuotesL } from 'react-icons/ri'
import sitelogo from '../assets/siteicon.png';


const Testimony = () => {
  const slides = useMemo(
    () => [
      {
        title: 'Inclusive Economic Growth',
        text:
          'Supporting businesses that drive job creation, local value chains and productivity across key sectors.',
      },
      {
        title: 'Women & Youth Empowerment',
        text:
          'Prioritizing enterprises that expand economic opportunities for women and young people.',
      },
      {
        title: 'Responsible Governance & Transparency',
        text:
          'Strengthening internal controls, reporting and ethical practices to build investment-ready businesses.',
      },
      {
        title: 'Environmental Stewardship',
        text:
          'Encouraging efficient resource use, sustainable operations and responsible environmental management.',
      },
 
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const [reveal, setReveal] = useState(false)
  const [paused, setPaused] = useState(false)
  const [dragX, setDragX] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const startXRef = useRef(0)

  useEffect(() => {
    if (paused) return
    const id = setInterval(() => setIndex((i) => (i + 1) % slides.length), 4500)
    return () => clearInterval(id)
  }, [slides.length, paused])

  useEffect(() => {
    const el = document.getElementById('testimony')
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

  // use slides directly in the carousel track
  return (
    <section id="testimony" className={`mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16 scroll-mt-24 transition-all duration-700 ${reveal ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
      <div className="rounded-3xl bg-[#f15a25] text-[#fdf8f4] ring-1 ring-white/10 p-6 sm:p-8 md:p-10">
        <div className="flex flex-col lg:flex-row gap-20 md:gap-36">
          <div className="flex items-center justify-center">
            <div className="relative h-44 w-44 sm:h-52 sm:w-52 rounded-full ring-1 ring-[#fdf8f4]/5 flex items-center justify-center">
              <img src={sitelogo} alt="" className="h-20 w-20 object-contain filter brightness-0 invert" />
              <svg viewBox="0 0 160 160" className="absolute inset-0">
                <defs>
                  <path id="tcircle" d="M80,80 m-68,0 a68,68 0 1,1 136,0 a68,68 0 1,1 -136,0" />
                </defs>
                <text fill="#fdf8f4" fontSize="15" letterSpacing="5">
                  <textPath href="#tcircle" startOffset="0%">
                    OUR • CORE • IMPACT •   PRIORITIES •
                  </textPath>
                </text>
              </svg>
            </div>
          </div>

          <div>
            <div className="overflow-hidden">
              <div
                className={`flex ${isDragging ? 'transition-none cursor-grabbing' : 'transition-transform duration-700 cursor-grab'} select-none touch-pan-y`}
                style={{ transform: `translateX(calc(-${index * 100}% + ${dragX}px))` }}
                onPointerDown={(e) => {
                  setIsDragging(true)
                  setPaused(true)
                  startXRef.current = e.clientX
                  setDragX(0)
                  e.currentTarget.setPointerCapture && e.currentTarget.setPointerCapture(e.pointerId)
                }}
                onPointerMove={(e) => {
                  if (!isDragging) return
                  const dx = e.clientX - startXRef.current
                  setDragX(dx)
                }}
                onPointerUp={() => {
                  if (!isDragging) return
                  const threshold = 50
                  setIndex((i) => {
                    if (dragX <= -threshold && i < slides.length - 1) return i + 1
                    if (dragX >= threshold && i > 0) return i - 1
                    return i
                  })
                  setDragX(0)
                  setIsDragging(false)
                  setPaused(false)
                }}
                onPointerLeave={() => {
                  if (!isDragging) return
                  const threshold = 50
                  setIndex((i) => {
                    if (dragX <= -threshold && i < slides.length - 1) return i + 1
                    if (dragX >= threshold && i > 0) return i - 1
                    return i
                  })
                  setDragX(0)
                  setIsDragging(false)
                  setPaused(false)
                }}
              >
                {slides.map((s) => (
                  <article key={s.title} className="w-full shrink-0">
                    <div className="flex items-center gap-3">
                      <div>
                        <div className="text-3xl font-medium">{s.title}</div>
                      </div>
                    </div>
                    <div className="mt-6 border-t border-white/10"></div>
                    <p className="mt-2 text-md l">
                      “{s.text || s.title}”
                    </p>
                  </article>
                ))}
              </div>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="hidden sm:flex items-center">
                <div className="relative h-8 w-16  rounded-full ring-1 ring-white/15 bg-[#171a20] overflow-hidden">
                  <div className="absolute right-2 inset-y-0 flex items-center gap-2">
                    {slides.map((_, i) => (
                      <button
                        key={`dot-${i}`}
                        type="button"
                        onClick={() => setIndex(i)}
                        className={`h-1.5 w-1.5 rounded-full ${i === index ? 'bg-[#fdf8f4]' : 'bg-white/30'}`}
                        aria-label={`Go to slide ${i + 1}`}
                      ></button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    
      </div>
    </section>
  )
}

export default Testimony
