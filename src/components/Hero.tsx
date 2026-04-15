"use client";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { FiArrowRight, FiArrowUpRight } from "react-icons/fi";
import { BsShieldCheck } from "react-icons/bs";

const SLIDES = [
  { tag: "Universal Reach & Accessibility", title: "Empowering Careers Through Technology", sub: "Industry-ready skills for every aspiring professional.", emoji: "🎓" },
  { tag: "Expertise & Innovation",           title: "Transforming Skills into Opportunities", sub: "From classroom to corner office — we bridge the gap.", emoji: "🚀" },
  { tag: "Impact & Results",                 title: "Your Growth, Our Mission",               sub: "Real training, real results, real careers.",          emoji: "🏆" },
  { tag: "Client-First Approach",            title: "Corporate Excellence Redefined",         sub: "Customized solutions that drive enterprise productivity.", emoji: "💡" },
];

export default function Hero() {
  const [cur, setCur] = useState(0);
  const [fading, setFading] = useState(false);
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const curRef = useRef(0);

  const scheduleNext = (nextIndex: number) => {
    setFading(true);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      curRef.current = nextIndex;
      setCur(nextIndex);
      setFading(false);
    }, 300);
  };

  useEffect(() => {
    scheduleNext((curRef.current + 1) % SLIDES.length);
    intervalRef.current = setInterval(() => {
      scheduleNext((curRef.current + 1) % SLIDES.length);
    }, 5000);
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const s = SLIDES[cur];

  return (
    <section className="pt-24 pb-12 bg-gray-50 min-h-[88vh] flex items-center">
      <div className="max-w-7xl mx-auto px-6 w-full">
        {/* Live badge */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-2 bg-white border border-gray-200 rounded-full px-4 py-2 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-[pulse2_2s_infinite]" />
            <span className="text-sm font-medium text-gray-700">Accepting New Training Cohorts</span>
          </div>
        </div>

        {/* Card */}
        <div className={`bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-300 ${fading ? "opacity-0 translate-y-2" : "opacity-100 translate-y-0"}`}>
          <div className="grid grid-cols-1 md:grid-cols-2 min-h-[420px]">
            {/* Left */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <span className="inline-block bg-brand-light text-brand text-xs font-semibold rounded-lg px-3 py-1 mb-5 w-fit">{s.tag}</span>
              <h1 className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-5">{s.title}</h1>
              <p className="text-gray-500 text-base leading-relaxed mb-8">{s.sub}</p>
              <div className="flex gap-3 flex-wrap">
                <Link href="/contact" className="flex items-center gap-2 bg-brand text-white font-semibold px-6 py-3 rounded-xl hover:bg-brand-dark transition-all shadow-md shadow-brand/20">
                  Book a Consultation <FiArrowUpRight size={16} />
                </Link>
                <Link href="#services" className="flex items-center gap-2 border-2 border-brand text-brand font-semibold px-6 py-3 rounded-xl hover:bg-brand-light transition-all">
                  Explore Services <FiArrowRight size={16} />
                </Link>
              </div>
            </div>
            {/* Right gradient */}
            <div className="bg-gradient-to-br from-brand to-brand-dark p-12 flex flex-col items-center justify-center relative overflow-hidden">
              <div className="absolute -top-16 -right-16 w-56 h-56 rounded-full bg-white/5" />
              <div className="absolute -bottom-10 -left-10 w-40 h-40 rounded-full bg-white/5" />
              <div className="relative z-10 text-center">
                <div className="text-7xl mb-6">{s.emoji}</div>
                <div className="bg-white/10 backdrop-blur rounded-2xl px-8 py-4 border border-white/20 mb-6">
                  <div className="flex items-center justify-center gap-2 text-white">
                    <BsShieldCheck size={18} />
                    <p className="font-bold text-lg">ISO 9001:2015 Certified</p>
                  </div>
                  <p className="text-white/70 text-sm mt-1">Pixelwind Technologies · Est. 2021</p>
                </div>
                <div className="flex gap-8 justify-center">
                  {[{ n:"5000+", l:"Students" },{ n:"98%", l:"Placement" },{ n:"50+", l:"Partners" }].map((st) => (
                    <div key={st.l} className="text-center">
                      <p className="text-white font-extrabold text-2xl">{st.n}</p>
                      <p className="text-white/60 text-xs">{st.l}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Dots */}
        <div className="flex gap-3 justify-center mt-6 flex-wrap">
          {SLIDES.map((sl, i) => (
            <button key={i} onClick={() => scheduleNext(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium border-2 transition-all ${i === cur ? "bg-brand border-brand text-white" : "bg-white border-gray-200 text-gray-600 hover:border-brand hover:text-brand"}`}>
              <span className={`w-1.5 h-1.5 rounded-full ${i === cur ? "bg-white" : "bg-brand"}`} />
              {sl.tag}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
