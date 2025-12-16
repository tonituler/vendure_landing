// // import React from "react";
// import { FaChevronRight, FaCrown, FaBezierCurve, FaCode, FaChartLine } from "react-icons/fa";

// const services = [
//   {
//     title: "Branding",
//     text: "Brand Identity, Strategy & Consult, Position, Rebrand",
//     icon: <FaCrown className="text-3xl" />,
//   },
//   {
//     title: "Design",
//     text: "Brand Identity, Strategy & Consult, Position, Rebrand",
//     icon: <FaBezierCurve className="text-3xl" />,
//   },
//   {
//     title: "Code",
//     text: "Brand Identity, Strategy & Consult, Position, Rebrand",
//     icon: <FaCode className="text-3xl" />,
//   },
//   {
//     title: "Growth",
//     text: "Brand Identity, Strategy & Consult, Position, Rebrand",
//     icon: <FaChartLine className="text-3xl" />,
//   },
// ];

// export default function Services() {
//   return (
//     <section className="py-16 services-ds">
//       <div className="max-w-6xl mx-auto px-4">

//         {/* Header */}
//         <div className="flex items-center mb-14 animate-fade-in">
//           <h2 className="text-3xl font-bold">
//             Our <span className="text-indigo-600">Services</span>
//           </h2>

//           <div className="ml-auto">
//             <a
//               href="/services"
//               className="border border-black py-2 px-5 rounded-full inline-flex items-center gap-3 
//                   hover:bg-black hover:text-white transition duration-300"
//             >
//               <span>See Our Approach</span>
//               <FaChevronRight className="text-sm" />
//             </a>
//           </div>
//         </div>

//         {/* Items */}
//         <div className="space-y-8">
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className="
//                 flex items-center justify-between border-b pb-6 
//                 opacity-0 translate-y-6 animate-slide-up animation-delay
//                 hover:-translate-y-1 transition-transform duration-300
//               "
//               style={{ animationDelay: `${index * 0.15}s` }}
//             >
//               <h2 className="text-3xl font-semibold relative group">
//                 {service.title}

//                 {/* Underline animation */}
//                 <span
//                   className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-600 
//                            group-hover:w-full transition-all duration-300"
//                 ></span>
//               </h2>

//               <div className="flex items-center gap-6">
//                 <p className="text-gray-700 leading-relaxed">{service.text}</p>

//                 <div className="text-black invert hover:invert-0 transition duration-300">
//                   {service.icon}
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>

//       </div>
//     </section>
//   );
// }

  // <section className=''> 
  //     <div className='relative mx-auto max-w-[87%] px-4 md:px-6 lg:px-8 mt-50 '>
  //         <main className="mt-16 lg:mt-24  my-10">
  //           <div className="relative h-16 w-[94%] mx-auto rounded-3xl bg-[#fefdfb] opacity-35  overflow-hidden z-20 "></div>
  //           <div className="relative h-16 w-[96%] mx-auto rounded-3xl bg-[#fefdfb] opacity-70 overflow-hidden z-20 -mt-14"></div>

  //           <div className="relative mx-auto rounded-3xl bg-[#fdf8f4] text-gray-900  overflow-hidden z-20 -mt-12">
  //             <div className=" py-5 mt-7 flex items-center justify-between text-lg font-medium max-w-[90%] mx-auto">
  //               <span>Top-notch Experts</span>
  //               <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-black/70"></span>
  //               <span>Dedicated Support 24/7</span>
  //               <span className="hidden sm:inline-block h-1 w-1 rounded-full bg-black/70"></span>
  //               <span>Flexible Pricing</span>
  //             </div>
  //             <div className="border-t border-black/30 max-w-[90%] mx-auto px-8"></div>

  //             <div className="grid md:grid-cols-2 gap-6 p-6 sm:p-8">
  //               <div>
  //                 <div className="flex items-center -space-x-3">
  //                   <div className=" ring-2 ring-white rounded-full"><img src={founder1} alt="" className='h-30 w-30 rounded-full'/></div>
  //                   <div className="ring-4 ring-white rounded-full"><img src={founder2} alt=""  className='h-30 w-30 rounded-full'/></div>
  //                 </div>
  //                 <p className="mt-3 text-sm text-gray-600 ">Founders of Hubfolio</p>
  //               </div>
  //               <div>
  //                 <p className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight">
  //                   We help business elevate their value through custom software development, product design, QA and consulting services.
  //                 </p>
  //                 <a href="#" className="mt-6 inline-flex items-center gap-2 rounded-full bg-blue-600 text-white px-5 py-2 font-medium hover:bg-blue-500">
  //                   <span>More About Us</span>
  //                   <FiArrowRight />
  //                 </a>
  //               </div>
  //             </div>
  import { useState } from "react";

function Accordion({ title, children }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-gray-300">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex justify-between items-center py-4 text-left"
      >
        <span className="text-lg font-medium">{title}</span>
        <span>{open ? "-" : "+"}</span>
      </button>

      {open && (
        <div className="pb-4 text-gray-600">
          {children}
        </div>
      )}
    </div>
  );
}

export default function Test() {
  return (
    <div className="max-w-xl mx-auto mt-10">
      <Accordion title="What is an accordion?">
        It's a clickable UI component that expands and collapses to show or hide content.
      </Accordion>

      <Accordion title="Why is it useful?">
        It helps organize lots of content into smaller sections.
      </Accordion>
    </div>
  );
}
