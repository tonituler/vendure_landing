import React from 'react'
import { FiArrowRight, FiChevronUp } from 'react-icons/fi'
import sitelogo from '../assets/siteicon.png';

const Footer = () => {
  return (
    <footer id="footer" className="text-[#fdf8f4] scroll-mt-24">
      
      <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
          <div className="lg:col-span-2">
            <h3 className="text-xl sm:text-2xl font-semibold">Be the first to get the latest news about trends, inspiration & more</h3>
            <label className="block mt-6 text-sm text-[#fdf8f4]/70">Email Address</label>
            <div className="mt-2 flex items-center rounded-xl bg-[#1a1d23] ring-1 ring-white/10 overflow-hidden">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 bg-transparent px-4 py-3 outline-none placeholder:text-[#fdf8f4]/60 text-sm"
                required
              />
              <button className="h-12 w-12 flex items-center justify-center text-[#fdf8f4]/90 hover:text-[#fdf8f4]">
                <FiArrowRight />
              </button>
            </div>
            <p className="mt-3 text-xs text-[#fdf8f4]/60">By subscribing, you’re accept our Privacy Policy</p>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Work Inquiry</h4>
            <div className="mt-3 space-y-1 text-[#fdf8f4]/85 text-sm">
              <div>info@vendurecapital.com</div>
              <div>+0685689696</div>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold">Links</h4>
            <div className="mt-3 space-y-1 text-[#fdf8f4]/85 text-sm">
              <a href="#">Terms & Conditions</a><br />
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-7xl px-4 md:px-6 lg:px-8 py-8 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 "><img src={sitelogo} alt="Vendure logo" /></div>
            <div className="text-sm">
              <div>© 2025 Vendure Capital Partners.</div>
              <div className="text-[#fdf8f4]/70">All Right Reserved</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <a href="#top" className="inline-flex h-10 w-10 items-center justify-center rounded-full ring-1 ring-white/15 bg-transparent hover:bg-white/10">
              <FiChevronUp />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
