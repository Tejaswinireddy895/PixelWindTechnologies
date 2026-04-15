"use client";
import { useState } from "react";
import Link from "next/link";
import { CORE_SERVICES, TECH_SERVICES } from "@/data/servicesData";
import { FiArrowRight } from "react-icons/fi";

const TABS = [{ label:"Training & Staffing", key:"core" },{ label:"Technology Services", key:"tech" }];

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const services = active === 0 ? CORE_SERVICES : TECH_SERVICES;
  return (
    <section id="services" className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="inline-block text-xs font-bold text-brand uppercase tracking-widest mb-4">Services</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">Our Services: Building Your Career Future</h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto">From IT training to career placement and tech solutions — every stage covered.</p>
        </div>
        <div className="flex gap-2 justify-center mb-8">
          {TABS.map((tab, i) => (
            <button key={i} onClick={() => setActive(i)}
              className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all border ${active === i ? "bg-brand text-white border-brand shadow-md shadow-brand/20" : "bg-white text-gray-600 border-gray-200 hover:border-brand hover:text-brand"}`}>
              {tab.label}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {services.map((svc,index) => (
            <Link key={svc.id} href={svc.href}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:border-brand hover:shadow-xl hover:-translate-y-1.5 transition-all duration-200">
<div className="mb-4">
  <div
    className={`w-12 h-12 flex items-center justify-center rounded-xl
    ${index % 6 === 0 ? "bg-blue-100 text-blue-600" : ""}
    ${index % 6 === 1 ? "bg-green-100 text-green-600" : ""}
    ${index % 6 === 2 ? "bg-orange-100 text-orange-600" : ""}
    ${index % 6 === 3 ? "bg-purple-100 text-purple-600" : ""}
    ${index % 6 === 4 ? "bg-pink-100 text-pink-600" : ""}
    ${index % 6 === 5 ? "bg-cyan-100 text-cyan-600" : ""}
    `}
  >
    <svc.icon size={22} />
  </div>
</div>           <h3 className="font-bold text-gray-900 text-sm mb-2 group-hover:text-brand transition-colors">{svc.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed mb-4">{svc.desc}</p>
              <div className="flex items-center gap-1 text-brand text-xs font-semibold">Learn More <FiArrowRight size={12} /></div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}