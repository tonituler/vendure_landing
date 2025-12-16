import React, { useEffect, useMemo, useRef, useState } from 'react'
import { FiArrowRight } from 'react-icons/fi'
import img from '../assets/img.jpg'

const Featured = () => {
  const slides = useMemo(
    () => [
      { id: 1, image: img, title: 'Archin Architecture Studio', subtitle: 'Prototype Design, Webflow' },
      { id: 2, image: img, title: 'Portfolio Landing Concept', subtitle: 'UI Exploration, Motion' },
      { id: 3, image: img, title: 'Dark Dashboard Kit', subtitle: 'Product Design, System' },
    ],
    []
  )

  const [index, setIndex] = useState(0)
  const trackRef = useRef(null)
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length)
    }, 3500)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <section className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 bg-white">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl sm:text-4xl font-semibold text-black">
          <span>Featured </span>
          <span className="italic text-blue-700">Works</span>
        </h2>
        <a href="#" className="hidden sm:inline-flex items-center gap-2 rounded-full ring-1 ring-black/10 px-4 py-2 text-sm hover:bg-black/5">
          <span>See All Projects</span>
          <FiArrowRight />
        </a>
      </div>

      <div className="mt-6 md:hidden overflow-hidden">
        <div
          ref={trackRef}
          className="flex transition-transform duration-700"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {slides.map((s) => (
            <article key={s.id} className="w-full shrink-0">
              <div className="rounded-2xl overflow-hidden">
                <img src={s.image} alt="" className="h-56 sm:h-64 w-full object-cover" />
              </div>
              <h3 className="mt-3 text-lg font-semibold text-black">{s.title}</h3>
              <p className="text-gray-600 text-sm">{s.subtitle}</p>
            </article>
          ))}
        </div>

        <div className="mt-4 flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <span
              key={i}
              className={`h-2 w-2 rounded-full ${i === index ? 'bg-black' : 'bg-gray-300'}`}
            ></span>
          ))}
        </div>
      </div>

      <div className="mt-6 hidden md:grid grid-cols-2 lg:grid-cols-3 gap-6">
        {slides.map((s) => (
          <article key={`g-${s.id}`} className="">
            <div className="rounded-2xl overflow-hidden">
              <img src={s.image} alt="" className="h-64 lg:h-72 w-full object-cover" />
            </div>
            <h3 className="mt-3 text-lg font-semibold text-black">{s.title}</h3>
            <p className="text-gray-600 text-sm">{s.subtitle}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Featured
