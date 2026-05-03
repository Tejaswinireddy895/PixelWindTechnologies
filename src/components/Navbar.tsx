"use client";
import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { INTERNSHIPS } from "@/data/servicesData";
import { useScroll } from "@/hooks/useScroll";
import { CORE_SERVICES, TECH_SERVICES, AI_SERVICES } from "@/data/servicesData";
import { FiChevronDown, FiMenu, FiX } from "react-icons/fi";
import { BsLinkedin, BsInstagram } from "react-icons/bs";

export default function Navbar() {
  const scrolled = useScroll(40);
  const [megaOpen, setMegaOpen] = useState(false);
  const [companyOpen, setCompanyOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const megaTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const companyTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const [internOpen, setInternOpen] = useState(false);
  const internTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const openIntern = () => {
    if (internTimer.current) clearTimeout(internTimer.current);
    setInternOpen(true);
  };

  const closeIntern = () => {
    internTimer.current = setTimeout(() => setInternOpen(false), 180);
  };

  const open = () => {
    if (megaTimer.current) clearTimeout(megaTimer.current);
    setMegaOpen(true);
  };

  const close = () => {
    megaTimer.current = setTimeout(() => setMegaOpen(false), 180);
  };

  const openCompany = () => {
    if (companyTimer.current) clearTimeout(companyTimer.current);
    setCompanyOpen(true);
  };

  const closeCompany = () => {
    companyTimer.current = setTimeout(() => setCompanyOpen(false), 180);
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? "px-6 py-3" : "px-0 py-0"}`}>
        <div className={`mx-auto relative flex items-center justify-between transition-all duration-500 bg-white overflow-visible ${scrolled ? "max-w-5xl rounded-full shadow-xl border border-gray-200 px-6 h-14" : "max-w-7xl px-8 h-20 border-b border-gray-100"}`}>

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <div className="w-11 h-11 rounded-2xl overflow-hidden bg-white border border-gray-200 shadow-sm flex items-center justify-center">
              <Image src="/images/logo.ico" alt="Pixelwind logo" width={44} height={44} />
            </div>
            <span className="font-bold text-lg text-gray-900">
              Pixelwind<span className="text-brand"> Technologies</span>
            </span>
          </Link>

          {/* MENU */}
          <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center gap-1">

            {/* SERVICES */}
            <div className="relative" onMouseEnter={open} onMouseLeave={close}>
              <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand hover:bg-brand-light transition-all">
                Services
                <FiChevronDown className={`transition-transform ${megaOpen ? "rotate-180 text-brand" : ""}`} size={14} />
              </button>

              {megaOpen && (
                <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[860px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5">
                  <div className="grid grid-cols-4">

                    {/* CORE */}
                    <div className="bg-brand rounded-xl p-4">
                      <p className="text-[10px] font-bold text-white/60 uppercase mb-3">Training & Staffing</p>
                      {CORE_SERVICES.map((s) => (
                        <Link key={s.id} href={s.href} className="block px-3 py-2 rounded-lg hover:bg-white/10">
                          <p className="text-xs font-semibold text-white flex items-center gap-2">
                            <s.icon size={14} />
                            {s.title}
                          </p>
                          <p className="text-[11px] text-white/70">{s.desc}</p>
                        </Link>
                      ))}
                    </div>

                    {/* TECH */}
                    <div className="p-4">
                      <p className="text-[10px] font-bold text-brand uppercase mb-3">Technology</p>
                      {TECH_SERVICES.slice(0, 4).map((s) => (
                        <Link key={s.id} href={s.href} className="block px-3 py-2 rounded-lg hover:bg-brand-light group">
                          <p className="text-xs font-semibold text-gray-800 flex items-center gap-2 group-hover:text-brand">
                            <s.icon size={14} />
                            {s.title}
                          </p>
                          <p className="text-[11px] text-gray-500">{s.desc}</p>
                        </Link>
                      ))}
                    </div>

                    {/* MORE */}
                    <div className="p-4">
                      <p className="text-[10px] font-bold text-brand uppercase mb-3">More Services</p>
                      {TECH_SERVICES.slice(4).map((s) => (
                        <Link key={s.id} href={s.href} className="block px-3 py-2 rounded-lg hover:bg-brand-light group">
                          <p className="text-xs font-semibold text-gray-800 flex items-center gap-2 group-hover:text-brand">
                            <s.icon size={14} />
                            {s.title}
                          </p>
                          <p className="text-[11px] text-gray-500">{s.desc}</p>
                        </Link>
                      ))}
                    </div>

                    {/* AI */}
                    <div className="p-4 bg-gray-50 rounded-xl">
                      <p className="text-[10px] font-bold text-purple-600 uppercase mb-3">AI & Data</p>
                      {AI_SERVICES.map((s) => (
                        <Link key={s.id} href={s.href} className="block px-3 py-2 rounded-lg hover:bg-purple-50 group">
                          <p className="text-xs font-semibold text-gray-800 flex items-center gap-2 group-hover:text-purple-600">
                            <s.icon size={14} />
                            {s.title}
                          </p>
                          <p className="text-[11px] text-gray-500">{s.desc}</p>
                        </Link>
                      ))}
                    </div>

                  </div>
                </div>
              )}
            </div>

            {/* INTERNSHIPS */}
<div className="relative" onMouseEnter={openIntern} onMouseLeave={closeIntern}>
  <button className="flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium text-gray-700 hover:text-brand hover:bg-brand-light transition-all">
    Internships
    <FiChevronDown className={`transition-transform ${internOpen ? "rotate-180 text-brand" : ""}`} size={14} />
  </button>

  {internOpen && (
    <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 w-[720px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-5 z-[999]">

      <div className="grid grid-cols-3 gap-4 items-start">

        {/* TECHNOLOGY */}
        <div className="bg-gradient-to-b from-blue-600 to-blue-500 rounded-xl p-4 text-white h-full">
          <div>
            <p className="text-[10px] font-bold uppercase mb-3">
              Technology
            </p>

            {INTERNSHIPS.tech.map((item) => {
              const Icon = item.icon;

              return (
                <a
                  key={item.title}
                  href={item.href}
                  target="_blank"
                  className="block px-3 py-2"
                >
                  <p className="text-xs font-semibold flex items-center gap-2 text-white">
                    <Icon size={14} />
                    {item.title}
                  </p>

                  <p className="text-[11px] opacity-80">
                    {item.desc}
                  </p>
                </a>
              );
            })}
          </div>
        </div>

        {/* MORE SERVICES */}
        <div className="p-4">
          <p className="text-[10px] font-bold text-brand uppercase mb-3">
            More Services
          </p>

          {INTERNSHIPS.more.map((item) => (
            <a
              key={item.title}
              href={item.href}
              target="_blank"
              className="block px-3 py-2 rounded-lg hover:bg-brand-light group"
            >
              <p className="text-xs font-semibold text-gray-800 flex items-center gap-2 group-hover:text-brand">
                <item.icon size={14} />
                {item.title}
              </p>
              <p className="text-[11px] text-gray-500">
                {item.desc}
              </p>
            </a>
          ))}
        </div>

        {/* AI & DATA */}
        <div className="bg-gray-50 rounded-xl p-4">
          <p className="text-[10px] font-bold text-purple-600 uppercase mb-3">
            AI & Data
          </p>

          {INTERNSHIPS.ai.map((item) => {
            const Icon = item.icon;

            return (
              <a
                key={item.title}
                href={item.href}
                target="_blank"
                className="block px-3 py-2 rounded-lg hover:bg-purple-50 group"
              >
                <p className="text-xs font-semibold text-gray-800 flex items-center gap-2 group-hover:text-purple-600">
                  <Icon size={14} />
                  {item.title}
                </p>
                <p className="text-[11px] text-gray-500">
                  {item.desc}
                </p>
              </a>
            );
          })}
        </div>

      </div>
    </div>
  )}
</div>

            {/* COMPANY */}
            <div className="relative" onMouseEnter={openCompany} onMouseLeave={closeCompany}>
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-gray-700 hover:text-brand hover:bg-brand-light rounded-lg">
                Company
                <FiChevronDown size={14} />
              </button>

              {companyOpen && (
                <div className="absolute top-[calc(100%+10px)] left-0 w-[380px] bg-white rounded-3xl shadow-2xl border p-4">
                    <div className="grid grid-cols-2 gap-4">                    <div className="bg-gray-50 p-4 rounded-3xl">
                      <p className="text-xs uppercase text-gray-500 mb-2">Our Company</p>
                      <Link href="/about" className="text-sm font-semibold text-gray-900 hover:text-brand">About</Link>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-3xl">
                      <p className="text-xs uppercase text-gray-500 mb-2">Social Media</p>
                      <div className="flex gap-3">
                        <a href="https://www.linkedin.com/company/pixelwind-technologies/?originalSubdomain=in" target="_blank" className="w-10 h-10 flex items-center justify-center bg-white border rounded-xl hover:bg-brand hover:text-white">
                          <BsLinkedin size={18} />
                        </a>
                        <a href="https://www.instagram.com/pixelwind__technologies/" target="_blank" className="w-10 h-10 flex items-center justify-center bg-white border rounded-xl hover:bg-brand hover:text-white">
                          <BsInstagram size={18} />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

          </div>

          {/* CTA */}
          <div className="hidden md:flex">
            <Link href="/contact" className="bg-brand text-white px-5 py-2.5 rounded-full text-sm font-semibold">
              Get in touch
            </Link>
          </div>

          {/* MOBILE BTN */}
          <button className="md:hidden p-2" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={22} /> : <FiMenu size={22} />}
          </button>
        </div>
      </nav>
    </>
  );
}