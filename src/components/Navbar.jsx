import React, { useState, useEffect, useMemo } from 'react'
import { TbLetterH } from 'react-icons/tb'
import { FiArrowUpRight } from 'react-icons/fi'
import { RiMenu3Line } from 'react-icons/ri'
import Logo from '../assets/logo.jpg';

const LogoIcon = (props) => <TbLetterH size={22} {...props} />
const ArrowUpRight = (props) => <FiArrowUpRight size={18} {...props} />
const MenuIcon = (props) => <RiMenu3Line size={20} {...props} />

const Navbar = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  const navItems = useMemo(() => ['Home', 'About Us', 'Values','Impact', 'FAQs'], [])
  const navMap = useMemo(() => ({
    'Home': 'home',
    'About Us': 'about-us',
    'Values': 'values',
    'Impact': 'testimony',
    'FAQs': 'faqs',
  }), [])
  const [activeItem, setActiveItem] = useState('Home')
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const labelById = {}
    const ids = navItems.map((label) => {
      const id = navMap[label] ?? label.toLowerCase().replace(/\s+/g, '-')
      labelById[id] = label
      return id
    })

    const updateActiveFromScroll = () => {
      const headerOffset = 120
      const y = window.scrollY + headerOffset
      let current = 'Home'
      ids.forEach((id) => {
        const el = document.getElementById(id)
        if (!el) return
        const top = el.offsetTop
        if (y >= top) current = labelById[id]
      })
      setActiveItem(current)
      setScrolled(window.scrollY > 800)
      const max = Math.max(1, document.documentElement.scrollHeight - window.innerHeight)
      setProgress(Math.min(100, Math.max(0, (window.scrollY / max) * 100)))
    }

    const onScroll = () => {
      // throttle via rAF
      if (typeof window.__navRaf !== 'number') {
        window.__navRaf = requestAnimationFrame(() => {
          updateActiveFromScroll()
          window.__navRaf = undefined
        })
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    updateActiveFromScroll()

    return () => {
      window.removeEventListener('scroll', onScroll)
      if (typeof window.__navRaf === 'number') cancelAnimationFrame(window.__navRaf)
    }
  }, [navItems, navMap])


  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 w-full py-1 transition-all duration-300 font-campton text[#fdf8f4]
      ${scrolled 
        ? " backdrop-blur-xl  " 
        : "bg-transparent backdrop-blur-lg"
      }`}
    >

      <div className="">
        <nav className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 ">
          <div className="flex items-center justify-between">

          <div className='flex items-center'> 
                {/* Logo */}
                <a href="#" className="flex items-center rounded-full  py-1">
                  <img src={Logo} className="w-50 " alt="Venture logo" />
                </a>

                {/* Desktop Menu */}
                <ul className="hidden lg:flex items-center gap-1  px-2 py-2.5">
                  {navItems.map((label) => (
                    <li key={label} className="relative">
                      <a
                        href={`#${navMap[label] ?? label.toLowerCase().replace(/\s+/g, '-')}`}
                        onClick={(e) => {
                          e.preventDefault()
                          const id = navMap[label] ?? label.toLowerCase().replace(/\s+/g, '-')
                          const el = document.getElementById(id)
                          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                          else if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
                          setActiveItem(label)
                        }}
                        className={`relative group px-5 py-2.5 rounded-full text-sm text-[#fdf8f4] `}
                      >
                        {label}
                        <span
                          className={`pointer-events-none absolute left-5 right-5 bottom-1 h-0.5 bg-[#fdf8f4] origin-left transition-transform duration-300 ${
                            activeItem === label ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                          }`}
                        />
                      </a>
                    </li>
                  ))}
                </ul>
                  </div>
            {/* Right Buttons */}
            <div className="flex items-center gap-3">
              <a
                href="#footer"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('footer')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="hidden lg:inline-flex items-center gap-2 rounded-xl bg-[#f15a25] text-[#fdf8f4] px-5 py-2 font-medium shadow-sm hover:bg-[#fdf8f4]/95 hover:text-black transition-colors"
              >
                <span>Contact Us</span>
                <ArrowUpRight  />
              </a>

              <button
                type="button"
                aria-label="Menu"
                aria-expanded={open}
                onClick={() => setOpen((v) => !v)}
                className="inline-flex lg:hidden items-center justify-center rounded-md p-2 text-white/90 hover:bg-white/15 ring-1 ring-white/20"
              >
                <MenuIcon />
              </button>
            </div>
          </div>
        </nav>
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-0.5 bg-white/10">
          <div className="h-full bg-[#f15a25]" style={{ width: `${progress}%` }}></div>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="lg:hidden absolute inset-x-0 top-full mx-4 sm:mx-6 lg:mx-8 mt-2 rounded-2xl bg-black/50 ring-1 ring-white/20 backdrop-blur-md">
            <div className="flex flex-col p-3">
              <a
                href="#footer"
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById('footer')
                  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                }}
                className="inline-flex items-center gap-2 rounded-xl bg-[#f15a25] text-[#fdf8f4] px-5 py-2 font-medium shadow-sm hover:bg-[#fdf8f4]/95 hover:text-black transition-colors"
              >
                <span>Contact Us</span>
                <ArrowUpRight  />
              </a>

              <ul className="mt-2 divide-y divide-white/10">
                {navItems.map((label) => (
                  <li key={`m-${label}`}>
                    <a
                      href={`#${navMap[label] ?? label.toLowerCase().replace(/\s+/g, '-')}`}
                      onClick={(e) => {
                        e.preventDefault()
                        const id = navMap[label] ?? label.toLowerCase().replace(/\s+/g, '-')
                        const el = document.getElementById(id)
                        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                        else if (id === 'home') window.scrollTo({ top: 0, behavior: 'smooth' })
                        setOpen(false)
                      }}
                      className={`flex items-center justify-between px-4 py-3 text-sm ${
                        label === 'Home' ? 'text-white' : 'text-white/80'
                      }`}
                    >
                      <span>{label}</span>
                      {label === 'Home' && (
                        <span className="inline-block h-2 w-2 rounded-full bg-white"></span>
                      )}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar
